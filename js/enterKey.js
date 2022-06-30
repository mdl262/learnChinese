window.addEventListener('load',
    document.getElementById("input").addEventListener("keypress", function (e) {
        if (e.keyCode == 13 || e.which == 13) {
            e.preventDefault();
            document.getElementById('input').blur();
        }
    })

    ,false);
