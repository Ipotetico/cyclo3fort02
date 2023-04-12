import React from 'react';
import './Page03.scss';

const Page03 = ({ setPage }) => {
  return (
    <>
      <img onClick={() => setPage(5)} src={process.env.PUBLIC_URL + '/images/fwd.svg'} alt="" className="fwd" />
      <img onClick={() => setPage(1)} src={process.env.PUBLIC_URL + '/images/home.svg'} alt="" className="home" />
      <img onClick={() => setPage(1)} src={process.env.PUBLIC_URL + '/images/back.svg'} alt="" className="back" />


      <div className="background__container">
        <img src={process.env.PUBLIC_URL + `/images/tlo_linie.webp`} alt="" className="background" />
        <h1 className="green">
          2018 WYTYCZNE EVF
          <p className="copy">
            siła rekomendacji na podstawie wpływu na poszczególne objawy <br />
            vs. ryzyko działań niepożądanych
          </p>
        </h1>
        <div onClick={() => setPage(2)} className="table page03">
          <div className="white"></div>
          <div className="orange">Wyciągi z Ruszczyka*</div>
          <div className="grey">ból</div>
          <div className="orange lighter">1</div>
          <div className="grey next darker">Uczucie ciężkości </div>
          <div className="orange lighter">1</div>
          <div className="grey next">Uczucie obrzęku</div>
          <div className="orange lighter">1</div>
          <div className="grey next darker">Uczucie zmęczenia nóg</div>
          <div className="orange lighter">1</div>
          <div className="grey next ">Parestezje</div>
          <div className="orange lighter">1</div>
          <div className="grey next darker last">Obrzęk</div>
          <div className="orange lighter last">1</div>
        </div>
        <div className="przypisy">
          <p className="podpis">
            1 - Silna rekomendacja. Korzyści ze stosowania przewyższają ryzyko.
          </p>
          <p className="przypis">
            Źródło: Na podst.: Nicolaides AN, et al.: Venoactive drugs. International Angiology 2018; 37: 232-254 <br />
            * dane dotyczą wyciągu z Ruszczyka kolczastego z hesperydyną i kwasem askorbowym; <br />
            {/* ** obliczona z obwodu łydek i kostek na podstawie modelu ściętego stożka */}
          </p>
        </div>
      </div>
    </>
  );
};

export default Page03;