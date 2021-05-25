import { useEffect, useState } from 'react';

import './style.scss';

type Rank = {
  beg: number;
  end: number;
};

interface Props {
  rank: Rank;
  setRank(rank: Rank): void;
}
const RankSelector = (props: Props) => {
  const [riskRangeHover, setRiskRangeHover] = useState(false);
  const [rankSelectorVisible, setRankSelectorVisible] = useState(false);

  useEffect(() => {
    if (riskRangeHover) {
      return setRankSelectorVisible(true);
    } else {
      const timer1 = setTimeout(() => setRankSelectorVisible(false), 200);

      return () => {
        clearTimeout(timer1);
      };
    }
  }, [riskRangeHover]);

  return (
    <section className='rank-selector'>
      <button
        onMouseEnter={() => setRiskRangeHover(true)}
        onMouseLeave={() => setRiskRangeHover(false)}
      >
        rank range: <p>{`${props.rank.beg} - ${props.rank.end}`}</p>
      </button>
      <div
        className={`range-selector${rankSelectorVisible ? ' visible' : ''}`}
        onMouseEnter={() => setRiskRangeHover(true)}
        onMouseLeave={() => setRiskRangeHover(false)}
      >
        {props.rank.beg !== 0 ? (
          <button onClick={() => props.setRank({ beg: 0, end: 500 })}>
            0 - 1000
          </button>
        ) : null}
        {props.rank.beg !== 1000 ? (
          <button onClick={() => props.setRank({ beg: 1000, end: 1100 })}>
            1000 - 1100
          </button>
        ) : null}
        {props.rank.beg !== 1100 ? (
          <button onClick={() => props.setRank({ beg: 1100, end: 1200 })}>
            1100 - 1200
          </button>
        ) : null}
        {props.rank.beg !== 1200 ? (
          <button onClick={() => props.setRank({ beg: 1200, end: 1300 })}>
            1200 - 1300
          </button>
        ) : null}
        {props.rank.beg !== 1300 ? (
          <button onClick={() => props.setRank({ beg: 1300, end: 1400 })}>
            1300 - 1400
          </button>
        ) : null}
        {props.rank.beg !== 1400 ? (
          <button onClick={() => props.setRank({ beg: 1400, end: 1500 })}>
            1400 - 1500
          </button>
        ) : null}
        {props.rank.beg !== 1500 ? (
          <button onClick={() => props.setRank({ beg: 1500, end: 1600 })}>
            1500 - 1600
          </button>
        ) : null}
        {props.rank.beg !== 1600 ? (
          <button onClick={() => props.setRank({ beg: 1600, end: 1700 })}>
            1600 - 1700
          </button>
        ) : null}
        {props.rank.beg !== 1700 ? (
          <button onClick={() => props.setRank({ beg: 1700, end: 1800 })}>
            1700 - 1800
          </button>
        ) : null}
        {props.rank.beg !== 1800 ? (
          <button onClick={() => props.setRank({ beg: 1800, end: 1900 })}>
            1800 - 1900
          </button>
        ) : null}
        {props.rank.beg !== 1900 ? (
          <button onClick={() => props.setRank({ beg: 1900, end: 2000 })}>
            1900 - 2000
          </button>
        ) : null}
        {props.rank.beg !== 2000 ? (
          <button onClick={() => props.setRank({ beg: 2000, end: 2500 })}>
            2000 - 2500
          </button>
        ) : null}
        {props.rank.beg !== 2500 ? (
          <button onClick={() => props.setRank({ beg: 2500, end: 3000 })}>
            2500 - 3000
          </button>
        ) : null}
      </div>
    </section>
  );
};

export default RankSelector;
