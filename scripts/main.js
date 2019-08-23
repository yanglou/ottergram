var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;

var randomImageUrl="https://cdn.shopify.com/s/files/1/0032/7882/products/tacocat_art.png";

function setDetails(imageUrl, titleText) {
  'use strict';
  //Code will go here
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function randomImage(){
  var randomNumber = abs(math.random()-5);
  thumbnail-list
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', randomImageUrl);
}

function imageFromThumb(thumbnail) {
  'use strict'

  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict'
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumbnail(thumbnail){
  'use strict'
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail))
}

function addThumbClickHandler(thumb){
  'use strict'
  thumb.addEventListener('click', function (event){
    event.preventDefault();
    setDetailsFromThumbnail(thumb);
    showDetails();
  });
}

function getThumbnailsArray() {
  'use strict'
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function hideDetails() {
  'use strict'
  document.body.classList.add(HIDDEN_DETAIL_CLASS)
}

function showDetails() {
  'use strict'
  var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAIL_CLASS)
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function(){
    frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50)

}

function addKeyPressHandler() {
  'use strict';
  document.body.addEventListener('keyup', function(event){
    event.preventDefault();
    console.log(event.keyCode);
    if (event.keyCode === ESC_KEY) { //Uses strict equality operator ===, won't do any conversions
      hideDetails();
    }
  })
}
function initializeEvents() {
  'use strict'
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  addKeyPressHandler();
}

initializeEvents();
