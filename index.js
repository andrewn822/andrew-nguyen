var image = document.getElementById('different-cat');



image.addEventListener('click', function(image){
  var catType = image.target;
  console.log(catType);

  if (this.classList == 'cat-container') {
    image.target.classList.toggle('greencat');
  } else {
    image.target.classList.toggle('yellowcat');
  } 

})

