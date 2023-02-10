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
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/'),
        '@components': path.resolve(__dirname, './src/components/'),
        '@public': path.resolve(__dirname, './public/'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@types': path.resolve(__dirname, './src/types'),
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
