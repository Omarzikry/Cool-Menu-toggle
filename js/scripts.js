$(document).ready(function () {
    $('.nav-toggle').click(
        function(){
        anime({
            targets: '.menu',
            opacity: '1',
            borderRadius: '1250px',
            width: 2500,
            height: 2500,
            right: -400,
            top: -400,
            easing: 'linear',
            duration: 500
        });   
    })
});