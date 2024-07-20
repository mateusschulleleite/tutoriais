import React from 'react';
import './Load.css';
import MagazordLogo from './magazord-logo.svg';


export default function Load() {
  return (
    <section className='load'>
        <div className='load-imagem'>
            <img src={MagazordLogo} />
        </div>
    </section>
  )
}
