import React, { useState, useEffect } from 'react';

function Clock () {

  return (
    <div className='clock-frame'>
      <div className='clock'>
        <span>HH:MM:SS</span>
      </div>
    </div>
  );

}

export default Clock;