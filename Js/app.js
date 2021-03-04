const myHeading= document.getElementById('myHeading');
const myButton= document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const resetBlack = document.getElementById('resetBlack');
const changeBackground =document.getElementById('changeBackground');
const newBackground = document.getElementById('newBackground');

myButton.addEventListener('click', () => {
  myHeading.style.color= myTextInput.value;
                          });
resetBlack.addEventListener('click', () => {
   myHeading.style.color = "black"
                           });
newBackground.addEventListener('click', () =>{
 myHeading.style.backgroundColor = changeBackground.value
                                  });
