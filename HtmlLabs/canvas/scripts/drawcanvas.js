
$(document).ready(function () {
    //console.log("ready!");
    //alert('hej');
    draw();
});

//function draw() {
//    var canvas = document.getElementById('ncanvas');
    
//    var ctx = canvas.getContext('2d')
//    ctx.fillRect(10, 20, 30, 200);
//    ctx.fillRect(100, 20, 30, 200);
//    ctx.fillRect(10, 80, 100, 10);

//    //samma kod med jQuery
//    var jQueryCanvas = $('ncanvas');
//}
//function draw() {
//    var c=document.getElementById('ncanvas');
//    var ctx=c.getContext('2d');
//    ctx.fillStyle='#FF0000';
//    ctx.fillRect(20, 20, 150, 100);
//}

function draw() {
    var c = document.getElementById('ncanvas');// här deklarerar vi vår canvas.
    var ctx = c.getContext('2d');//vi hämtar en yta som är 2d(bildyta)
    var gradient = ctx.createLinearGradient(0, 0, 170, 0);//Här sätter vi vår positionering av var ytan skall vara.
    gradient.addColorStop('0', "magenta");//härsättervi en colorStop som är magneta, (stop för att den inte ska ta hela ramen)
    gradient.addColorStop('0.5', "blue");
    gradient.addColorStop('1.0', "red");

    ctx.strokeStyle=gradient;//här gör vi en Strokestyle som bli som gradient (alla fäger vi har satt)
    ctx.lineWidth = 5;//Vi sätter själva bredden till 5.
    ctx.strokeRect(20, 20, 150, 100);//Här sätter vi färgernas position på formen.s
}
