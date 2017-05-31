import './index.css';

if(true) {
  import('./async.js').then(({asyncTest})=>{asyncTest()}).catch(err=>{console.log(err)});
}

function component() {
  let element = document.createElement('div');

  element.innerHTML = 'Hello, webpack!!!';

  return element;
}

document.body.appendChild(component());