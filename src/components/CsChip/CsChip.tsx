import React from 'react';
import './CsChip.css';

interface Props {
  label: string;
  count: number;
  handleChipSelect?: (label: string) => void;
  chipActive?: boolean;
}

const CsChip: React.FC<Props> = ({
  label,
  count,
  handleChipSelect,
  chipActive,
}) => {
  const handleSelectedChip = (label: string) => {
    if (handleChipSelect) {
      handleChipSelect(label);
    }
  };

  return (
    <div
      className={chipActive ? 'cs-chip-active' : 'cs-chip'}
      onClick={() => handleSelectedChip && handleSelectedChip(label)}
    >
      <span className={chipActive ? 'cs-chip__label-active' : 'cs-chip__label'}>
        {label}
      </span>
      <div
        className={chipActive ? 'cs-chip__counter-active' : 'cs-chip__counter'}
      >
        <span>{count < 10 ? `0${count}` : count}</span>
      </div>
    </div>
  );
};

export default CsChip;
