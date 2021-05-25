import ChessBoard from '../../components/chess-board/container';
import './container.scss';

function ViewPgn(): JSX.Element {
  const pgn = new URLSearchParams(window.location.search).get('pgn');

  return (
    <div className='chessbook-module'>
      <nav>
        <h1>view pgn</h1>
      </nav>
      <section className={'chessboards-container'}>
        {pgn ? <ChessBoard size={500} pgn={{ moves: pgn }} /> : 'missing pgn param'}
      </section>
    </div>
  );
}

export default ViewPgn;
