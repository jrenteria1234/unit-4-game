
//global variables

var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["./assets/images/airelement.png", "./assets/images/earthelement.png", "./assets/images/fireelement.png", "./assets/images/waterelement.png"];

// creating the random number above

	function randomTargetNumber () {
		targetNumber = Math.floor(Math.random() * 102) + 19;
    }
    
// creating the crystals and giving them values

	function resetCrystals () {
		for (var i = 0; i < images.length; i++) {
			var crystal = $("<img>");
			crystal.addClass("crystal");
			crystal.attr("src", images[i]);
			crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
			crystal.attr("height", "100");
			$(".elementImages").append(crystal);
		}
    }
    
    // setting the results to the html document

	function resetHTML () {
		$(".numberToWin").html(targetNumber);
		$(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
		$(".score-number").html(counter);
		$(".elementImages").empty();
	}

	function totalReset () {
		randomTargetNumber ();
		counter = 0;
		resetHTML ();
		resetCrystals ();
	}

    // calling the created functions

    randomTargetNumber();
	resetHTML ();
	resetCrystals ();

	
	

// making the clicks work

	function crystalClick () {
		counter += parseInt($(this).attr("value"));
		$(".score-number").html(counter);
		if (counter == targetNumber) {
            wins++;
            alert
			totalReset();
		}
		else if (counter > targetNumber) {
			losses++;
			totalReset();
		};
	};
    $(document).on("click", ".crystal", crystalClick);
	
	