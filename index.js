const animationContainerRTL = document.getElementById('horizontal-animation-rtl');
const block = document.getElementsByClassName('block');
const autoplayCheckbox = document.getElementById('autoplay');

const animationContainerWidth = animationContainerRTL.scrollWidth; // 1440 px
const windowWidth = window.innerWidth;

const onWidth = (animationContainerWidth / block.length).toFixed(0);

const blockElement = document.createElement('div');
const blockElementParagraph = document.createElement('p');

let incrementSpeed = 1;
let movePixelAmount = 0, index = 0, x = 0, passedBlock = 0;

let autoplay = false;
let executeAutoplay;

const carouselAutoplay = () => {
    if(windowWidth <= animationContainerWidth){
        var result = (passedBlock - Math.floor(passedBlock)) == false
        if(result && passedBlock >= 1){
            const nextSlide = () => {
                animationContainerRTL.appendChild(animationContainerRTL.getElementsByClassName('block')[0]);
                animationContainerRTL.getElementsByClassName('block')[0].className = "block active"
            }
            nextSlide();
        }

        animationContainerRTL.getElementsByClassName('block')[block.length - 1].className = "block"

        movePixelAmount = movePixelAmount + incrementSpeed;
        passedBlock = movePixelAmount / onWidth
    } { return 0 };
}

const enableAutoplay = () => {
    executeAutoplay = setInterval(carouselAutoplay, 20)
}

const disableAutoplay = () => {
    clearInterval(executeAutoplay)
}

autoplayCheckbox.addEventListener('click', () => {
    autoplay = !autoplay;
    let status = autoplay ? 'Autoplay enabled.' : !autoplay ? 'Autoplay disabled.' : null;
    console.log(status)
    autoplayCheckbox.checked ? enableAutoplay()
    : !autoplayCheckbox.checked ? disableAutoplay()
    : null
})