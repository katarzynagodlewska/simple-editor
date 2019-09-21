
// service worker registration - remove if you're not going to use it

// if ('serviceWorker' in navigator) {
//  window.addEventListener('load', function() {
//    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
//      // Registration was successful
//      console.log('ServiceWorker registration successful with scope: ', registration.scope);
//    }, function(err) {
//      // registration failed :(
//      console.log('ServiceWorker registration failed: ', err);
//    });
//  });
//}

// place your code below


//console.log(`Hello world!`);

const buttonLoad = document.querySelector('.button__load--js');
console.log(buttonLoad)
const buttonSave = document.querySelector('.button__save--js');

buttonLoad.addEventListener('click', (e) => {
  const textStringify = localStorage.getItem('textArea');
  const newText = JSON.parse(textStringify);
  document.querySelector('.textArea--js').value = newText;
});

buttonSave.addEventListener('click', (e) => {
  const text = document.querySelector('.textArea--js').value;
  const jsonText = JSON.stringify(text);
  localStorage.setItem('textArea', jsonText);
});

//const buttons = document.querySelector('.button--js');

const focusTextArea = document.querySelector('.focus--js');

if (localStorage.getItem('focusTextArea')) {
  focusTextArea.value = localStorage.getItem('focusTextArea');
}

focusTextArea.addEventListener('keyup', (e) => {
  localStorage.setItem("focusTextArea", e.target.value);
})

