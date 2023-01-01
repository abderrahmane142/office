var slideImg = document.getElementById("slideImg");
var images = new Array(
    "photo/pexels-andrew-neel-8960464.jpg",
    "photo/pexels-katerina-holmes-5905445.jpg",
    "photo/pexels-pixabay-37347.jpg",
    "photo/pexels-rachel-claire-4857757.jpg"
);

var Len = images.length;
var i = 0;

function slider (){
    if (i > Len-1){
        i = 0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 3000)
}