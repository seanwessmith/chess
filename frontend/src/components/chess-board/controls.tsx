import arrow from '../../images/nav/arrow.svg';
import skipNext from '../../images/nav/skip-next.svg';
import skipPrevious from '../../images/nav/skip-previous.svg';

interface Props {
  move: number;
  maxMoves: number;
  setMove(num: number): void;
}

const Controls = (props: Props) => (
  <div className="main-controls-component">
    <button
      key="button-one"
      onClick={() => props.setMove(0)}
      type="button"
      aria-label="First Move"
    >
      <img src={skipPrevious} />{' '}
    </button>{' '}
    <button
      key="button-two"
      onClick={() => props.setMove(Math.max(props.move - 1, 0))}
      type="button"
      aria-label="Previous Move"
    >
      <img src={arrow} />{' '}
    </button>{' '}
    <button
      key="button-three"
      onClick={() => props.setMove(Math.min(props.move + 1, props.maxMoves))}
      type="button"
      aria-label="Next Move"
    >
      <img className="next" src={arrow} />{' '}
    </button>{' '}
    <button
      key="button-four"
      onClick={() => props.setMove(props.maxMoves)}
      type="button"
      aria-label="Last Move"
    >
      <img src={skipNext} />{' '}
    </button>
  </div>
);

export default Controls;
