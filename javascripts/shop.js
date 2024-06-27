document.addEventListener('DOMContentLoaded', () => {
    const countElement = document.querySelector('.count');
    const plusButtons = document.querySelectorAll('.plus1, .plus2, .plus3, .plus4, .plus5, .plus6, .plus7, .plus8, .plus9');

    plusButtons.forEach(button => {
        button.addEventListener('click', () => {
            let count = parseInt(countElement.textContent, 10);
            countElement.textContent = count + 1;
        });
    });
});
