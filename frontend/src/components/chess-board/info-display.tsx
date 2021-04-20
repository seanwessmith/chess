import { PgnJson } from '../../shared/pgn';
import { getOpening } from '../../shared/pgn';
import openingIcon from '../../images/icons/book.svg';
import youtubeIcon from '../../images/icons/youtube.svg';
import pawnIcon from '../../images/icons/pawn.svg';

interface Props {
  pgn?: PgnJson;
}

const InfoRow = ({ title, description, icon, className }: { title: string; description?: string, icon: string, className: string }) => description ? (
  <div className="info-row">
  <img className={className} src={icon} />
  <p className="title">{title}</p>
  <p className='description'>{description}</p>
</div>
) : null;

const InfoDisplay = (props: Props) => {
  const opening = getOpening(props.pgn?.ecourl);

  return (
    <div className="info-container">
      <InfoRow className='opening' title='Opening' description={opening} icon={openingIcon} />
      <InfoRow className='youtube-link' title='Youtube link' description={props.pgn?.youtube} icon={youtubeIcon} />
      <InfoRow className='chess-link' title='Chess.com link' description={props.pgn?.link} icon={pawnIcon} />
    </div>
  );
};

export default InfoDisplay;
