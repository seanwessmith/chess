import { useContext } from 'react';

import openingIcon from '../../images/icons/book.svg';
import pawnIcon from '../../images/icons/pawn.svg';
import youtubeIcon from '../../images/icons/youtube.svg';
import { getOpening } from '../../shared/pgn';
import { UserContext } from '../../store/userContext';

interface Props {
  ecourl?: string;
  youtube?: string;
  link?: string;
  wins?: number;
  losses?: number;
  ties?: number;
  currPgn?: string;
}

const InfoRow = ({
  title,
  description,
  icon,
  className,
  type,
}: {
  title: string;
  description?: string;
  icon: string;
  className: string;
  type?: 'link';
}) =>
  description ? (
    <div className='info-row'>
      <img className={className} src={icon} />
      <p className='title'>{title}</p>
      {type === 'link' ? (
        <a
          className='description'
          href={description}
          target='_blank'
          rel='noopener noreferrer'
        >
          {description}
        </a>
      ) : (
        <p className='description'>{description}</p>
      )}
    </div>
  ) : null;

const InfoDisplay = (props: Props) => {
  const { user } = useContext(UserContext);
  const opening = getOpening(props.ecourl);
  const { currPgn } = props;
  // const openingInfo = opening && user.openings ? user.openings[opening] : null;

  if (!props.ecourl && !props.youtube && !props.link) {
    return null;
  }

  const positionsFound = user.games && currPgn ? user.games.filter(g => g.moves.includes(currPgn)) : [];

  return (
    <div className='info-container'>
      {/* {openingInfo ? (
        <p className='user-opening-info'>
          wins: {openingInfo.wins} losses: {openingInfo.losses} ties:{' '}
          {openingInfo.ties}
        </p>
      ) : null} */}
      <p className={`position${!props.currPgn ? ' invisible' : ''}`}>
        You've seen this position {positionsFound.length} times
        <span className={!props.currPgn ? 'invisible' : ''}>
          W: {positionsFound.filter(g => g.white === user.username).length}{' '}
          B: {positionsFound.filter(g => g.black === user.username).length}
        </span>
      </p>
      <InfoRow
        className='opening'
        title='Opening'
        description={opening}
        icon={openingIcon}
      />
      <InfoRow
        className='youtube-link'
        title='Youtube link'
        description={props.youtube}
        icon={youtubeIcon}
        type='link'
      />
      <InfoRow
        className='chess-link'
        title='Chess.com link'
        description={props.link}
        icon={pawnIcon}
        type='link'
      />
    </div>
  );
};

export default InfoDisplay;
