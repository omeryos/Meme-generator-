'use strict'



const gLines = [150, 250, 350]
var gElCanvas
var gCtx

function onInit() {
    gElCanvas = document.querySelector('#canvas')
    gCtx = gElCanvas.getContext('2d')
    window.addEventListener('resize', resizeCanvas)
    eventListeners()
    renderGallery()
    resizeCanvas()
}
function resizeCanvas() {
    const width = window.innerWidth
    const height = window.innerHeight
    gElCanvas.width = width
    gElCanvas.height = height
    renderMeme()
}
function onIncreaseFont() {
    increaseFont()
    renderMeme()
}
function onDecreaseFont() {
    decreaseFont()
    renderMeme()
}
function onSetColor(value) {
    setColor(value)
    renderMeme()
}

function onSwitchLine() {
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
            gCtx.strokeText(text, line.pos.x, line.pos.y)
            drawBorder()
        }
    }
}
function drawBorder() {
    const line = getLine()
    if (!line) return
    gCtx.beginPath()
    const textWidth = gCtx.measureText(line.txt).width
    gCtx.rect(
        line.pos.x - textWidth * 0.01 - 10,
        line.pos.y - 25,
        textWidth + 20,
        line.size + 20
    )
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.stroke()
    gCtx.closePath()
}
function eventListeners() {
    addMouseListeners()
}
function addMouseListeners() {
    gElCanvas.addEventListener('mousedown', onDown)
}
function onDown(ev) {
    const { offsetX, offsetY } = ev
    const isClicked = isLineClicked(offsetX, offsetY)
    if (!isClicked) updateLineIdx(undefined)
    renderMeme()
}
function onRemoveLine() {
        removeLine()
        renderMeme()
}
function onAddLine() {
    addLine()
}
function onChangeFontFamily(font) {
    changeFontFamily(font)
    renderMeme()
}
function onChangeTextAlign(align) {
    changeAlign(align)
    renderMeme()
}
function OnMoveTextLeft() {
    moveTextLeft()
    renderMeme()
}
function OnMoveTextRight() {
    moveTextRight()
    renderMeme()
}
function OnMoveTextUp() {
    moveTextUp()
    renderMeme()
}
function OnMoveTextDown() {
    moveTextDown()
    renderMeme()
}



