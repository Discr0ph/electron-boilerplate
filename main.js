const { app, BrowserWindow, ipcMain } = require("electron")
require("electron-reloader")(module);
const ipc = ipcMain

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: true,
        }
    })

    win.loadFile('src/index.html')
    win.setMenu(null)

    //CLOSE WIN
    ipc.on('closeApp', ()=>{
        win.close()
    })

    ipc.on('minApp', ()=>{
        win.minimize()
    })

    ipc.on('maxApp', ()=>{
        if(win.isMaximized()){
            win.restore()
        } else {
            win.maximize()
        }
    })
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit()
})




