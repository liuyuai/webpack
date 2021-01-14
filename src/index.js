import _  from 'loadsh'
import printMe from "./print";
import './style.css'


function component() {
  
  const element = document.createElement('div');
  const btn = document.createElement('button');
  // Lodash, now imported by this script
  
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
  btn.innerHTML = 'Click me and check the console';
  btn.onclick = printMe;
  element.appendChild(btn);
  
  return element;
}

// document.body.appendChild(component());

let element = component();  // Store the element to re-render on print.js changes
document.body.appendChild(element);


if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}
