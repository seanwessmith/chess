import { getShortOpening, getOpening, PgnJson } from '../../shared/pgn';
import OpeningDisplay from '../opening-display/container';

import './container.scss';

interface Props {
  games: PgnJson[];
}

const Achievements = (props: Props): JSX.Element => {
  const uniqueOpenings: string[] = [];
  for (const { ecourl } of props.games) {
    const opening = getShortOpening(getOpening(ecourl));
    if (opening && !uniqueOpenings.includes(opening)) {
      uniqueOpenings.push(opening);
    }
  }

  return (
    <div className='achievements-container'>
      <div className='openings white'>
        <p className='title'>with white pieces</p>
        {uniqueOpenings.map((ecourl, index) => (
          <OpeningDisplay
            key={index}
            opening={getShortOpening(getOpening(ecourl))}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
