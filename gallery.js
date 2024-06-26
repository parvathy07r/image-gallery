const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galleryImgs = document.querySelectorAll('.gallery-img');
let currentlySelected = 0;

prevBtn.addEventListener('click', function () {
    galleryImgs[currentlySelected].classList.remove("active");
    currentlySelected--;
    galleryImgs[currentlySelected].classList.add("active");
    nextBtn.disabled = false;

    if (currentlySelected === 0) {
        prevBtn.disabled = true;
    }

});

nextBtn.addEventListener('click', function () {
    galleryImgs[currentlySelected].classList.remove("active");
    currentlySelected++;
    galleryImgs[currentlySelected].classList.add("active");
    prevBtn.disabled = false;

    if (galleryImgs.length === currentlySelected + 1) {
        nextBtn.disabled = true;
    }

});

const { styler, spring, listen, pointer, value } = window.popmotion;

const ball = document.querySelector('h1');
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, 'mousedown touchstart')
    .start((e) => {
        e.preventDefault();
        pointer(ballXY.get()).start(ballXY);
    });

listen(document, 'mouseup touchend')
    .start(() => {
        spring({
            from: ballXY.get(),
            velocity: ballXY.getVelocity(),
            to: { x: 0, y: 0 },
            stiffness: 200,
            // mass: 1,
            // damping: 10
        }).start(ballXY);
    });