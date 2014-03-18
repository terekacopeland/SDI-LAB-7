//alert("JavaScript works!");
//SDI 1403
//Lab 7 Working With Objects
//Tereka Copeland

var objConstructor = function(festival, location, yearAttended, genre) {
	
    this.festival = festival;
    
    this.location = location;
    
    this.yearAttended = yearAttended;
    
    this.genre = genre;
};

function musicFestivals(jsonData) {
	for (var i = 0; i < jsonData.musicFestivals.length; i++) {
	
	var musicFestivals = new objConstructor(jsonData.musicFestivals[i].festival, jsonData.musicFestivals[i].location, jsonData.musicFestivals[i].yearAttended, jsonData.musicFestivals[i].genre);
	
	console.log("I have attended the " + musicFestivals.festival + " at " + musicFestivals.location + " in " + musicFestivals.yearAttended + " with the genre " + musicFestivals.genre + ".");
	
	if (jsonData.musicFestivals[i].festival === "TomorrowWorld Festival") {
		
		console.log("This was my favorite festival I ever!");
	};
	
};

};

musicFestivals(jsonData);
