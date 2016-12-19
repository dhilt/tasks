(function () {

let notificationElement = document.getElementById('notification');

let postApiList = [
	'https://jsonplaceholder.typicode.com/posts/1',
	'https://jsonplaceholder.typicode.com/posts/2',
	'https://jsonplaceholder.typicode.com/posts/3'
];

let injectIndexedData = (index, data) => {
	let titleElement = document.getElementById('title' + index);
	let bodyElement = document.getElementById('post' + index);
	titleElement.innerHTML += ') ' + data.title;
	bodyElement.innerHTML = data.body;
};

let onLoadSuccess = () => {
	notificationElement.innerHTML = 'All API-requests are done.';
};

let promiseList = [];

/*for(let i = 0; i < postApiList.length; i++) {
	promiseList.push(fetch(postApiList[i]));
}

//postApiList.forEach((postApi) => promiseList.push(fetch(postApi)));

Promise.all(promiseList).then((results) => {
	onLoadSuccess();
	results.forEach((item, index) =>
		item.json().then((json) => 
			injectIndexedData(index + 1, json)
		)
	);
});
*/

postApiList.forEach((postApi, index) => 
	promiseList.push(fetch(postApi)
		.then((result) => result.json())
		.then((json) => injectIndexedData(index + 1, json))
	)
);

Promise.all(promiseList).then((results) => {
	onLoadSuccess();
});

})();