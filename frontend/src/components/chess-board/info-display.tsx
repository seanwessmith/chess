import { PgnJson } from '../../shared/pgn';
import { getOpening } from '../../shared/pgn';
import openingIcon from '../../images/icons/book.svg';
import youtubeIcon from '../../images/icons/youtube.svg';
import pawnIcon from '../../images/icons/pawn.svg';

interface Props {
  pgn?: PgnJson;
}

const InfoRow = ({ title, description, icon, className, type }: { title: string; description?: string, icon: string, className: string, type?: 'link' }) => description ? (
  <div className="info-row">
  <img className={className} src={icon} />
  <p className="title">{title}</p>
  {type === 'link' ? <a className='description' href={description} target='_blank' rel='noopener noreferrer'>{description}</a> : <p className='description'>{description}</p>}
</div>
) : null;

const InfoDisplay = (props: Props) => {
  const opening = getOpening(props.pgn?.ecourl);

  return (
    <div className="info-container">
      <InfoRow className='opening' title='Opening' description={opening} icon={openingIcon} />
      <InfoRow className='youtube-link' title='Youtube link' description={props.pgn?.youtube} icon={youtubeIcon} type='link' />
      <InfoRow className='chess-link' title='Chess.com link' description={props.pgn?.link} icon={pawnIcon} type='link' />
    </div>
  );
};

export default InfoDisplay;
