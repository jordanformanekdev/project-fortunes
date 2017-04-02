'use strict';
const electron = require('electron');
 
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow;
 
electron.app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
 
electron.app.on('ready', function() {
 
  mainWindow = new electron.BrowserWindow({ width: 1200, height: 750 });
  mainWindow.loadURL('file://' + __dirname + '/index.html');
 
  mainWindow.webContents.openDevTools();
 
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});