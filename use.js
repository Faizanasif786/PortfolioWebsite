function openImageSlider(imageSrc) {
    const modal = document.getElementById('imageSliderModal');
    const sliderImage = document.getElementById('slider-image');
    sliderImage.src = imageSrc;
    modal.style.display = 'block';
}

function closeImageSlider() {
    const modal = document.getElementById('imageSliderModal');
    modal.style.display = 'none';
}

let currentImageIndex = 0;


const imageSources = [
    'img/portfolio/1.jpg',
    'img/portfolio/2.jpg',
    'img/portfolio/3.jpg',
    'img/portfolio/4.jpg',
    'img/portfolio/5.jpg',
    'img/portfolio/6.jpg',

    
];

function prevImage() {

    currentImageIndex--;

  
    if (currentImageIndex < 0) {
        currentImageIndex = imageSources.length - 1;
    }

  
    updateSliderImage();
}

function nextImage() {

    currentImageIndex++;

    if (currentImageIndex >= imageSources.length) {
        currentImageIndex = 0;
    }

    updateSliderImage();
}

function updateSliderImage() {
    const sliderImage = document.getElementById('slider-image');
    sliderImage.src = imageSources[currentImageIndex];
}


prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

// contact form 
function submit() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var formData ={
        name:name,
        email:email,
        message:message
    }
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else {
        alert('Message sent successfully.');
        console.log( formData)
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }
    
}


// feedback 
function feedback() {
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    var feedData = {
        name: name,
        message: message
    }

    if (name === '' || message === '') {
        alert('Please fill in all fields.');
    } else {
        var name = document.getElementById('name').value ='';
        var message = document.getElementById('message').value ='';
        // Save feedData in local storage
        localStorage.setItem('feedbackData', JSON.stringify(feedData));
        console.log(feedData);
        window.location.href='thankyou.html'
    }
}

// feedback end