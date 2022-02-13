window.addEventListener('load', function() {
    var arrowl = document.querySelector('.arrowl');
    var arrowr = document.querySelector('.arrowr');
    var people = document.querySelector('.people');
    var a = 0;
    var num = 0;
    arrowr.addEventListener('click', function() {
        people.style.left = people.offsetLeft - 140 + 'px';
        num++;
    });
    var timer = setInterval(function() {

        if (a >= 1680 - num * 140 % 1680) {
            a = 0;
            people.style.left = 0;
        }
        people.style.left = people.offsetLeft - 1 + 'px';
        a += 1;
    }, 3)

})