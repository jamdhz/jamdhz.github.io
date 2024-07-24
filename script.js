document.getElementById('spin-btn').addEventListener('click', function() {
    const wheel = document.getElementById('wheel');
    const degree = Math.floor(5000 + Math.random() * 5000);
    
    wheel.style.transform = `rotate(${degree}deg)`;
});
