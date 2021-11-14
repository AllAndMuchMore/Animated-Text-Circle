const text = document.querySelector('.text');
/* text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>'); */

document.querySelectorAll('.text span').forEach((element, index) => {
    element.style.transform = `rotate(${index * 19}deg)`;
});

document.addEventListener('mousemove', (e) => {
    text.style.left = `${e.pageX}px`;
    text.style.top = `${e.pageY}px`;
})