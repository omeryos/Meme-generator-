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
    },
    {
        id: 7,
        url: 'img/7.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 8,
        url: 'img/8.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 9,
        url: 'img/9.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 10,
        url: 'img/10.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 11,
        url: 'img/11.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 12,
        url: 'img/12.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 13,
        url: 'img/13.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 14,
        url: 'img/14.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 15,
        url: 'img/15.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 16,
        url: 'img/16.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 17,
        url: 'img/17.jpg',
        keywords: ['funny', 'cat']
    },
    {
        id: 18,
        url: 'img/18.jpg',
        keywords: ['funny', 'cat']
    }
]
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'First line goes here!', size: 30, color: 'white', stroke: 'black', font: 'impact', pos: { x: 50, y: 90 }
        }
    ]
}
function getMeme() {
    return gMeme
}
function getLine() {
    return gMeme.lines[gCurrLineIdx]
}
function getLines() {
    return gMeme.lines
}
function getImgs() {
    return gImgs
}
function getImg(id) {
    const img = gImgs.find((gImg) => gImg.id === id)
    return img
}
function setColor(value) {
    gMeme.lines[gCurrLineIdx].color = value
}
function changeAlign(alignDir) {
    const line = getLine()
    line.align = alignDir
    switch (alignDir) {
        case 'left':
            line.pos.x = 0
            break
        case 'center':
            line.pos.x = gElCanvas.width / 2.9
            break
        case 'right':
            line.pos.x = gElCanvas.width - gCtx.measureText(line.txt).width
            break
    }

}
function increaseFont() {
    gMeme.lines[gCurrLineIdx].size++
}
function decreaseFont() {
    gMeme.lines[gCurrLineIdx].size--
}
function moveTextLeft() {
    gMeme.lines[gCurrLineIdx].pos.x -= 5

}
function moveTextRight() {
    gMeme.lines[gCurrLineIdx].pos.x += 5
}
function moveTextUp() {
    gMeme.lines[gCurrLineIdx].pos.y -= 5
}
function moveTextDown() {
    gMeme.lines[gCurrLineIdx].pos.y += 5
}
function setLineText(value) {
    const line = getLine()
    line.txt = [value]

}
function switchLine() {
    if (gCurrLineIdx < gMeme.lines.length) gCurrLineIdx++
    if (gCurrLineIdx === gMeme.lines.length) gCurrLineIdx = 0

}
function updateLineIdx(lineIdx) {
    gCurrLineIdx = lineIdx
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
        return true
    }
    return false
}
function removeLine() {
    if (gMeme.lines.length === 0) return
    gMeme.lines.splice(gCurrLineIdx, 1)
    gCurrLineIdx--
    if (gMeme.lines.length === 0) gCurrLineIdx = 0
}
function addLine(font) {
    if (gMeme.lines.length === 3) return
    const lines = getLines()
    const numNewLine = lines.length + 1
    const newLine = _createLine(font, numNewLine)
    gMeme.lines.push(newLine)
    gCurrLineIdx = (gMeme.lines.length - 1)
}
function _createLine(font, numNewLine) {
    const newPos = { x: gElCanvas.width / 2, y: gElCanvas.height / 2 }
    if (numNewLine === 1) newPos.y = 30
    if (numNewLine === 2) newPos.y = gElCanvas.height - 80
    if (numNewLine === 3) newPos.y = 210
    if (numNewLine > 3) return


    return {
        txt: '',
        size: 30,
        align: 'center',
        color: 'white',
        stroke: 'black',
        font: 'impact',
        pos: { x: newPos.x, y: newPos.y },

    }
}


