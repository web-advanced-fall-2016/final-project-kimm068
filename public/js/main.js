let mainWrapper = document.querySelector('#imageContainer');

let socket = io();

socket.on('images',function(data){
	console.log(data);
	for(image of data){
		let newDiv = document.createElement('div');
		newDiv.classList.add('images');
		newDiv.dataset.id = image.id;
		let img  = document.createElement('img');
		img.src = image.src;
		newDiv.appendChild(img);
		mainWrapper.appendChild(newDiv);
	}
});

// socket.on('toScreen', function (data) {
// 	console.log(data);
// 	document.getElementById("m_space").innerHTML = data.m;
// 	memory = data.m;

// });


//When color button is clicked emit data to socket

	function toServer(){

		var mval = document.getElementById('mval').value;
		socket.emit('toArduino', {x:"mval"});
	}
