'use strict'

renderGallery()

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

  function onImgSelect(id){
    // const img =  getImg(id)
    gMeme.selectedImgId=id
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

  function onShowGallery(){
    const elCanvasCont = document.querySelector('.canvas-container')
    const elControlsCont = document.querySelector('.editor-container')
    const elGallery = document.querySelector('.gallery-container')
    const elCanvas = document.getElementById('canvas')
    const elControls = document.querySelector('.controls');

    elControls.classList.add('display-none')
    elCanvasCont.classList.add('display-none')
    elControls.classList.add('display-none')
    elGallery.classList.remove('display-none')
    elCanvas.classList.add('display-none')
  }



  /*
   function onImgSelect(id){
    // const img =  getImg(id)
    gMeme.selectedImgId=id
    const elCanvas = document.querySelector('.canvas-container');
    const elControls = document.querySelector('.editor-container');
    const elGallery = document.querySelector('.gallery-container');
    elCanvas.classList.remove('display-none')
    elControls.classList.remove('display-none')
    elGallery.classList.add('display-none')
    renderMeme()
  }

  function onShowGallery(){
    const elCanvas = document.querySelector('.canvas-container')
    const elControls = document.querySelector('.editor-container')
    const elGallery = document.querySelector('.gallery-container')
    elCanvas.classList.add('display-none')
    elControls.classList.add('display-none')
    elGallery.classList.remove('display-none')
   
  }

  */