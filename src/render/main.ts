import '@src/common/patch'
import { createApp } from 'vue'
import App from './App.vue'
import { ipcRenderer } from 'electron'
import Store from 'electron-store'
import './index.css'

setTimeout(() => {
    console.log('ipcRenderer:', ipcRenderer)
    // Configuration name causes hot updates to be slow
    // Passing name will cause hot updates to be slow
    // console.log('electron-store', new Store({ name:'electron-vue' }))
    console.log('electron-store', new Store())

    // new Store will block the thread,
    // causing preload animation to freeze.
}, 2999)

createApp(App).mount('#app').$nextTick(window.removeLoading)
