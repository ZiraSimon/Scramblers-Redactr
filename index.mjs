import startApp, { scramble } from './app.mjs';


document.addEventListener('DOMContentLoaded', startApp, scramble);
document.getElementById('button').addEventListener('click', scramble, true);