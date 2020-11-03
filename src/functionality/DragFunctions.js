let dragSrcEl;

let Dragable = document.getElementsByClassName('draggable');

const dragStart = e => {
    e.target.style.opacity = '0.4';
    dragSrcEl = e.target;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
};

const dragEnter = e => {
    e.target.classList.add('over');
};

const dragOver = e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    return false;
};

const dragLeave = e => {
    e.stopPropagation();
    e.target.classList.remove('over');  
};

const dragDrop = e => {    
    if (dragSrcEl != e.target) {
        dragSrcEl.innerHTML = e.target.innerHTML;
        e.target.innerHTML = e.dataTransfer.getData('text/html');
    }
    
    return false;
};

const dragEnd = e => {
    for (let key in Dragable){
        if (key.length === 1) {
            Dragable[key].classList.remove('over');
        }
    }
    e.target.style.opacity = '1';
  
};

export {
    dragStart, 
    dragEnter,
    dragOver,
    dragLeave,
    dragDrop,
    dragEnd
};