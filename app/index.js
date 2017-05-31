import './index.css';

// if({}) {
//   import('./async.js').then(({asyncTest})=>{asyncTest()}).catch(err=>{console.log(err)});
// }

function component() {    
  var element = document.createElement('div');

  element.innerHTML = 'Hello, webpack!!!';
 
  return element;  
}

document.body.appendChild(component());