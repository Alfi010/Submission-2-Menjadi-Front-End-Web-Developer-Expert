import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import '../scripts/component/app-bar';
import './component/app-main';
import '../scripts/component/app-footer';
import swRegister from './utils/sw-register';

const app = new App({
    button: document.querySelector('#menu'),
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});