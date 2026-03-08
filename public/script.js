const socket = io();

const roomId = "room1";

socket.emit("join-room", roomId);

const editor = CodeMirror.fromTextArea(
document.getElementById("editor"),
{
lineNumbers:true,
mode:"javascript"
}
);

editor.on("change", ()=>{

const code = editor.getValue();

socket.emit("code-change",{
roomId:roomId,
code:code
});

});

socket.on("code-change",(code)=>{

if(code !== editor.getValue()){
editor.setValue(code);
}

});
