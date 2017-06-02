import './index.css';

// if({}) {
//   import('./async.js').then(({asyncTest})=>{asyncTest()}).catch(err=>{console.log(err)});
// }

var resolve  = require.resolve('./index.css');
console.log('resolve',resolve);

function component() {    
  var element = document.createElement('div');

  element.innerHTML = 'Hello, webpack!!!';
 
  return element;  
}

console.log('$',_);

document.body.appendChild(component());