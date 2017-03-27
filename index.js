const electron = require('electron')
const {app, BrowserWindow} = electron

app.on ('ready', () => {
  //Set display scale.
  let win = new BrowserWindow({width: 800, height: 630})
  //Hide menubar
  win.setMenu(null);
  //Load index.html
  win.loadURL(`file://${__dirname}/index.html`)
})
