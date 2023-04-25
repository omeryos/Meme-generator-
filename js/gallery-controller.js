'use strict'

renderGallery()

function renderGallery() {
    const imgs = getImgs();
    var strHtmls = `<div class="img-gallery"">
                      <input type="file" name="image" onchange="onUploadImg(event)">
                      <label for="BtnUploadHidden">Upload an image</label>
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
    renderMeme()
  }

