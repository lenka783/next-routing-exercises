import React from 'react';

import ScreenSaver from '../../../../components/ScreenSaver';

async function ScreenSaverColored({ params }) {
  const { color } = await params;
  return (
    <main className='screen-saver-wrapper'>
      <ScreenSaver color={color} />
    </main>
  );
}

export default ScreenSaverColored;
