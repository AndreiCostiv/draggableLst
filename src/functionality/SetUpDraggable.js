import {
    dragStart, 
    dragEnter,
    dragOver,
    dragLeave,
    dragDrop,
    dragEnd
} from './DragFunctions';

import OnMouseDown from './DraggableBall';

let Dragable = document.getElementsByClassName('draggable');
let DraggableSquare = document.getElementsByClassName('draggableSquare')[0];


const SetUpDraggable = () => {
    if (DraggableSquare !== undefined) {
        DraggableSquare.addEventListener('mousedown', (e) => OnMouseDown(e, DraggableSquare), false);
    }

    if (Dragable !== undefined) {
        for (let key in Dragable){
            if (key.length === 1) {
                Dragable[key].addEventListener('dragstart', dragStart, false);
                Dragable[key].addEventListener('dragenter', dragEnter, false);
                Dragable[key].addEventListener('dragover', dragOver, false);
                Dragable[key].addEventListener('dragleave', dragLeave, false);
                Dragable[key].addEventListener('drop', dragDrop, false);
                Dragable[key].addEventListener('dragend', dragEnd, false);
            }
        }
    }
};

export default SetUpDraggable;