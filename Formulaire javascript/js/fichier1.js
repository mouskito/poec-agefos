const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');

context.scale(20, 20);

canvas.style.border = '2px solid white';

const matrix = [
	
	[0,0,0],
	[0,1,0],
	[1,1,1],


];

function Dessiner() {
	context.fillStyle = "#000";
	context.fillRect(0, 0, canvas.width, canvas.height);
	DessinerMatrix(joueur.matrix, joueur.pos);
}

function DessinerMatrix(matrix, offset) {
	matrix.forEach((row, y) => {
		row.forEach((value, x) => {

			if (value !== 0) {

				context.fillStyle = 'red';
				context.fillRect(x + offset.x ,
									y + offset.y,
										1,1);
			}
		});
	});
}

var conteur = 0;
var conteurmax = 1000;

var derniertime = 0;

function maj(time = 0) {
	const deltatime = time - derniertime;
	derniertime = time;

	conteur += deltatime;
	if (conteur > conteurmax) {
		joueur.pos.y++;
		conteur=0;
	}
	Dessiner();
	requestAnimationFrame(maj);
}

const joueur = {

	pos: {x: 5, y: 5},
	matrix: matrix,

}

document.addEventListener('keydown' , event => {
	if (event.keyCode === 37) {
		joueur.pos.x--;
	}
	else if (event.keyCode === 39) {
		joueur.pos.x++;
	} else if (event.keyCode === 40) {
		joueur.pos.y++;
		conteur= 0;
	}
});

maj();

