var Engine = require('../engines/game-engine')
var game = new Engine(3, 5);

module.exports = game;


// for(var row=0, num_rows=game.gameBoard.boardVertices.length; row<num_rows; row++){
// 	for(var col=0, num_cols=game.gameBoard.boardVertices[row].length; col<num_cols; col++){
// 		console.log(row, col, game.gameBoard.boardVertices[row][col].adjacent_tiles.length);
// 	}
// }

for(var row=0, num_rows=game.gameBoard.boardTiles.length; row<num_rows; row++){
	for(var col=0, num_cols=game.gameBoard.boardTiles[row].length; col<num_cols; col++){
		console.log(game.gameBoard.boardTiles[row][col]);
	}
	console.log("------------");
}