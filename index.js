var image = document.getElementById('different-cat');

var catArray = ['cat-container', 'greencat', 'purplecat', 'yellowcat'];
var counter = 0; 

// function reset(n) {
//   n = 0;
// }

image.addEventListener('click', function(image){
  // image.target.classList.toggle('greencat');
  // console.log('greencat');
  // for (i = 0; i < catArray.length - 1; i++ ){
  //   image.target.classList.toggle(catArray[i]);

  // catArray[3]    'yellw     } 

  if (counter == 0) {
    image.target.classList.toggle(catArray[counter + 1]);
  } else if (counter == 1){
    image.target.classList.toggle(catArray[counter + 1]);
  } else if (counter == 2){
    image.target.classList.toggle(catArray[counter + 1]);
  } 

  if(counter >= 3){
    
    image.target.classList.toggle(catArray[3]);
  } else {
    counter++;
  }
})

// cat1
// //cat1
// int counter = 1;
// 'cat'+ counter

// for(int i = 0; i < ; i++){ 
//   image.addEventListener('click', function(image)){
//     image.target.classList.toggle('cat' + counter)
//   }
// }