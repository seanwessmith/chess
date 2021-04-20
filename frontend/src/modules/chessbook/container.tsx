import { useState } from 'react';
import ChessBoard from '../../components/chess-board/container';
import RankSelector from '../../components/rank-selector/container';
import speedRunJson from '../../data/speedrun-games.json';
import chessIcon from '../../images/icons/chess-icon.svg';
import './container.scss';

function Chessbook(): JSX.Element {
  const [rank, setRank] = useState({ beg: 1000, end: 1080 });

  const slicedSpeedRunJson = speedRunJson.filter(game => {
    const senseiDanya = game.white === 'SenseiDanya' ? 'whiteelo' : 'blackelo';
    const gameElo = parseInt(game[senseiDanya]);
    if (gameElo > rank.beg && gameElo < rank.end) {
      return true;
    }
    return false;
  });

  return (
    <div className="chessbook-module">
      <nav>
        <h1>chessbook</h1>
      </nav>
      <section className="section-title">
        <img src={chessIcon} alt="chess-icon" />
        <p>Beginner to Master</p>
      </section>
      <RankSelector rank={rank} setRank={setRank} />
      <section className="chessboards-container">
        {slicedSpeedRunJson.map((game, key) => (
          <ChessBoard key={`game-${key}`} size="500px" pgn={game} />
        ))}
      </section>
    </div>
  );
}

export default Chessbook;
