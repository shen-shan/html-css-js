window.addEventListener('load', function() {

    var sidebar = document.querySelector('.sidebar');
    var btn = document.querySelector('.btn');
    var num = 0;
    btn.addEventListener('click', function() {
        num++;
        if (num % 2 != 0) {
            sidebar.style.display = "none";

            btn.innerHTML = '显示';
        } else {
            sidebar.style.display = "block";

            btn.innerHTML = '隐藏';

        }
    })
})