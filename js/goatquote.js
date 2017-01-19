// GOAT QUOTE - Anya Craig

  //           _))
  //          > *\     _~
  //          `;'\\__-' \_
  //             | )  _ \ \
  // ejm97      / / ``   w w
  //           w w


var goatQuote = {};// Global variable

goatQuote.userInput = function() {
	$(".quote-subject").on("submit", function(evnt) {
		evnt.preventDefault();//This prevents the default action of the form, which would refresh the page

		goatQuote.quoteSubject = $("input[type=radio]:checked").val();//This gets the value of the radio button the user checked

		goatQuote.getQuote();//This calls the getQuote function
	});
};

goatQuote.randomQuote = function(chosenSubject){
	var randomNumber = Math.floor(Math.random() * chosenSubject.length);

	return chosenSubject[randomNumber];
} // Function to select a random number from an array inside an object and use that number to select a index from an array

goatQuote.randomImage = function(imageArray){
	var randomImage = Math.floor(Math.random() * imageArray.length);
	return imageArray[randomImage];
}//This function generates a random number based on the length of an array and then returns the item in that array that corresponds to that index number

goatQuote.getQuote = function() {
	if(goatQuote.quoteSubject == "love") {
		goatQuote.finalQuote = goatQuote.randomQuote(loveQuotes);
	} else if(goatQuote.quoteSubject == "death") {
		goatQuote.finalQuote = goatQuote.randomQuote(deathQuotes);
	} else if(goatQuote.quoteSubject == "beauty") {
		goatQuote.finalQuote = goatQuote.randomQuote(beautyQuotes);
	} else if(goatQuote.quoteSubject == "freedom") {
		goatQuote.finalQuote = goatQuote.randomQuote(freedomQuotes);
	} else if(goatQuote.quoteSubject == "war") {
		goatQuote.finalQuote = goatQuote.randomQuote(warQuotes);
	} else if(goatQuote.quoteSubject == "peace") {
		goatQuote.finalQuote = goatQuote.randomQuote(peaceQuotes);
	} else if(goatQuote.quoteSubject == "faith") {
		goatQuote.finalQuote = goatQuote.randomQuote(faithQuotes);
	} else if(goatQuote.quoteSubject == "difficulty") {
		goatQuote.finalQuote = goatQuote.randomQuote(difficultyQuotes);
	} else {
		$(".no-selection").css("display", "block");
		return false;
	}

	goatQuote.reveal();

};

//Reveal Function

goatQuote.reveal = function() {

	goatQuote.finalImage = goatQuote.randomImage(imageArray);
	$(".goat-image").attr("src", imageList[goatQuote.finalImage].imagePath).attr("title", imageList[goatQuote.finalImage].imageSource);
	$(".image").text(imageList[goatQuote.finalImage].imagePath);

	$(".form-container").css("display", "none");
	$(".reveal-quote p").text(quoteList[goatQuote.finalQuote].quote);
	$(".reveal-speaker").text(quoteList[goatQuote.finalQuote].speaker);
	$(".reveal").slideDown(200);
	$(".new-quote").text("Get another " + goatQuote.quoteSubject + " quote");
};

//New Quote Function

goatQuote.newQuote = function() {
	$(".new-quote").on("click", function() {
		goatQuote.getQuote(goatQuote.quoteSubject);
	});
}

//Reset Function

goatQuote.startAgain = function() {
	$(".start-again").on("click", function() {
		location.reload(true);
	});
}

//Image array 

var imageArray = [
	"goatImage1",
	"goatImage2",
	"goatImage3",
	"goatImage4",
	"goatImage5",
	"goatImage6",
	"goatImage7",
	"goatImage8"
];

//Image list

