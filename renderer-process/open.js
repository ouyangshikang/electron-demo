const btn = document.querySelector('#btn');
const path = require('path');
const { BrowserWindow } = require('electron').remote;
console.dir(BrowserWindow);
btn.onclick = () => {
    // window.open('http://frontman.cn');
    let win = new BrowserWindow({
        width: 800,
        height: 600,
    });

    win.on('closed', () => {
        win = null;
    });

    win.loadURL(path.join('file:', __dirname, '../model.html'));
}