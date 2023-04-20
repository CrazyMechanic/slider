/* eslint-disable prefer-rest-params */
/* eslint-disable no-undef */
function SwipeCarousel() {
  Carousel.apply(this, arguments);
}

SwipeCarousel.prototype = Object.create(Carousel.prototype);
SwipeCarousel.prototype.constructor = SwipeCarousel;

SwipeCarousel.prototype.initListeners = function (e) {
  Carousel.prototype.initListeners.apply(this);
  this.container.addEventListener('touchstart', this.swipeStart.bind(this));
  this.container.addEventListener('mousedown', this.swipeStart.bind(this));
  this.container.addEventListener('touchend', this.swipeEnd.bind(this));
  this.container.addEventListener('mouseup', this.swipeEnd.bind(this));
};

SwipeCarousel.prototype.swipeStart = function (e) {
  this.startPosX = e instanceof MouseEvent
    ? e.pageX
    : e.changedTouches[0].pageX;
};

SwipeCarousel.prototype.swipeEnd = function (e) {
  this.endPosX = e instanceof MouseEvent
    ? e.pageX
    : e.changedTouches[0].pageX;

  if (this.endPosX - this.startPosX > 100) this.prevHandler();
  if (this.endPosX - this.startPosX < -100) this.nextHandler();
};

console.dir(SwipeCarousel);