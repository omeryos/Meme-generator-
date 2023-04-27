'use strict'

// var gLines=[150,250,350]
// var gElCanvas;
// var gCtx;
// // function onInit(){
// //     eventListeners()
    
// function onInit() {
//     gElCanvas = document.querySelector('#canvas');
//     gCtx = gElCanvas.getContext('2d');
//     window.addEventListener('resize', resizeCanvas)
//     eventListeners()
//     resizeCanvas(); // Call the function initially to set the canvas size
//   }
// // }
// // function onInit() {
// //     gElCanvas = document.querySelector('#canvas')
// //     gCtx = gElCanvas.getContext('2d')
// //     window.addEventListener('resize', resizeCanvas)
// //     addListeners()
// //     renderMeme()
// // }
// function resizeCanvas(width, height) {
    
//     const resizedCanvas = document.createElement('canvas');
//     resizedCanvas.width = width;
//     resizedCanvas.height = height;
//     console.log(resizedCanvas.width)
//     const newCtx = resizedCanvas.getContext('2d');
//     newCtx.drawImage( gElCanvas, 0, 0,gElCanvas.width,gElCanvas.height,0,0, resizedCanvas.width,resizedCanvas.height)
//     renderMeme()
// }

var gLines = [150, 250, 350];
var gElCanvas;
var gCtx;

function onInit() {
  gElCanvas = document.querySelector('#canvas');
  gCtx = gElCanvas.getContext('2d');
  window.addEventListener('resize', resizeCanvas);
  eventListeners();
  resizeCanvas();
}

function resizeCanvas() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  gElCanvas.width = width;
  gElCanvas.height = height;
  renderMeme();
}

  

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
        gElCanvas.width = img.width
        gElCanvas.height = img.height
        gCtx.drawImage(img, 0, 0) 

        for (let i = 0; i < meme.lines.length; i++) {
            const line = meme.lines[i]
            gCtx.font = `${line.size}px ${line.font}`
            gCtx.fillStyle = `${line.color}`
            gCtx.strokeStyle = `${line.stroke}`
            gCtx.textBaseline = 'middle'
            let text = line.txt
            gCtx.fillText(text, line.pos.x, line.pos.y)
            gCtx.strokeText(text, line.pos.x, line.pos.y);
        }
    }
}

  
function eventListeners(){
    addMouseListeners()
    // window.addEventListener('resize', resizeCanvas)
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

function onChangeTextAlign(align){
    changeAlign(align)
    renderMeme()
  }



// function renderMeme() {           
//     const meme = getMeme()
//     const inputImg = getImg(meme.selectedImgId)
//     var img = new Image()
//     img.src = inputImg.url
//     img.onload = function () {
//         gCtx.drawImage(img, 0, 0) 

//         for (let i = 0; i < meme.lines.length; i++) {
//             const line = meme.lines[i]
//             gCtx.font = `${line.size}px ${line.font}`
//             gCtx.fillStyle = `${line.color}`
//             // gCtx.textAlign = `${line.align}`
//             gCtx.strokeStyle = `${line.stroke}`
//             gCtx.textBaseline = 'middle'
//             let text = line.txt
//             gCtx.fillText(text, line.pos.x, line.pos.y)
//             gCtx.strokeText(text, line.pos.x, line.pos.y); // use strokeText() instead of fillText()
//         }
//     }
// }