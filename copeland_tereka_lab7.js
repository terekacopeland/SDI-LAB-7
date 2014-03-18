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

function musicfestival(jsonData) {
	for (var i = 0; i < jsonData.musicFestival.length; i++) {
	
	var musicFestival = new objConstructor(jsonData.musicFestival[i].festival, jsonData.musicFestival[i].location, jsonData.musicFestival[i].yearAttended, jsonData.musicFestival[i].genre);
	
	console.log(musicFestival.festival);
	
	if (jsonData.musicFestival[i].festival === "TomorrowWorld") {
		
		console.log("This was my favorite festival I ever attended!");
	};
	
};

};

	
}
