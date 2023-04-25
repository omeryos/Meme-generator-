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
        { txt: 'I sometimes eat Falafel', size: 22, align: 'right', color: 'white' },
        { txt: 'Hello world', size: 32, align: 'right', color: 'red' },
        { txt: 'NAHOYYYY world', size: 32, align: 'right', color: 'white' }
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
    gCurrLineIdx++
     if(gCurrLineIdx===gMeme.lines.length)gCurrLineIdx=0
}
