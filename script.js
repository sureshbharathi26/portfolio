// toggleIntro.js

document.getElementById('myElement').addEventListener('click', function () {
    var intro = document.querySelector('.intro');
    intro.style.display = (intro.style.display === 'none' || intro.style.display === '') ? 'block' : 'none';
  });

// enlargeImage.js

document.getElementById('footerImage').addEventListener('click', function () {
    var image = document.querySelector('.footer img');
    image.style.width = (image.style.width === '1200px') ? '1400px' : '1200px';
    image.style.borderColor = (image.style.borderColor === 'lightgreen') ? 'darkmagenta' : 'lightgreen';
    image.style.borderRadius = (image.style.borderRadius === '900px 500px') ? '500px 1000px' : '900px 500px';
  });
  