declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: 'development' | 'production'
        readonly PORT: string
    }
}

interface Window {
    /** Turn off preload animation */
    removeLoading: () => void
}
