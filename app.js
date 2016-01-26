var excersizes = [
	{
		name: 'Dish',
		audio: 'dish.mp3',
	},
	{
		name: 'Sit Ups',
		audio: 'sit-ups.mp3',
	},
	{
		name: 'Legs Out/In',
		audio: 'legs-out-in.mp3',
	},
	{
		name: 'Crunch Left',
		audio: 'crunch-left.mp3',
	},
	{
		name: 'Crunch Right',
		audio: 'crunch-right.mp3',
	},
	{
		name: 'Fast Cycle',
		audio: 'fast-cycle.mp3',
	},
	{
		name: 'Cycle',
		audio: 'cycle.mp3',
	},
	{
		name: 'Crunches',
		audio: 'crunches.mp3',
	},
	{
		name: 'Pressups with Knees out',
		audio: 'pressups-knees-out.mp3',
	},
	{
		name: 'Sideplank Left Leg Raise',
		audio: 'sideplank-left.mp3',
	},
	{
		name: 'Sideplank Right Leg Raise',
		audio: 'sideplank-right.mp3',
	},
	{
		name: 'High Dish',
		audio: 'high-dish.mp3',
	},
	{
		name: 'Legs Out/In',
		audio: 'legs-out-in.mp3',
	},
	{
		name: 'Fast Cycle',
		audio: 'fast-cycle.mp3',
	},
	{
		name: 'Cycle Backwards',
		audio: 'cycle-backwards.mp3',
	},
	{
		name: 'Crunch Left',
		audio: 'crunch-left.mp3',
	},
	{
		name: 'Crunch Right',
		audio: 'crunch-right.mp3',
	},
	{
		name: 'Dish',
		audio: 'dish.mp3',
	},
	{
		name: 'Crunches',
		audio: 'crunches.mp3',
	},
	{
		name: 'Fast Cycle',
		audio: 'fast-cycle.mp3',
	},
];

var secondsTicker = 0;

setInterval(function() {
	var minutes = Math.floor(secondsTicker / 60);
    var seconds = secondsTicker - minutes * 60;

	$('.time-text').text(minutes + 'm ' + seconds + 's');

	var excersize = excersizes[Math.floor(secondsTicker / 30)];

	$('.excersise-text').text(excersize.name);

	if (seconds % 30 === 0) {
		var snd = new Audio('audio/' + excersize.audio);
		snd.play();
	}

	if (seconds % 30 >= 27) {
		var snd = new Audio('audio/bip.mp3');
		snd.play();
	}

	secondsTicker++;

}, 1000)