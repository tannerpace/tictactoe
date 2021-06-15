import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe-game',
  templateUrl: './tic-tac-toe-game.component.html',
  styleUrls: ['./tic-tac-toe-game.component.css']
})



export class TicTacToeGameComponent implements OnInit {
  counter: number = 0;    //added counter
  xScore = 0;
  oScore = 0;
  turn: string = "X"; // either "X" or "O" - X by default
  boardData = [["", "", ""], ["", "", ""], ["", "", ""]];
  // the grid of the board
  // each index is a cell in the grid
  constructor() { }
  ngOnInit(): void {
  }

  cellClicked(i, j) {



    console.log(this.counter);
    if (this.boardData[i][j] == "") {

      // put an X or O in the cell
      this.boardData[i][j] = this.turn;
      setTimeout(() => {
        this.checkWin(); //check for win
      }, 100)
      this.counter++;                      //counter must be bellow the check win
    }
  }
  checkWin() {
    if (this.counter > 8) {    // check if counter is 9 cat won
      alert('cat won!'); this.counter = 0; this.boardData = [["", "", ""], ["", "", ""], ["", "", ""]];
      this.turn = "X";
    }
    let ifWin = false;
    // if someone gets 3 in a row in a column, row, or diagonal
    for (let i in this.boardData) {
      if (this.boardData[i][0] == this.boardData[i][1] && this.boardData[i][2] == this.boardData[i][0] && this.boardData[i][0] != "") {
        // check rows
        ifWin = true;
      } else if (this.boardData[0][i] == this.boardData[1][i] && this.boardData[2][i] == this.boardData[0][i] && this.boardData[0][i] != "") {
        // check columns
        ifWin = true;
      }
    }
    //check diagonals
    if (this.boardData[0][0] == this.boardData[1][1] && this.boardData[0][0] == this.boardData[2][2] && this.boardData[0][0] != "") {
      ifWin = true;
    } else if (this.boardData[0][2] == this.boardData[1][1] && this.boardData[0][2] == this.boardData[2][0] && this.boardData[0][2] != "") {
      ifWin = true;
    }
    if (ifWin) {
      this.winAndReset();
    } else {
      //switch turns
      if (this.turn == "X") {
        this.turn = "O"
      } else {
        this.turn = "X"
      }
    }
  }
  winAndReset() {

    alert(this.turn + ' won')
    if (this.turn == "X") {
      this.xScore++; this.counter = 0;
    } else {
      this.oScore++; this.counter = 0;
    }

    this.boardData = [["", "", ""], ["", "", ""], ["", "", ""]];
    this.turn = "X";

  }


}