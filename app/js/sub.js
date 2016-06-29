/*commonJS的写法*/

// function generateText () {
// 	var ele = document.createElement('h2');
// 	ele.innerHTML = "Hello h2 world";
// 	return ele;
// }

// module.exports = generateText;



/*es6的写法*/
export default function(){
	var ele = document.createElement('h2');
	ele.innerHTML = "Hello h2 world";
	return ele;
}