$(document).ready(function(){
    $('.box').click(function () {
        $(this).addClass(color);
    })

    $('.box').on('dblclick', function () {
        $(this).removeClass(color);
    })

    $('#reset').click(function () {
        $('.box').removeClass(colors);
    })
    var colors = 'red blue green yellow white';
    var color = 'white';

    $('#red').click(function () {
        color = 'red';
    })

    $('#blue').click(function () {
        color = 'blue';
    })

    $('#green').click(function () {
        color = 'green';
    })

    $('#yellow').click(function () {
        color = 'yellow';
    })

    $('#white').click(function () {
        color = 'white';
    })
});