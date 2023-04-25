'use strict'

var gLines=[150,300,450]

function onIncreaseFont(){
    increaseFont() 
    renderMeme()
 
}

function onDecreaseFont(){
    decreaseFont()
    renderMeme()
}

function onSetColor(value){
    setColor(value)
    renderMeme()
  }

function onSwitchLine(){
    renderMeme()
    switchLine()
    console.log('gcurridx',gCurrLineIdx)
    console.log('currtxt',gMeme.lines[gCurrLineIdx].txt)
    renderMeme()
}

function onSetText(value) {
    renderMeme()
    setLineText(value)
    renderMeme()
}

function renderMeme() {
    const meme = getMeme()
    const inputImg = getImg(meme.selectedImgId)
    var img = new Image()
    img.src = inputImg.url
    img.onload = function () {
        gCtx.drawImage(img, 0, 0) 

        for (let i = 0; i < meme.lines.length; i++) {
            const line = meme.lines[i]
            gCtx.font = `${line.size}px Arial`
            gCtx.fillStyle = `${line.color}`
            gCtx.textAlign = `${line.align}`
            gCtx.textBaseline = 'middle'
            let text = line.txt
            gCtx.fillText(text, gElCanvas.width / 2, gLines[i])
        }
    }
}




/*
function renderMeme() {
    const meme = getMeme()
    const inputImg = getImg(meme.selectedImgId)
    var img = new Image()
    img.src = inputImg.url
    img.onload = function () {
        gCtx.drawImage(img, 0, 0) 
        gCtx.font = `${meme.lines[gCurrLineIdx].size}px Arial`
        gCtx.fillStyle = `${meme.lines[gCurrLineIdx].color}`
        gCtx.textAlign = `${meme.lines[gCurrLineIdx].align}`
        gCtx.textBaseline = 'middle' // Set the fill color for the text
        let text = meme.lines[gCurrLineIdx].txt
        if(gCurrLineIdx===0){ gCtx.fillText(text, gElCanvas.width / 2, 150)}
        if(gCurrLineIdx===1){ gCtx.fillText(text, gElCanvas.width / 2, 450)}
        if(gCurrLineIdx>1){ gCtx.fillText(text, gElCanvas.width / 2, gElCanvas.height/2)}
        
    }
    
}
*/