// Deklarasi Variabel
var money = 500;
var	manualClick = 1;
var autoClickerCost = 10;
var autoClicker = 0;
var manualClickCost = 200;

var sushi = document.getElementById('sushi');
var moneyDisplay = document.getElementById('money');

var autoClickerDisplay = document.getElementById('auto-clicker');
var buyAutoClickerButton = document.getElementById('buy-auto-clicker');

var manualClickDisplay = document.getElementById('manual-click');
var buyBranchButton = document.getElementById('buy-branch');

// End Deklarasi Variabel

// Uang
sushi.addEventListener('click', function() {
	money += manualClick;
	updateMoneyDisplay();
});
// End Uang


// Algoritma Clicker
buyAutoClickerButton.addEventListener('click', function() {
	if (money >= autoClickerCost) {
		money -= autoClickerCost;
		autoClicker++;
		autoClickerCost = Math.round(autoClickerCost * 1.5);
		updateMoneyDisplay();
		updateAutoClickerDisplay();
	}
	else {
		alert("Uang Kamu Kurang! Ayo Kerja!");
	}
});

buyBranchButton.addEventListener('click', function() {
	if (money >= manualClickCost) {
		money -= manualClickCost;
		manualClick += 1;
		manualClickCost = Math.round(manualClickCost * 2.3);
		updateMoneyDisplay();
		updateManualClickDisplay();
		}
	else {
		alert("Uang Kamu Kurang! Ayo Kerja!");
	}
});
// End Algoritma Clicker


// Update Interface
setInterval(function () {
	money += autoClicker;
	updateMoneyDisplay();
}, 1000);

function updateMoneyDisplay() {
	moneyDisplay.innerHTML = "Money: €" + money;
}

function updateAutoClickerDisplay() {
	autoClickerDisplay.innerHTML = "Auto-Clicker : " + autoClicker ;
	buyAutoClickerButton.innerHTML = "Buy Auto-Clicker (cost : € " + autoClickerCost + ")";
}
	
function updateManualClickDisplay() {
	manualClickDisplay.innerHTML = "Branch : " + manualClick ;
	buyBranchButton.innerHTML = "Buy Branch (cost : € " + manualClickCost + ")";
}
// End Update Interface


// Local Storage
function autoSave() {
	setInterval(function() {
	  var data = "money";
	  localStorage.setItem("savedData", data);
	}, 5000);
}

function loadData() {
	var savedData = localStorage.getItem("savedData");
	if (savedData !== null) {
	  console.log(savedData);
	}
}
// End Local Storage