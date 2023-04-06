import React from 'react';
// import './Page02.scss';

const Page02 = ({ setPage }) => {
  return (
    <>
      <img onClick={() => setPage(5)} src={process.env.PUBLIC_URL + '/images/fwd.svg'} alt="" className="fwd" />
      <img onClick={() => setPage(1)} src={process.env.PUBLIC_URL + '/images/home.svg'} alt="" className="home" />
      <img onClick={() => setPage(3)} src={process.env.PUBLIC_URL + '/images/back.svg'} alt="" className="back" />

      <div className="background__container">
        <img src={process.env.PUBLIC_URL + `/images/tlo_linie.webp`} alt="" className="background" />
        <h1 className="green">
          2018 WYTYCZNE EVF
          <p className="copy">
            Leki flebotropowe – siła rekomendacji <br /> na podstawie wpływu na poszczególne objawy
            vs. ryzyko działań niepożądanych
          </p>
        </h1>
        <div className="table page02">
          <section id='dark__grey' className="dark__greyPage02"></section>
          <section className="orange page02">Wyciągi z Ruszczyka*</section>
          <section className="dark__greyPage02">MPFF (ZMIKRONIZOWANA OCZYSZCZONA FRAKCJA FLAWONOIDOWA)</section>
          <section className="dark__greyPage02">Okserutyna</section>
          <section className="dark__greyPage02">Wyciąg z nasion kasztanowca (escyna)</section>
          <section id='dark__grey' className="dark__greyPage02">Dobesylan wapnia</section>

          {/* DRUGI WIERSZ */}

          <div className="grey_page02 first">ból</div>
          <div className="orange lighter next">1</div>
          <div className="grey_page02">1</div>
          <div className="grey_page02">1</div>
          <div className="grey_page02">1</div>
          <div className="grey_page02 last_column"></div>

          {/* TRZECI WIERSZ */}

          <div className="grey_page02 first darker">Uczucie ciężkości </div>
          <div className="orange lighter next">1</div>
          <div className="grey_page02 darker">1</div>
          <div className="grey_page02 darker">1</div>
          <div className="grey_page02 darker"></div>
          <div className="grey_page02 darker last_column"></div>

          {/*CZWARTY WIERSZ */}

          <div className="grey_page02 first">Uczucie obrzęku</div>
          <div className="orange lighter next">1</div>
          <div className="grey_page02">1</div>
          <div className="grey_page02"></div>
          <div className="grey_page02"></div>
          <div className="grey_page02 last_column"></div>

          {/* PIATY WIERSZ */}

          <div className="grey_page02 first darker">Dyskomfort </div>
          <div className="orange lighter next"></div>
          <div className="grey_page02 darker">1</div>
          <div className="grey_page02 darker"></div>
          <div className="grey_page02 darker"></div>
          <div className="grey_page02 darker last_column"></div>

          {/* SZOSTY WIERSZ */}

          <div className="grey_page02 first ">Uczucie
            zmęczenia nóg </div>
          <div className="orange lighter next">1</div>
          <div className="grey_page02 "></div>
          <div className="grey_page02 "></div>
          <div className="grey_page02 "></div>
          <div className="grey_page02 last_column"></div>


          {/* SIODMY WIERSZ */}

          <div className="grey_page02 first darker">Kurcze</div>
          <div className="orange lighter next">2</div>
          <div className="grey_page02 darker">1</div>
          <div className="grey_page02 darker">1</div>
          <div className="grey_page02 darker"></div>
          <div className="grey_page02 darker last_column">2</div>

          {/* OSMY WIERSZ */}

          <div className="grey_page02 first ">Parestezje </div>
          <div className="orange lighter next">1</div>
          <div className="grey_page02 ">2</div>
          <div className="grey_page02 "></div>
          <div className="grey_page02 "></div>
          <div style={{ fontSize: '10px' }} className="grey_page02  last_column">ze względu na ryzyko agranulocytozy</div>

          {/* DZIEWIATY WIERSZ */}

          <div className="grey_page02 first darker">Świąd</div>
          <div className="orange lighter next">2</div>
          <div className="grey_page02 darker"></div>
          <div className="grey_page02 darker"></div>
          <div className="grey_page02 darker"></div>
          <div className="grey_page02 darker last_column"></div>

          {/* DZIESIATY WIERSZ */}

          <div className="grey_page02 first ">Uczucie pieczenia</div>
          <div className="orange lighter next"></div>
          <div className="grey_page02 ">2</div>
          <div className="grey_page02 "></div>
          <div className="grey_page02 "></div>
          <div className="grey_page02 last_column"></div>

          {/* JEDENASTY WIERSZ */}

          <div className="grey_page02 first darker">Zaczerwienienie</div>
          <div className="orange lighter next"></div>
          <div className="grey_page02 darker">1</div>
          <div className="grey_page02 darker"></div>
          <div className="grey_page02 darker"></div>
          <div className="grey_page02 darker last_column"></div>

          {/* DWUNASTY WIERSZ */}

          <div className="grey_page02 first ">Zmiany skórne</div>
          <div className="orange lighter next"></div>
          <div className="grey_page02 ">1</div>
          <div className="grey_page02 "></div>
          <div className="grey_page02 "></div>
          <div className="grey_page02  last_column"></div>

          {/* TRZYNASTY WIERSZ */}

          <div className="grey_page02 first darker">Obrzęk </div>
          <div className="orange lighter next">1</div>
          <div className="grey_page02 darker">1</div>
          <div className="grey_page02 darker">2</div>
          <div className="grey_page02 darker">1</div>
          <div className="grey_page02 darker last_column"></div>

          {/* CZTERNASTY WIERSZ */}

          <div className="grey_page02 last  corner__left">Jakość życia</div>
          <div className="orange lighter next last"></div>
          <div className="grey_page02  last">1</div>
          <div className="grey_page02  last"></div>
          <div className="grey_page02  last"></div>
          <div className="grey_page02  last corner__right"></div>
        </div>
        <div className="przypisy">
          <p className="podpis">
            1 - Silna rekomendacja. Korzyści ze stosowania przewyższają ryzyko. <br />
            2 - Słaba rekomendacja. Korzyści i ryzyko związane ze stosowaniem są zbliżone albo istnieje brak pewności co do wielkości korzyści lub ryzyka

          </p>
          <p className="przypis">
            Źródło: Na podst.: Nicolaides AN, et al. IntAngiology 2018; Vol 37 pp 232-254 <br />
            * dane dotyczą wyciągu z Ruszczyka kolczastego z hesperydyną i kwasem askorbowym; <br />
            ** obliczona z obwodu łydek i kostek na podstawie modelu ściętego stożka
          </p>
        </div>
      </div>
    </>
  );

};

export default Page02;