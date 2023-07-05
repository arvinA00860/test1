var miningSpeed = 0;
var miningResult = 0;
var miningActive = false;
var miningInterval = null;

var mineBtn = document.getElementById("mine-btn");
var miningSpeedText = document.getElementById("mining-speed");
var miningResultText = document.getElementById("mine-result");

mineBtn.addEventListener("click", function() {
	if (miningActive) {
		stopMining();
	} else {
		startMining();
	}
});

function startMining() {
	miningActive = true;
	mineBtn.innerHTML = "停止挖礦";
	miningInterval = setInterval(function() {
		miningResult++;
		miningResultText.innerHTML = "挖礦結果：" + miningResult;
	}, miningSpeed);
}

function stopMining() {
	miningActive = false;
	mineBtn.innerHTML = "開始挖礦";
	clearInterval(miningInterval);
}

function setMiningSpeed(speed) {
	miningSpeed = speed;
	miningSpeedText.innerHTML = "挖礦速度：" + speed + " 毫秒/次";
}

setMiningSpeed(1000);
