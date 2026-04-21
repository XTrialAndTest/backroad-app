import React from 'react';

import Title from './Title';
import { ToursCard } from './data';
const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title={'featured'} subtitle={'tours'} />

      <div className='section-center featured-center'>
        <ToursCard />
      </div>
    </section>
  );
};

export default Tours;
