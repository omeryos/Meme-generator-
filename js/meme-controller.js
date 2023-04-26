'use strict'

var gLines=[150,300,450]


eventListeners()


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
    console.log('gcurrIDX before switch', gCurrLineIdx)
    renderMeme()
    switchLine()
    console.log('gcurridx after switch',gCurrLineIdx)
    // console.log('currtxt',gMeme.lines[gCurrLineIdx].txt)
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


function onDown(ev) {
    const { offsetX, offsetY} = ev
    const isClicked = isLineClicked(offsetX, offsetY)
}

function eventListeners(){
    addMouseListeners()
    // addTouchListeners()
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousedown', onDown)
    // gElCanvas.addEventListener('mousemove', onMove)
    // gElCanvas.addEventListener('mouseup', onUp)
  }

  function addTouchListeners() {
    // gElCanvas.addEventListener('touchstart', onDown)
    // gElCanvas.addEventListener('touchmove', onMove)
    // gElCanvas.addEventListener('touchend', onUp)
  }


function onDown(ev) {
    const { offsetX, offsetY } = ev
    const isClicked = isLineClicked(offsetX, offsetY)
}

function onRemoveLine() {
    if (confirm('Are you sure you would like to delete this item?')) {
        removeLine()
        renderMeme()  
    }
}



function onAddLine() {
    addLine()
}

function onChangeFontFamily(font) {
    changeFontFamily(font)
    renderMeme()
  }