var imageList = {

	goatImage1: {
		imagePath: "images/goat1.png",
		imageSource: "Image source: http://www.goat-simulator.com"
	},
	goatImage2: {
		imagePath: "images/goat2.png",
		imageSource: "Image source: http://www.latintimes.com"
	},
	goatImage3: {
		imagePath: "images/goat3.png",
		imageSource: "Image source: http://www.wallpaperscraft.com"
	},
	goatImage4: {
		imagePath: "images/goat4.png",
		imageSource: "Image source: http://www.soupandwhiskey.com"
	},
	goatImage5: {
		imagePath: "images/goat5.png",
		imageSource: "Image source: http://www.broncin.net"
	},
	goatImage6: {
		imagePath: "images/goat6.png",
		imageSource: "Image source: http://www.lazerhorse.org"
	},
	goatImage7: {
		imagePath: "images/goat7.png",
		imageSource: "Image source: http://www.hilariousmemes.com"
	},
	goatImage8: {
		imagePath: "images/goat8.png",
		imageSource: "Image source: http://www.advitamaeternam.org"
	}
}


//Quote arrays

var loveQuotes = [
	"love1", 
	"love2", 
	"love3", 
	"love4", 
	"love5"
];

var deathQuotes = [
	"death1",
	"death2",
	"death3",
	"death4",
	"death5"
];

var beautyQuotes = [
	"beauty1",
	"beauty2",
	"beauty3",
	"beauty4",
	"beauty5"
];

var freedomQuotes = [
	"freedom1",
	"freedom2",
	"freedom3",
	"freedom4",
	"freedom5"
];

var warQuotes = [
	"war1",
	"war2",
	"war3",
	"war4",
	"war5"
];

var peaceQuotes = [
	"peace1",
	"peace2",
	"peace3",
	"peace4",
	"peace5"
];

var faithQuotes = [
	"faith1",
	"faith2",
	"faith3",
	"faith4",
	"faith5"
];

var difficultyQuotes = [
	"difficulty1",
	"difficulty2",
	"difficulty3",
	"difficulty4",
	"difficulty5"
];

