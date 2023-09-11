import icons from '@/renderer/assets/icons.svg'
import Versions from '@/renderer/components/versions'

export default function App(): JSX.Element {
  return (
    <div className='mx-auto flex h-full min-h-screen max-w-6xl flex-col justify-center px-8 py-4'>
      <Versions />

      <svg className='mt-4' viewBox='0 0 900 300'>
        <use xlinkHref={`${icons}#electron`} />
      </svg>

      <div className='mt-4 space-y-2 text-center'>
        <h2>You&apos;ve successfully created an Electron project with React and TypeScript</h2>
        <p>
          Please try pressing{' '}
          <code className='rounded bg-gray-700 p-1.5 font-mono text-sm'>F12</code> to open the
          devTool
        </p>
      </div>

      <div className='mb-8 mt-5 flex items-center justify-center gap-2 text-lg font-medium'>
        <div className='px-2'>
          <a
            target='_blank'
            href='https://electron-vite.org'
            rel='noopener noreferrer'
            className='hover:underline'
          >
            Documentation
          </a>
        </div>
        <div className='sr-only'>•</div>
        <div className='px-2'>
          <a
            target='_blank'
            href='https://github.com/alex8088/electron-vite'
            rel='noopener noreferrer'
            className='hover:underline'
          >
            Getting Help
          </a>
        </div>
        <div className='sr-only'>•</div>
        <div className='px-2'>
          <a
            target='_blank'
            href='https://github.com/alex8088/quick-start/tree/master/packages/create-electron'
            rel='noopener noreferrer'
            className='hover:underline'
          >
            create-electron
          </a>
        </div>
      </div>

      <div className='flex grid grid-cols-2 flex-wrap gap-2'>
        <div className='block w-full rounded-lg bg-gray-700 p-4'>
          <article>
            <h2 className='text-base font-semibold'>Configuring</h2>
            <p className='mt-1 text-sm'>
              Config with <span>electron.vite.config.ts</span> and refer to the{' '}
              <a
                target='_blank'
                href='https://electron-vite.org/config'
                rel='noopener noreferrer'
                className='underline hover:no-underline'
              >
                config guide
              </a>
              .
            </p>
          </article>
        </div>
        <div className='block w-full rounded-lg bg-gray-700 p-4'>
          <article>
            <h2 className='text-base font-semibold'>HMR</h2>
            <p className='mt-1 text-sm'>
              Edit <span>src/renderer</span> files to test HMR. See{' '}
              <a
                target='_blank'
                href='https://electron-vite.org/guide/hmr.html'
                rel='noopener noreferrer'
                className='underline hover:no-underline'
              >
                docs
              </a>
              .
            </p>
          </article>
        </div>
        <div className='block w-full rounded-lg bg-gray-700 p-4'>
          <article>
            <h2 className='text-base font-semibold'>Hot Reloading</h2>
            <p className='mt-1 text-sm'>
              Run{' '}
              <span>
                {"'"}electron-vite dev --watch{"'"}
              </span>{' '}
              to enable. See{' '}
              <a
                target='_blank'
                href='https://electron-vite.org/guide/hot-reloading.html'
                rel='noopener noreferrer'
                className='underline hover:no-underline'
              >
                docs
              </a>
              .
            </p>
          </article>
        </div>
        <div className='block w-full rounded-lg bg-gray-700 p-4'>
          <article>
            <h2 className='text-base font-semibold'>Debugging</h2>
            <p className='mt-1 text-sm'>
              Check out <span>.vscode/launch.json</span>. See{' '}
              <a
                target='_blank'
                href='https://electron-vite.org/guide/debugging.html'
                rel='noopener noreferrer'
                className='underline hover:no-underline'
              >
                docs
              </a>
              .
            </p>
          </article>
        </div>
        <div className='block w-full rounded-lg bg-gray-700 p-4'>
          <article>
            <h2 className='text-base font-semibold'>Source Code Protection</h2>
            <p className='mt-1 text-sm'>
              Supported via built-in plugin <span>bytecodePlugin</span>. See{' '}
              <a
                target='_blank'
                href='https://electron-vite.org/guide/source-code-protection.html'
                rel='noopener noreferrer'
                className='underline hover:no-underline'
              >
                docs
              </a>
              .
            </p>
          </article>
        </div>
        <div className='block w-full rounded-lg bg-gray-700 p-4'>
          <article>
            <h2 className='text-base font-semibold'>Packaging</h2>
            <p className='mt-1 text-sm'>
              Use{' '}
              <a
                target='_blank'
                href='https://www.electron.build'
                rel='noopener noreferrer'
                className='underline hover:no-underline'
              >
                electron-builder
              </a>{' '}
              and pre-configured to pack your app.
            </p>
          </article>
        </div>
      </div>
    </div>
  )
}
