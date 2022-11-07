var image = document.getElementById('cat-picture');

image.addEventListener("click", function(){
    var image = document.getElementById('cat-picture');
    if(image.src != "cat pic.jpeg"){
      image.src = "cat pic.jpeg";}
    else{
      image.src = "greencat.jpg";
    }
    });

    console.log(image.src);