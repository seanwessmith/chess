import { useEffect, useState } from 'react';

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
    <section className="rank-selector">
      <button
        onMouseEnter={() => setRiskRangeHover(true)}
        onMouseLeave={() => setRiskRangeHover(false)}
      >
        Rank Range: <p>{`${props.rank.beg} - ${props.rank.end}`}</p>
      </button>
      <div
        className={`range-selector${rankSelectorVisible ? ' visible' : ''}`}
        onMouseEnter={() => setRiskRangeHover(true)}
        onMouseLeave={() => setRiskRangeHover(false)}
      >
        {props.rank.beg !== 0 ? (
          <button onClick={() => props.setRank({ beg: 0, end: 500 })}>
            0 - 500
          </button>
        ) : null}
        {props.rank.beg !== 500 ? (
          <button onClick={() => props.setRank({ beg: 500, end: 1000 })}>
            500 - 1000
          </button>
        ) : null}
        {props.rank.beg !== 1000 ? (
          <button onClick={() => props.setRank({ beg: 1000, end: 1500 })}>
            1000 - 1500
          </button>
        ) : null}
        {props.rank.beg !== 1500 ? (
          <button onClick={() => props.setRank({ beg: 1500, end: 2000 })}>
            1500 - 2000
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
