const randomButton = document.getElementById('random-button');
const randomContent = document.getElementById('random-content');

randomButton.addEventListener('click', () => {
    const randomSzam = Math.floor(Math.random() * 100);
    const randomSzoveg = `A random szám: ${randomSzam}`;
    randomContent.innerText = randomSzoveg;

    // Teljesen random dolgot csinálunk
    if (randomSzam % 2 === 0) {
        document.body.style.backgroundColor = '#ff69b4';
    } else {
        document.body.style.backgroundColor = '#33cc33';
    }
});