var quoteList = {

	//LOVE

	love1: {
		quote: "True love is like ghosts, which everyone talks about and few have seen.",
		speaker: "- Francois de La Rochefoucauld"
	},
	love2: {
		quote: "Sometimes the heart sees what is invisible to the eye.",
		speaker: "- H. Jackson Brown, Jr."
	},
	love3: {
		quote: "Love is composed of a single soul inhabiting two bodies.",
		speaker: "- Aristotle"
	},
	love4: {
		quote: "Love is a smoke made with the fume of sighs.",
		speaker: "- William Shakespeare"
	},
	love5: {
		quote: "What we have once enjoyed we can never lose. All that we love deeply becomes a part of us.",
		speaker: "- Helen Keller"
	},

	//DEATH

	death1: {
		quote: "The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.",
		speaker: "- Mark Twain"
	},
	death2: {
		quote: "Don't send me flowers when I'm dead. If you like me, send them while I'm alive.",
		speaker: "- Brian Clough"
	},
	death3: {
		quote: "Be ashamed to die until you have won some victory for humanity.",
		speaker: "- Horace Mann"
	},
	death4: {
		quote: "If a man has not discovered something that he will die for, he isn't fit to live.",
		speaker: "- Martin Luther King, Jr."
	},
	death5: {
		quote: "Our dead are never dead to us, until we have forgotten them.",
		speaker: "- George Eliot"
	},

	//BEAUTY

	beauty1: {
		quote: "Beauty is not in the face; beauty is a light in the heart.",
		speaker: "- Khalil Gibran"
	},
	beauty2: {
		quote: "It is amazing how complete is the delusion that beauty is goodness.",
		speaker: "- Leo Tolstoy"
	},
	beauty3: {
		quote: "Beauty is a fragile gift.",
		speaker: "- Ovid"
	},
	beauty4: {
		quote: "The absence of flaw in beauty is itself a flaw.",
		speaker: "- Havelock Ellis"
	},
	beauty5: {
		quote: "Always think of what is useful and not what is beautiful. Beauty will come of its own accord.",
		speaker: "- Nikolai Gogol"
	},

	//FREEDOM

	freedom1: {
		quote: "I know not what others may choose but, as for me, give me liberty or give me death.",
		speaker: "- Patrick Henry"
	},
	freedom2: {
		quote: "Liberty, when it begins to take root, is a plant of rapid growth.",
		speaker: "- George Washington"
	},
	freedom3: {
		quote: "None are more hopelessly enslaved than those who falsely believe they are free.",
		speaker: "- Johann Wolfgang von Goethe"
	},
	freedom4: {
		quote: "Seek freedom and become captive of your desires. Seek discipline and find your liberty.",
		speaker: "- Frank Herbert"
	},
	freedom5: {
		quote: "Freedom is nothing but a chance to be better.",
		speaker: "- Albert Camus"
	},

	//WAR

	war1: {
		quote: "There never was a good war, or a bad peace.",
		speaker: "- Benjamin Franklin"
	},
	war2: {
		quote: "When the rich wage war, it is the poor who die.",
		speaker: "- Jean-Paul Sartre"
	},
	war3: {
		quote: "Wars of pen and ink often lead to wars of cannon and bayonets.",
		speaker: "- Edward Counsel"
	},
	war4: {
		quote: "War is only a cowardly escape from the problems of peace.",
		speaker: "- Thomas Mann"
	},
	war5: {
		quote: "In every trade save war men of talent and vigor prosper. In war they die.",
		speaker: "- Cormac McCarthy"
	},

	//PEACE

	peace1: {
		quote: "You cannot find peace by avoiding life.",
		speaker: "- Virginia Woolf"
	},
	peace2: {
		quote: "Peace comes from within. Do not seek it without.",
		speaker: "- Buddha"
	},
	peace3: {
		quote: "Peace is its own reward.",
		speaker: "- Mahatma Ghandi"
	},
	peace4: {
		quote: "Peace is not merely a distant goal that we seek, but a means by which we arrive at that goal.",
		speaker: "- Martin Luther King, Jr."
	},
	peace5: {
		quote: "Where ignorance is our master, there is no possibility of real peace.",
		speaker: "- Dalai Lama"
	},

	//FAITH

	faith1: {
		quote: "Faith is permitting ourselves to be seized by the things we do not see.",
		speaker: "- Martin Luther"
	},
	faith2: {
		quote: "Faith consists in believing when it is beyond the power of reason to believe.",
		speaker: "- Voltaire"
	},
	faith3: {
		quote: "Faith is the strength by which a shattered world shall emerge into the light.",
		speaker: "- Helen Keller"
	},
	faith4: {
		quote: "Doubt is not the opposite of faith; it is one element of faith.",
		speaker: "- Paul Tillich"
	},
	faith5: {
		quote: "Reason is our soul's left hand, faith her right.",
		speaker: "- John Donne"
	},

	//DIFFICULTY

	difficulty1: {
		quote: "A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.",
		speaker: "- Winston Churchill"
	},
	difficulty2: {
		quote: "The apprenticeship of difficulty is one which the greatest of men have had to serve.",
		speaker: "- Samuel Smiles"
	},
	difficulty3: {
		quote: "There is no success without hardship.",
		speaker: "- Sophocles"
	},
	difficulty4: {
		quote: "The greater the difficulty, the greater the glory.",
		speaker: "- Marcus Tullius Cicero"
	},
	difficulty5: {
		quote: "Only those who dare to fail greatly can ever achieve greatly.",
		speaker: "- Robert F. Kennedy"
	}
}


//This is the init function, which holds everything we want to run as soon as the DOM is ready
goatQuote.init = function() {
	goatQuote.userInput();
	goatQuote.newQuote();
	goatQuote.startAgain();
};

//This is the document-ready function - it just holds our init function and everything inside it
$(function() {
	goatQuote.init();
});