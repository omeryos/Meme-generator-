'use strict'

renderGallery()
let gIsModelOpen = false

function renderGallery() {
  const imgs = getImgs();
  var strHtmls = `<div class="img-gallery-upload">
                      
                      <img src="img/plus.jpg" onclick="onUploadImage()">
                    </div>`;
  strHtmls += imgs
    .map((img) => {
      return `<div class="img-gallery">
                  <img src="${img.url}" onclick="onImgSelect(${img.id})">
                </div>`;
    })
    .join('');

  const elGallery = document.querySelector('.images-container');
  elGallery.innerHTML = strHtmls;
}




function onToggleMenu() {
  const elModal = document.querySelector('.modal')
  if (window.innerWidth > 820) {
    document.body.classList.remove('menu-open')

  }
  else document.body.classList.toggle('menu-open')
  const elBtnMenu = document.querySelector('.btn-menu')
  elBtnMenu.innerText = document.body.classList.contains('menu-open') ? '✕' : '☰'
  if (gIsModelOpen) {

    elModal.style.display = 'none'
    gIsModelOpen = false
    return
  }
  if (!gIsModelOpen) {

    elModal.style.display = 'block'
    gIsModelOpen = true
    return
  }
}



function onImgSelect(id) {
  // const img =  getImg(id)
  gMeme.selectedImgId = id
  const elCanvasCont = document.querySelector('.canvas-container');
  const elControlsCont = document.querySelector('.editor-container');
  const elGallery = document.querySelector('.gallery-container');
  const elCanvas = document.getElementById('canvas')
  const elControls = document.querySelector('.controls');


  elCanvasCont.classList.remove('display-none')
  elCanvas.classList.remove('display-none')
  elControlsCont.classList.remove('display-none')
  elControls.classList.remove('display-none')
  elGallery.classList.add('display-none')
  renderMeme()
}

function onShowGallery() {
  const elCanvasCont = document.querySelector('.canvas-container')
  const elControlsCont = document.querySelector('.editor-container')
  const elGallery = document.querySelector('.gallery-container')
  const elCanvas = document.getElementById('canvas')
  const elControls = document.querySelector('.controls');
  const elModal = document.querySelector('.modal')
  const elBtnMenu = document.querySelector('.btn-menu')
  if (gIsModelOpen) gIsModelOpen = false

  elBtnMenu.innerText = '☰'
  elModal.style.display = 'none'
  elControls.classList.add('display-none')
  elCanvasCont.classList.add('display-none')
  elControlsCont.classList.add('display-none')
  elGallery.classList.remove('display-none')
  elCanvas.classList.add('display-none')
}


