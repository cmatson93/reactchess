import React, { Component } from 'react';
import Knight from './Knight';
import Square from './Square';
import BoardSquare from './BoardSquare';
import { moveKnight, canMoveKnight } from './Game';
import { DragDropContext, DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }


  // renderSquare(i, position) {
  //   const knightX = position[0];
  //   const knightY = position[1];
  //   const x = i % 8;
  //   const y = Math.floor(i / 8)
  //   const black = (x + y) % 2 === 1;
  //   const isKnightHere = knightX === x && knightY === y;
  //   const piece = isKnightHere ? <BoardSquare x={x} y={y} ><Knight /></BoardSquare> : null;
  
  //   return (
  //     <div 
  //       key={i} 
  //       onClick={() => this.handleSquareClick(x,y)}
  //       style={{width: '12.5%', height: '12.5%'}}
  //     >
  //       <Square black={black}>{piece}</Square>
  //     </div>
  //   )
  // }

  renderSquare(i, knightPosition) {
    const x = i % 8
    const y = Math.floor(i / 8)
    return (
      <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
        <BoardSquare x={x} y={y}>
          {this.renderPiece(x, y, knightPosition)}
        </BoardSquare>
      </div>
    )
  }
  
  renderPiece(x, y, [knightX, knightY]) {
    if (x === knightX && y === knightY) {
      return <Knight />
    }
  }
  
  

  handleSquareClick(toX, toY) {
    if (canMoveKnight(toX, toY)) {
      moveKnight(toX, toY);  
    }
  }

  render() {
    const squares = [];
    for (let i= 0; i < 64; i ++){
      squares.push(this.renderSquare(i, this.props.knightPosition))
    }
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div  
          style={{
            width: '100vw',
            height: '100vh',
            display: 'flex', 
            flexWrap: 'wrap' 
          }}
        >
          {squares}
        </div>
      </DragDropContextProvider>
    );
  }
}
