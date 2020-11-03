//style:
import './main.sass';

//js:
import SetUpDraggable from './functionality/SetUpDraggable';

if( document.getElementsByTagName('body')[0] !== undefined ){
    window.addEventListener('load', () => SetUpDraggable());
}