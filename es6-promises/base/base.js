(function () {

let elements = {
	'status1': document.getElementById('status1'),
	'status2': document.getElementById('status2'),
	'status3': document.getElementById('status3'),
	'status4': document.getElementById('status4')
}

let indexes = [1, 2, 3, 4];

let data = [
	{
		id: 1,
		type: 'good',
		message: 'Hello!'
	}, {
		id: 2,
		type: 'bad'
	}, {
		id: 3,
		type: 'ugly',
		message: 'Damned!'
	}
];

let getMessage = (id) => {
	let found = data.find(item => item.id === id);
	if(found && found.message) {
		return found.message;
	}
	return 'No message found.';
};

let processElements = () => {
	indexes.forEach(index => 
		elements['status' + index].innerHTML = getMessage(index)
	);
};

processElements();

/*
Комментарии к исходному коду.

Мы заявили 4 контейнера для сообщений (elements + indexes).
В исходном массиве данных (data) нет сообщения у 2го элемента и отсутствует 4й элемент.
Соответственно статус 2го и 4го сообщения будет 'No message found.' (см getMessage).
И, наконец, processElements просто выводит 4 сообщения в 4 контейнера.
*/

/*
Комментарии к задаче.

Предположим, что data можно получить только асинхронным способом (например, запросив сервер).
Мы не будем эмулировать асинхронность получения data (этому будет посвящена задача 'api'), но
имплементируем выполнение data.find() в асинхронном контексте новой функции getMessageAsync.
Вместо прежний инструкций return должны появиться вызовы resolve и reject колбэков.

С тех пор, как getMessageAsync возвращает promise, мы больше не можем пользоваться синхронной ф-ией processElements.
Ф-ия processElementsAsync должна ловить на каждой итерации forEach результат выполнения getMessageAsync
и обрабатывать его в предположении, что он может быть resolved или rejected.

Изменение цвета можно осуществить через такое присвоение такого вида:
elements['status' + index].style.color = 'red'
*/

})();