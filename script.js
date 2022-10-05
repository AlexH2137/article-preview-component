const share = document.querySelector('.share');
    const shareOpen = document.querySelector('.share-open');

share.addEventListener('click', function() {
    shareOpen.classList.toggle('hidden');
})