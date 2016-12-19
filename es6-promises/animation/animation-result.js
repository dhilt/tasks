(function () {

let secretElement = document.getElementById('secret');
let openedElement = document.getElementById('opened');

let runPromiseAnimation = () => {
	let delay = (ms) =>
		new Promise((resolve, reject) => 
			setTimeout(() => {
				if(true) {
					resolve();
				}
				else{
					reject();
				}
			}, ms)
		);

	delay(1000).then(() => { 
		openedElement.classList.add('element-animation');
		return delay(1000);
	}).then(() => {
		openedElement.classList.add('hide-animation');
		return delay(2000);
	}).then(() => {
		secretElement.classList.add('size-animation');
	})
};

runPromiseAnimation();

})();