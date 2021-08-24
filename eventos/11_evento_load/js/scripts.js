/* window.addEventListener('load', () => {
    alert('Assine os nossos termos de uso');
}) */

window.addEventListener('beforeunload', (e) => {
    e.returnValue = null;
})