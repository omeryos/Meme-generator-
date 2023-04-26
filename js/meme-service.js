'use strict'

var gCurrLineIdx = 0

var gKeywordSearchCountMap = {
    'funny': 12,
    'cat': 16,
    'baby': 2
}
var gImgs = [
    {
        id: 1,
        url: 'img/1.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 2,
        url: 'img/2.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 3,
        url: 'img/3.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 4,
        url: 'img/4.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 5,
        url: 'img/5.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 6,
        url: 'img/6.jpg',
        keywords: ['funny', 'cat']
    }
];
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        // { txt: 'I sometimes eat Falafel', size: 22, align: 'right', color: 'white',stroke: 'black', font : 'arial', pos: { x: gElCanvas.width/2, y: 150 },
        // isDrag: false, },
        // { txt: 'I HELLO WORLD', size: 22, align: 'right', color: 'red',stroke: 'black', font : 'arial', pos: { x: gElCanvas.width/2, y: 300 },
        // isDrag: false, },
        // { txt: 'I PROGRAM CODE', size: 22, align: 'right', color: 'black',stroke: 'black', font : 'arial', pos: { x: gElCanvas.width/2, y: 450 },
        // isDrag: false, }
    ]
}
function getMeme() {
    return gMeme
}
function getLine() {
    return gMeme.lines[gCurrLineIdx];
}
function getLines() {
    return gMeme.lines
}
function getImgs() {
    return gImgs;
}
function getImg(id) {
    const img = gImgs.find((gImg) => gImg.id === id)
    return img
}
function setColor(value) {
    gMeme.lines[gCurrLineIdx].color = value
}
function increaseFont() {
    gMeme.lines[gCurrLineIdx].size++
}
function decreaseFont() {
    gMeme.lines[gCurrLineIdx].size--
}
function setLineText(value) {
    const line = getLine()
    line.txt = [value]
    console.log('line:',line.txt )
}
function switchLine(){
    if(gCurrLineIdx<gMeme.lines.length) gCurrLineIdx++
     if(gCurrLineIdx===gMeme.lines.length)gCurrLineIdx=0
}
function updateLineIdx(lineIdx) {
    gCurrLineIdx = lineIdx
}

function getEvPos(ev) {
    // Gets the offset pos , the default pos
    let pos = {
      x: ev.offsetX,
      y: ev.offsetY,
    }
     console.log('pos:', pos)
    // Check if its a touch ev
    // if (TOUCH_EVS.includes(ev.type)) {
    //   //soo we will not trigger the mouse ev
    //   ev.preventDefault()
    //   //Gets the first touch point
    //   ev = ev.changedTouches[0]
    //   //Calc the right pos according to the touch screen
    //   // console.log('ev.pageX:', ev.pageX)
    //   // console.log('ev.pageY:', ev.pageY)
    //   pos = {
    //     x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
    //     y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
    //   }
    //   // console.log('pos:', pos)
    // }
    return pos
  }
  
  function changeFontFamily(font) {
    const line = getLine()
    if (!line) return
    line.font = font
  }

  function isLineClicked(offsetX, offsetY) {
    const lines = getLines()
    const clickedLineIdx = lines.findIndex((line) => {
        const lineWidth = gCtx.measureText(line.txt).width
        const lineHeight = line.size
        return (
            offsetX >= line.pos.x - lineWidth / 2 - 10 &&
            offsetX <= line.pos.x + lineWidth + 20 &&
            offsetY >= line.pos.y - 10 &&
            offsetY <= line.pos.y + lineHeight + 20
        )
    })
    if (clickedLineIdx !== -1) {
        updateLineIdx(clickedLineIdx)
        
        console.log('clickedLineIdx', clickedLineIdx)
        return true
    }
    return false
}

function drawBorder() {
  const line = getLine()
  if (!line) return
  gCtx.beginPath()
  gCtx.rect(
    line.pos.x - gCtx.measureText(line.txt).width  - 15,
    line.pos.y - 20,
    gCtx.measureText(line.txt).width + 20,
    line.size + 20
  )
  gCtx.lineWidth = 2
  gCtx.strokeStyle = 'orange'
  gCtx.stroke()
  gCtx.closePath()
}