/*commonJS的写法*/

// require('./main.css')
// require('./index.scss');

// var sub = require('./sub');
// var $ = require('jquery');
// var moment = require('moment');

// var app = document.createElement('div');
// app.innerHTML = '<h1>helloando</h1>';
// app.appendChild(sub());
// document.body.appendChild(app);

// $('body').append('<p>look at me ! now is ' + moment().format() + '</p>' );



/*es6的写法*/
import './css/main.css';
import './css/index.scss'
import './css/bootstrap.css'

import $ from 'jquery';
import moment from 'moment';
import  './js/lib/plugin.js';
import generateText from './js/sub';

let app = document.createElement('div');
const myPromise = Promise.resolve(42);
myPromise.then((number) => {
  $('body').append('<p>promise result is ' + number + ' now is ' + moment().format() + '</p>');
  $('p').greenify();
});
app.innerHTML = '<h1>Hello World it</h1>';
document.body.appendChild(app);
app.appendChild(generateText());
  
