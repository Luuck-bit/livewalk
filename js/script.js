window.onload = function () {
        const overlay = document.querySelector('.overlay');
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        loading.style = 'display: block'
        loading.innerHTML = `<h1>Entering in England...</h1>`;
        setTimeout(() => {
                loading.style = 'display: none'
                overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        }, 6000);
}


const button = document.getElementById('button');
const countries = document.getElementById('countries');
let activated = false;
const regionsChange = document.getElementById('regionsChange');
london = document.getElementById('london');
japan = document.getElementById('japan');
france = document.getElementById('france');
brasil = document.getElementById('brazil');

const loading = document.getElementById('loading');

const overlay = document.getElementsByClassName('.overlay');

button.addEventListener('click', (e) => {
        if (activated == false) {
                countries.classList.add('active');
                countries.style = 'display: block'
                countries.style.transition = 'transform 0.3s ease';
                button.style.transform = 'rotate(90deg)';
                button.style.transition = 'transform 0.3s ease';
                activated = true;
        } else {
                countries.classList.remove('active');
                countries.style = 'display: none'
                button.style = 'rotate: 0deg'
                activated = false;
        }
})




london.addEventListener('click', (e) => {

        regionsChange.innerHTML = `
            <iframe src="https://www.youtube.com/embed/WKGK_hYnlGE?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&showinfo=0&rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen id="regionsChange"></iframe>
            <div class="overlay"></div>`


        const overlay = document.querySelector('.overlay');
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        loading.style = 'display: block'
        loading.innerHTML = `<h1>Entering in England...</h1>`;
        setTimeout(() => {
                loading.style = 'display: none'
                overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        }, 6000);

});

japan.addEventListener('click', (e) => {

        regionsChange.innerHTML = `
        <iframe src="https://www.youtube.com/embed/28ZjrtD_iL0?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&showinfo=0&rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <div class="overlay"></div>`


        const overlay = document.querySelector('.overlay');
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        loading.style = 'display: block'
        loading.innerHTML = `<h1>Entering in Japan...</h1>`;
        setTimeout(() => {
                loading.style = 'display: none'
                overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        }, 6000);

});

france.addEventListener('click', (e) => {

        regionsChange.innerHTML = `
            <iframe src="https://www.youtube.com/embed/JXbp4YzEhjo?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&showinfo=0&rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen id="regionsChange"></iframe>
            <div class="overlay"></div>`


        const overlay = document.querySelector('.overlay');
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        loading.style = 'display: block'
        loading.innerHTML = `<h1>Entering in France...</h1>`;
        setTimeout(() => {
                loading.style = 'display: none'
                overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        }, 6000);

});

brasil.addEventListener('click', (e) => {

        regionsChange.innerHTML = `
            <iframe src="https://www.youtube.com/embed/c6zmtdyGsSs?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&showinfo=0&rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <div class="overlay"></div>
            `

        const overlay = document.querySelector('.overlay');
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 1)';
        loading.style = 'display: block'
        loading.innerHTML = `<h1>Entering in Brazil...</h1>`;
        setTimeout(() => {
                loading.style = 'display: none'
                overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        }, 6000);

});






