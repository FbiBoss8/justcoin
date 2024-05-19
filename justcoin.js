const upgradePrice1=200;

var numberElement = document.getElementById('number');
var currentNumber = parseInt(numberElement.innerText);

// You can adjust the increment value as needed
var increment = 1;
var savedNumber = localStorage.getItem("coinCount");
currentNumber += increment;
numberElement.innerText = currentNumber.toString()
var upgradePrices = [500, 1000, 5000, 10000, 50000, 100000 , 1000000];
var upgradeCount = 0; // Initialize the upgrade count
function upgrade() {
    var savedNumber = parseInt(localStorage.getItem("coinCount"));
    if (upgradeCount < upgradePrices.length && savedNumber >= upgradePrices[upgradeCount]) {
        increment = increment + 1;
    
        savedNumber = savedNumber - upgradePrices[upgradeCount];
        console.log(savedNumber);
        localStorage.setItem("coinCount", savedNumber); // Save the updated value
        localStorage.setItem("countInc", increment); // Save the updated increment

        // Increase the upgrade count
        upgradeCount++;
        localStorage.setItem("upgradeCount", upgradeCount); // Save the updated upgrade count

        // Update the number displayed on the webpage
        var numberElement = document.getElementById('number');
        numberElement.innerText = savedNumber.toString();

          var priceElement = document.getElementById('upgradePrice');
        if (upgradeCount < upgradePrices.length) {
            priceElement.innerText = "Upgrade Price: " + upgradePrices[upgradeCount];
            localStorage.setItem("upgradePrice", upgradePrices[upgradeCount]); // Save the updated upgrade price
        } else {
            priceElement.innerText = "No more upgrades available";
        }

        return savedNumber;
    }
    else {
        return savedNumber;
    }
}

function addNumber() {
    var numberElement = document.getElementById('number');
    var currentNumber = parseInt(numberElement.innerText);
    
    // You can adjust the increment value as needed
    
    
    currentNumber += increment;
    numberElement.innerText = currentNumber.toString()
    
    // Save the currentNumber to localStorage
    localStorage.setItem("coinCount", currentNumber);


    
    
    // Add the 'clicked' class to the coin for the transition effect
    var coinElement = document.getElementById('coin');
    coinElement.classList.add('clicked');
    
    // Remove the class after a short delay (adjust as desired)
    setTimeout(function() {
        coinElement.classList.remove('clicked');
    }, 50);
}

window.addEventListener('load', function() {
    var savedInc = localStorage.getItem("countInc");
    if (savedInc) {
        var numberElement = document.getElementById('number');
        numberElement.innerText = savedNumber;
    }
});
window.addEventListener('load', function() {
    var savedInc = parseInt(localStorage.getItem("countInc"));
    if (savedInc) {
        increment = savedInc;
    }
});

// Retrieve the saved value from localStorage on page load
window.addEventListener('load', function() {
    var savedNumber = localStorage.getItem("coinCount");
    if (savedNumber) {
        var numberElement = document.getElementById('number');
        numberElement.innerText = savedNumber;
    }
});
window.addEventListener('load', function() {
    var savedUpgradePrice = parseInt(localStorage.getItem("upgradePrice"));
    if (savedUpgradePrice) {
        var priceElement = document.getElementById('upgradePrice');
        priceElement.innerText = "Upgrade Price: " + savedUpgradePrice;
    }
});
window.onload = function() {
    var player = document.getElementById('player');
    var songs = ['music1.mp3', 'music2.mp3']; // Add your songs here

    player.src = songs[Math.floor(Math.random() * songs.length)]; // Select a random song

    player.onended = function() {
        player.src = songs[Math.floor(Math.random() * songs.length)]; // Select a new random song when the current one ends
        player.play();
    };
};
