import React from 'react';
import Title from './Title';
import { Service } from './data';

const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title={'our'} subtitle={'services'} />
      <div className='section-center services-center'>
        <Service />
      </div>
    </section>
  );
};

export default Services;
