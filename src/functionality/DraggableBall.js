const onMouseDown = (event, nodeElement) => {
    // (1) prepare to moving: make absolute and on top by z-index
    nodeElement.style.position = 'absolute';
    nodeElement.style.zIndex = 1000;

    // move it out of any current parents directly into body
    // to make it positioned relative to the body
    // document.body.append(nodeElement);
  
    // centers the nodeElement at (pageX, pageY) coordinates
    function moveAt(pageX, pageY) {
        nodeElement.style.left = pageX - nodeElement.offsetWidth / 2 + 'px';
        nodeElement.style.top = pageY - nodeElement.offsetHeight / 2 + 'px';
    }
    
    // prevent launch of default drag and drop api:
    nodeElement.ondragstart = function() {
        return false;
    };

    // move our absolutely positioned nodeElement under the pointer
    moveAt(event.pageX, event.pageY);
  
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }
  
    // (2) move the nodeElement on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // (3) drop the nodeElement, remove unneeded handlers
    nodeElement.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        nodeElement.onmouseup = null;
    };
};

export default onMouseDown;