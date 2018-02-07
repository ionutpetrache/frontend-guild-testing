$(document).ready(function() {
    console.log('Ready');
    setTimeout(function() {
        $('.js-one').removeClass('no-display');
    }, 3000);

    setTimeout(function() {
        $('.js-two').delay(5000).removeClass('no-display');
    }, 5000);

    setTimeout(function() {
        $('.js-three').delay(7000).removeClass('no-display');
    }, 7000);
});