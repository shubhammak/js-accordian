(function () {
    window.addEventListener('load', init_accordian);

    function init_accordian() {
        var clickEvent = document.querySelectorAll('.accordian-title');
        clickEvent.forEach(function (element) {
            element.addEventListener('click', function () {
                var alltitleTag = document.querySelectorAll('.accordian-title');
                alltitleTag.forEach(function (el) {
                    el.classList.remove('open');
                    el.nextElementSibling.classList.remove('open');
                });
                element.classList.add('open');
                element.nextElementSibling.classList.add('open');
            });

        });
    }
})()