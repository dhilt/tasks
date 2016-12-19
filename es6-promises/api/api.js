(function () {

let postApi1 = 'https://jsonplaceholder.typicode.com/posts/1';
let postApi2 = 'https://jsonplaceholder.typicode.com/posts/2';
let postApi3 = 'https://jsonplaceholder.typicode.com/posts/3';

let injectIndexedData = (index, data) => {
	let titleElement = document.getElementById('title' + index);
	let bodyElement = document.getElementById('post' + index);
	titleElement.innerHTML += ') ' + data.title;
	bodyElement.innerHTML = data.body;
};

/*
GET-запрос https://jsonplaceholder.typicode.com/posts/1 возвращает JSON в следующем формате:

{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}

Именно этот объект ожидает функция injectIndexedData в качестве второго параметра (data).
Первый параметр (index) соответствует порядковому номеру запроса/елемента.

В качестве теста можно поробовать осуществить такой вызов:
injectIndexedData(1, {
	title: "My title",
	body: "Content"
})
*/


})();