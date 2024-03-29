import { useState } from 'react'

export default function Versions(): JSX.Element {
  const [versions] = useState(window.electron.process.versions)

  return (
    <ul className='mx-auto flex gap-10'>
      <li className='electron-version'>Electron v{versions.electron}</li>
      <li className='chrome-version'>Chromium v{versions.chrome}</li>
      <li className='node-version'>Node v{versions.node}</li>
      <li className='v8-version'>V8 v{versions.v8}</li>
      <li className='app-version'>App v{import.meta.env.APP_VERSION}</li>
    </ul>
  )
}
