$(document).ready(function () {
    $('#butsnap').on('click', snap);
});

function snap() {
    var canvas = document.getElementById('myCanvas');
    var videon = document.getElementById('mvideo');
    canvas.getContext('2d').drawImage(videon, 0, 0, 200, 150);
}