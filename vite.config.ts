import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

type ViteConfigInput = {
  mode: string
  command: string
}

export default (args: ViteConfigInput) => {
  const generateScopedName =
    args.mode === 'production' ? '[hash:base64:4]' : '[local]_[hash:base64:4]'

  return defineConfig({
    optimizeDeps: {
      esbuildOptions: {
        target: 'es2020'
      }
    },
    esbuild: {
      // https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
      logOverride: { 'this-is-undefined-in-esm': 'silent' }
    },
    plugins: [
      react({
        babel: {
          plugins: ['babel-plugin-macros', 'babel-plugin-styled-components']
        }
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/'),
        '@components': path.resolve(__dirname, './src/components/'),
        '@public': path.resolve(__dirname, './public/'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '_types': path.resolve(__dirname, './types'),
        '@fields': path.resolve(__dirname, './src/components/fields/index'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@styles': path.resolve(__dirname, './src/styles'),
        '@common': path.resolve(__dirname, './src/styles/common'),
        '@views': path.resolve(__dirname, './src/styles/views')
      }
    },
    css: {
      modules: {
        localsConvention: 'camelCase',
        generateScopedName
      }
    }
  })
}
