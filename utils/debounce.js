module.exports = function debounce(fn, delay, immediate = false) {
	let timerId;
	return (...args) => {
		const boundFunc = fn.bind(this, ...args);
		clearTimeout(timerId);
		if (immediate && !timerId) {
			boundFunc();
		}
		const calleeFunc = immediate ? () => { timerId = null } : boundFunc;
		timerId = setTimeout(calleeFunc, delay);
	}
}