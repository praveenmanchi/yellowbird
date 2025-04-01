import React from 'react';
import './Chip.css';
interface Props {
  label: string | undefined;
}

const Chip: React.FC<Props> = ({ label }: Props) => {
  return <div className='chip-container'>{label}</div>;
};

export default Chip;
