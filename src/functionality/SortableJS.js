import Sortable from "sortablejs";

let SortableList = document.getElementsByClassName('sortableList')[0];

let SortableJS = () => {    
    console.log(SortableList);
    new Sortable(SortableList, {
        handle: '.dragIcon', // handle's class
        animation: 150
    });
};

export default SortableJS;