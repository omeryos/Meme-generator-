'use strict'

var gCurrLineIdx=0

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
    lines: [{ txt: 'I sometimes eat Falafel', size: 22, align: 'right', color: 'white' }] 
}

function getMeme(){
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