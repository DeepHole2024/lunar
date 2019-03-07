import React from 'react';
import withIcon, { Props } from '../withIcon';

function IconRecord(props: Props) {
  return (
    <svg {...props} viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  );
}

export default withIcon('IconRecord')(IconRecord);
