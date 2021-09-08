function prevent(event) {
	if (event.preventDefault) {
		event.preventDefault();
	} else {
		event.returnValue = false;
	}
}

export function on(ele, eventName, callback) {
	if (ele.addEventListener) {
		ele.addEventListener(eventName, callback, false);
	} else if (ele.attachEvent) {
		ele.attachEvent('on' + eventName, callback);
	} else {
		ele['on' + eventName] = callback;
	}
}

function hasClass(ele, className) {
	if (ele.className.indexOf(className) === -1) {
		return true;
	}
	return false;
}

function addClass(ele, className) {
	if (hasClass(ele, className)) {
		ele.className = ele.className.trim() + ' ' + className;
	}
}

function removeClass(ele, className) {
	if (!hasClass(ele, className)) {
		ele.className = ele.className.replace(className, '');
	}
}

export function getTarget(target) {
	while (target.className.indexOf('el-table__row') == -1) {
		target = target.parentNode;
	}
	return target;
}

// function off(ele, eventName, callback) {
// 	if (ele.removeEventListener) {
// 		ele.removeEventListener(eventName, callback, false);
// 	} else if (ele.detachEvent) {
// 		ele.detachEvent('on' + event, callback.bind(ele));
// 	} else {
// 		ele['on' + eventName] = null;
// 	}
// }

function onDragover(event) {
	prevent(event);
}

let dragTarget = null;

function onDragstart(event) {
	dragTarget = getTarget(event.target);

	dragTarget && addClass(dragTarget, 'drag-item');

	event.dataTransfer.setData('index', dragTarget.rowIndex);
}

function onDragend(event) {
	const target = getTarget(event.target);

	target.removeAttribute('draggable');
}

function onMouseDown(event) {
	const target = getTarget(event.target);
	target.draggable = true;
}

export function onCreateDrop(tbody, callback) {
	function onDrop(event) {
		prevent(event);

		const dragIndex = parseInt(event.dataTransfer.getData('index'));

		const oldEle = getTarget(event.target);

		const oldIndex = oldEle.rowIndex;

		callback & callback(dragIndex, oldIndex);

		removeClass(dragTarget, 'drag-item');
	}

	on(tbody, 'mousedown', onMouseDown);
	on(tbody, 'dragover', onDragover);
	on(tbody, 'dragstart', onDragstart);
	on(tbody, 'dragend', onDragend);
	on(tbody, 'drop', onDrop);
}
