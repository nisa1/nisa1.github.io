// Array of proteins
var proteins = [
	{
		name: "almonds",
		grams: "6g",
		picture: "assets/almonds.png",
		serving: "1 ounce",
		tip: "tip: add to oatmeal, salads"
	},
	{
		name: "avocado",
		grams: "4g",
		serving: "1 whole",
		picture: "assets/avocado.png",
		tip: "tip: swap for butter"
	},
	{
		name: "broccoli",
		grams: "1.6g",
		serving: "1 cup",
		picture: "assets/broccoli.png",
		tip: "tip: add to tofu scrambles"
	},
	{
		name: "brussels sprouts",
		grams: "4g",
		serving: "1 cup",
		picture: "assets/brusselssprouts.png",
		tip: "tip: make veggie kabobs"
	},
	{
		name: "chia seeds",
		grams: "4g",
		serving: "2 tbsp",
		picture: "assets/chiaseeds.png",
		tip: "tip: make overnight pudding"
	},
	{
		name: "edamame",
		grams: "13g",
		serving: "1/2 cup",
		picture: "assets/edamame.png",
		tip: "tip: make into dips or pesto"
	},
	{
		name: "hemp seeds",
		grams: "9g",
		serving: "2 tbsp",
		picture: "assets/hempseeds.png",
		tip: "tip: simply add to smoothies"
	},
	{
		name: "kale",
		grams: "45",
		serving: "1 cup",
		picture: "assets/kale.png",
		tip: "tip: bake them for kale chips!"
	},
	{
		name: "lentils",
		grams: "18g",
		serving: "1 cup",
		picture: "assets/lentils.png",
		tip: "tip: make into a soup"
	},
	{
		name: "passion fruit",
		grams: "5.2g",
		serving: "1 cup",
		picture: "assets/passionfruit.png",
		tip: "tip: make into a juice"
	},
	{
		name: "peas",
		grams: "9g",
		serving: "1 cup",
		picture: "assets/peas.png",
		tip: "tip: an easy add to salads"
	},
	{
		name: "quinoa",
		grams: "8g",
		serving: "1 cup",
		picture: "assets/quinoa.png",
		tip: "tip: swap for rice or pasta"
	},
	{
		name: "spinach",
		grams: "8g",
		serving: "1 cup",
		picture: "assets/spinach.png",
		tip: "tip: add to smoothies"
	},
	{
		name: "tofu",
		grams: "10g",
		serving: "1/2 cup",
		picture: "assets/tofu.png",
		tip: "tip: swap for eggs in scrambles"
	}
];

$(document).ready(pageReady);

function pageReady() {

	// Loop over the people array
	proteins.forEach(function(element, index) {
		// Create a DOM elemnet for the protein
		makeProteinElement(element);

	});


}

function makeProteinElement(proteins) {
	var proteinContainer = $("<div class='protein-container'></div>");

	var nameElement = $("<h2 class='name'></h2>");
	nameElement.text(proteins.name);
	proteinContainer.append(nameElement);

	var gramsElement = $("<h2 class='grams'></h2>");
	gramsElement.text(proteins.grams);
	proteinContainer.append(gramsElement);

	var servingElement = $("<h3 class='serving'></h3>");
	servingElement.text(proteins.serving);
	proteinContainer.append(servingElement);

	var pictureElement = $("<img class='picture'/>");
	pictureElement.attr('src', proteins.picture);
	proteinContainer.append(pictureElement);

	var tipElement = $("<h3 class='tip'></h3>");
	tipElement.text(proteins.tip);
	proteinContainer.append(tipElement);

	$("#protein-container").append(proteinContainer);
}

$(document).ready(function() {
    var offset=250, // At what pixels show Back to Top Button
    scrollDuration=500; // Duration of scrolling to top
        $(window).scroll(function() {
	    if ($(this).scrollTop() > offset) {
                $('.top').fadeIn(500); // Time(in Milliseconds) of appearing of the Button when scrolling down.
                } else {
		$('.top').fadeOut(500); // Time(in Milliseconds) of disappearing of Button when scrolling up.
		}
	});
  $('.top').click(function(event) {
	event.preventDefault();
            $('html, body').animate({
	        scrollTop: 0}, scrollDuration);
                })
	});


