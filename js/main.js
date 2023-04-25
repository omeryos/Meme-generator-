'use strict'

var gElCanvas;
var gCtx;

gElCanvas = document.getElementById('canvas');
gCtx = gElCanvas.getContext('2d');

function renderMeme(img) {
    // Draw the img on the canvas


}

function onRenderMeme(id) {

}

function onSetText(value) {
    setLineTxt(value)
}

function getImg(id) {
    const img = gImgs.find((gImg) => gImg.id === id)

    return img
}
function eventListeners(){

}

function renderMeme() {
    const meme = getMeme()
    const inputImg = getImg(meme.selectedImgId)
    var img = new Image()
    img.src = inputImg.url
    img.onload = function () {
        gCtx.drawImage(img, 0, 0) // Draws the entire image at (0, 0) on the canvas
        gCtx.font = `${meme.lines[0].size}px Arial`
        gCtx.fillStyle = `${meme.lines[0].color}`
        gCtx.textAlign = `${meme.lines[0].align}`
        // gCtx.textBaseline = 'middle' // Set the fill color for the text
        let text = meme.lines[0].txt
        gCtx.fillText(text, gElCanvas.width / 2, 150)
    }
    
}


function setLineText(value) {
    const line = getLine()
    line.txt=[value]
    renderMeme()
}





















// function setLineTxt(txt){
//     gMeme.lines.txt = txt
//     gCtx.font = "20px Arial"; // Set the font for the text
//     gCtx.fillStyle = "white"; // Set the fill color for the text
//     gCtx.fillText("Hello", gElCanvas.width/2, 450);


// }

