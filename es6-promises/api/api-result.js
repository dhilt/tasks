(function () {

let postApi1 = 'https://jsonplaceholder.typicode.com/posts/1';
let postApi2 = 'https://jsonplaceholder.typicode.com/posts/2';
let postApi3 = 'https://jsonplaceholder.typicode.com/posts/3';

let injectPostData = (index, data) => {
	let titleElement = document.getElementById('title' + index);
	let bodyElement = document.getElementById('post' + index);
	titleElement.innerHTML += ') ' + data.title;
	bodyElement.innerHTML = data.body;
};

fetch(postApi1)
	.then((result) => result.json())
	.then((json) => injectPostData(1, json));

fetch(postApi2)
	.then((result) => result.json())
	.then((json) => injectPostData(2, json));

fetch(postApi3)
	.then((result) => result.json())
	.then((json) => injectPostData(3, json));

/*
let postApiList = [
	'https://jsonplaceholder.typicode.com/posts/1',
	'https://jsonplaceholder.typicode.com/posts/2',
	'https://jsonplaceholder.typicode.com/posts/3'
];

for(let i = 0; i < postApiList.length; i++) {
	fetch(postApiList[i])
		.then((result) => result.json())
		.then((json) => injectPostData(i + 1, json));
}
*/

})();