import { createRoot } from 'react-dom/client'
import { useRoute, useLocation } from 'wouter'
import './index.css'
import { App } from './App'

export function Root() {
  const [, params] = useRoute('/item/:id')
  const [, setLocation] = useLocation()
  return (
    <>
      <App />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>
          {new Date().toLocaleDateString()}
        </div>
        <a style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }} href="#" onClick={() => setLocation('/')}>
          {params ? '< back' : 'double click to enter portal'}
        </a>
      </div>
    </>
  )
}