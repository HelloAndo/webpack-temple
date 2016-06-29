import './css/index.scss'
// import './css/main.css';
import './js/lib/plugin.js'

$(document).ready(function() {
  let app  = document.createElement('div');
  app.innerHTML = '<h1>Hello World</h1>';
  document.body.appendChild(app);
  $('h1').greenify();
});

