const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

// window 全局对象的引用
let win;

const createWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
    });

    // 加载应用的url
    const URL = url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:', // 协议
        slashes: true  // 允许双斜线
    }) 
    win.loadURL(URL);

    // 打开开发者工具
    win.webContents.openDevTools();

    // 监听window close事件
    win.on('close', () => {
        win = null;
    });
}


// 监听ready事件
app.on('ready', createWindow);

// 监听当全部窗口关闭时退出
app.on('window-all-closed', () => {
    if(process.platform !== 'drawin') {
        app.quit();
    }
})

// 
app.on('activate', () => {
    if (win === null) {
        createWindow()
      }    
})