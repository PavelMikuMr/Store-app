import React from 'react'

export default function lazyLoad(path: string) {
  return React.lazy(() => import(path) as Promise<{ default: () => JSX.Element }>)
}
