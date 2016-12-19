(function () {

let secretElement = document.getElementById('secret');
let openedElement = document.getElementById('opened');

let runTimeoutAnimation = () => {
	setTimeout(() => {
		openedElement.classList.add('element-animation');
		setTimeout(() => {
			openedElement.classList.add('hide-animation');
			setTimeout(() => {
				secretElement.classList.add('size-animation');
			}, 2000);
		}, 1000);
	}, 1000);
};


runTimeoutAnimation();

})();