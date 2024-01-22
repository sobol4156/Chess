import { useEffect, useState } from 'react'
import { Colors } from './models/Colors' //ez

import './App.css'
import BoardComponent from './components/BoardComponent'
import { Board } from './models/Board'
import { Player } from './models/Player'
import LostFigures from './components/LostFigures'


function App() {
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  const [board, setBoard] = useState(new Board())

  useEffect(() => {
    restart()
    setCurrentPlayer(whitePlayer)
  }, [])

  function restart() {
    const newBoard = new Board();
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  return (
    <>
      <div className='allContent'>
        <div className='app'>
          <h3 className='moveInfo'>Сейчас ход: {currentPlayer?.color}</h3>
          <div className='boardGame'>
            <BoardComponent board={board} setBoard={setBoard} currentPlayer={currentPlayer} swapPlayer={swapPlayer} />
            <div>
              <LostFigures title='Потери белых' figures={board.lostBlackFigures} />
              <LostFigures title='Потери черных' figures={board.lostWhiteFigures} />
            </div>
          </div>
        </div>
      </div >
    </>


  )
}

export default App
