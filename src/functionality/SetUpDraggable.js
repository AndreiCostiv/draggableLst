import {
    dragStart, 
    dragEnter,
    dragOver,
    dragLeave,
    dragDrop,
    dragEnd
} from './DragFunctions';

let Dragable = document.getElementsByClassName('draggable');
let DragIcon = document.getElementsByClassName('dragIcon');

const SetUpDraggable = () => {
    for (let key in DragIcon){
        if (key.length === 1) {
            DragIcon[key].addEventListener('mousedown', function() { this.parentNode.setAttribute("draggable", false); });
            DragIcon[key].addEventListener('mouseup', function() { this.parentNode.setAttribute("draggable", true); });
        }
    }
    
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
};

export default SetUpDraggable;