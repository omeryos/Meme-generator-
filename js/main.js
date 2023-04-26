'use strict'

var gElCanvas;
var gCtx;

gElCanvas = document.getElementById('canvas');
gCtx = gElCanvas.getContext('2d');

// function getImg(id) {
//     const img = gImgs.find((gImg) => gImg.id === id)
//     return img
// }


function removeLine() {
    if(gMeme.lines.length === 0)return
    gMeme.lines.splice(gCurrLineIdx, 1)
    gCurrLineIdx--
    console.log('gCurrLineIdx on the remove function',gCurrLineIdx )
    if(gMeme.lines.length===0)gCurrLineIdx = 0
}




function changeAlign(alignDir) {
    const line = getLine();
    line.align = alignDir;
  
    switch (alignDir) {
      case 'left':
        line.pos.x = 0;
        break;
      case 'center':
        line.pos.x = gElCanvas.width / 2;
        break;
      case 'right':
        line.pos.x = gElCanvas.width;
        break;
    }
  } 
  function addLine(font) {
    if(gMeme.lines.length===3)return
    const lines = getLines();
    const numNewLine = lines.length + 1;
    const newLine = _createLine(font, numNewLine);
    gMeme.lines.push(newLine);
    gCurrLineIdx=(gMeme.lines.length - 1);
  }

  function _createLine(font, numNewLine) {
    const newPos = { x: gElCanvas.width / 2, y: gElCanvas.height / 2 };
    // check if the line is first or second
    if (numNewLine === 1) newPos.y = 50;
    if (numNewLine === 2) newPos.y = gElCanvas.height - 80;
    if (numNewLine === 3) newPos.y = 250
    if (numNewLine > 3) return

  
    return {
      txt: '',
      size: 22,
      align: 'center',
      color: 'white',
      stroke: 'black',
      font,
      pos: { x: newPos.x, y: newPos.y },
      isDrag: false,
    };
  }