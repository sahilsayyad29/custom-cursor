const handleCursor = document.querySelector('.cursor');

window.addEventListener('mousemove', handleMouse);

function handleMouse(e) {
	handleCursor.style.top = e.pageY + 'px';
	handleCursor.style.left = e.pageX + 'px';
}
