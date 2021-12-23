const { ipcRenderer } = require("electron");
const ipc = ipcRenderer

closebtn.addEventListener('click', ()=>{
    ipc.send('closeApp')
})

minbtn.addEventListener('click', ()=>{
    ipc.send('minApp')
})

maxbtn.addEventListener('click', ()=>{
    ipc.send('maxApp')
})