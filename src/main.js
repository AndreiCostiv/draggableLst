//style:
import './main.sass';

//js:
import SetUpListeners from './functionality/SetUpListeners';

if( document.getElementsByTagName('body')[0] !== undefined ){
    window.addEventListener('load', () => SetUpListeners());
}