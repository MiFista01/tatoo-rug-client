var domReady = false
var hamDisable = false
var hamStep = 0

function getRandomInt(min, max, step){
    const range = (max - min) / step;
    return Math.floor(Math.random() * range) * step + min;
}
setTimeout(() => {
    hamDisable = true
}, getRandomInt(30, 160, 10)*100);

let interav = setInterval(()=>{
    hamStep++;
    if(hamDisable){
        if(hamStep == 0 || hamStep == 9){
            $(".wheel-and-hamster").remove();
            clearInterval(interav);
        }
    }
    hamStep %= 9
},500)
$(document).ready(function () {
    $(window).on("load", function () {
        
    });
    if (! domReady){
        $(".preloader").css("backdrop-filter", "blur(0px)");
        domReady = true
        setTimeout(() => {
            $(".preloader").remove();
        }, 700);
    }
});