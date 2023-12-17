let buyBtn = document.getElementsByClassName('buy__btn')[0];
let buyLabel = document.getElementsByClassName('buy__label')[0];


buyBtn.addEventListener('mouseenter', () => {
    buyLabel.classList.add('buy__label--accent');
});

buyBtn.addEventListener('mouseleave', () => {
    buyLabel.classList.remove('buy__label--accent');
});



let gallerySmall =new SimpleLightbox('.gallery-small a', {
});



let galleryEx =new SimpleLightbox('.gallery-ex a', {
});

 

