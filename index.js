var image = document.getElementById('different-cat');



image.addEventListener('click', function(image){
  image.target.classList.toggle('greencat');
  var catType = image.target;
  console.log(catType);

  // if (this.classList == 'cat-container') {
  //   image.target.classList.toggle('greencat');
  // } else {
  //   image.target.classList.toggle('purplecat');
  // } 

})

