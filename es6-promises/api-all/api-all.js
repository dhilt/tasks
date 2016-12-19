(function () {

let notificationElement = document.getElementById('notification');

let postApiList = [
	'https://jsonplaceholder.typicode.com/posts/1',
	'https://jsonplaceholder.typicode.com/posts/g2',
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

/*
Существует несколько вариантов имплементаци этой задачи:
 - в массив promiseList можно класть fetches с цепочкой then.then и тогда на Promise.all у нас будет голый вызов onLoadSuccess
 - можно класть fetches без then, тогда внутри Promise.all нужно будет устроить пробег по результатам с дополнительным then-резолвом json и вызовом injectIndexedData на каждом результате
 - комбинированный вариант: в promiseList кладутся fetches с одним then, резолвящим json, а внутри Promise.all просто синхронно пробегаются результаты и для каждого вызывается injectIndexedData
*/

})();