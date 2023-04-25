import React from 'react';
import './Page12.scss';

const Page12 = ({ setPage }) => {
  return (
    <>
      <img
        onClick={() => setPage(1)}
        src={process.env.PUBLIC_URL + '/images/home.svg'}
        alt=''
        className='home'
      />
      <img
        onClick={() => setPage(13)}
        src={process.env.PUBLIC_URL + '/images/fwd.svg'}
        alt=''
        className='fwd'
      />
      <div onClick={() => setPage(14)} className='sil'>
        SIL
      </div>
      <img
        onClick={() => setPage(11)}
        src={process.env.PUBLIC_URL + '/images/back.svg'}
        alt=''
        className='back'
      />

      <div className='background12'>
        <header className='header12'>
          <img
            src={process.env.PUBLIC_URL + `/images/cyclo3fort_white.svg`}
            alt=''
          />
          <h1>
            Zmniejsza objawy <br /> niewydolności żylnej i działa
            przeciwobrzękowo
          </h1>
        </header>
        <div className='container12'>
          <h1>
            Niewydolność żylna <br /> 2-3 kapsułki dziennie
          </h1>
          <img src={process.env.PUBLIC_URL + `/images/paczka.png`} alt='' />
        </div>
      </div>
    </>
  );
};

export default Page12;
