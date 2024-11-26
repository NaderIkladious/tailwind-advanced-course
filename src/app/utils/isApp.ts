export const isApp = () => {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.has('app');
}