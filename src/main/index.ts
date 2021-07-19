import '@src/common/patch'
import { join } from 'path'
import { app, BrowserWindow } from 'electron'
import dotenv from 'dotenv'

dotenv.config({ path: join(__dirname, '../../.env') })

let win: BrowserWindow

function createWin() {
    // Create main window
    win = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: join(__dirname, '../../src/preload/index.js')
        }
    })

    win.webContents.on('new-window', function (e, url) {
        e.preventDefault()
        require('electron').shell.openExternal(url)
    })

    const URL = app.isPackaged
        ? `file://${join(__dirname, '../render/index.html')}` // Vite static file address after build
        : `http://localhost:${process.env.PORT}` // Vite started server address

    win?.loadURL(URL)
}

app.whenReady().then(createWin)
