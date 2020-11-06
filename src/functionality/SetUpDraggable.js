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
let Ball = document.getElementsByClassName('ball')[0];


const SetUpDraggable = () => {
    if (Ball !== undefined) {
        Ball.addEventListener('mousedown', (e) => OnMouseDown(e, Ball), false);
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