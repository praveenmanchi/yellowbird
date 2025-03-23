import React from 'react';
import './CsChip.css';
interface Props {
  label: string;
  count: number;
  onClick?: () => void;
}

const CsChip: React.FC<Props> = ({ label, count }: Props) => {
  return (
    <div className='cs-chip'>
      <span className='cs-chip__label'>{label}</span>
      <div className='cs-chip__counter'>
        <span>{count < 10 ? `0${count}` : count}</span>
      </div>
    </div>
  );
};

export default CsChip;
