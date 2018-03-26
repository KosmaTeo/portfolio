var prev = document.querySelector('#slide-prev');
var next = document.querySelector('#slide-next');
var index = 1;

prev.addEventListener('click', function () {
    index--;
    if (index <= 0) {index = 8};
        var slide = document.getElementById('slide');
            slide.src = "images/photo" + index + ".jpg";
});

next.addEventListener('click', function () {
    index++;
    if (index >= 9) {index = 1};
        var slide = document.getElementById('slide');
            slide.src = "images/photo" + index + ".jpg";
});
