import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
  faArrowDown,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import '../Page01/Page01.scss';

const arrowUp = <FontAwesomeIcon icon={faArrowUp} />;
const arrowDown = <FontAwesomeIcon icon={faArrowDown} />;
const circleBlack = (
  <FontAwesomeIcon
    style={{ height: '1vw', marginBottom: '.5vw' }}
    icon={faCircle}
  />
);

const Page10 = ({ setPage }) => {
  return (
    <>
      <img
        onClick={() => setPage(1)}
        src={process.env.PUBLIC_URL + '/images/home.svg'}
        alt=''
        className='home'
      />
      <img
        onClick={() => setPage(11)}
        src={process.env.PUBLIC_URL + '/images/fwd.svg'}
        alt=''
        className='fwd'
      />
      <img
        onClick={() => setPage(9)}
        src={process.env.PUBLIC_URL + '/images/back.svg'}
        alt=''
        className='back'
      />

      <div className='background__container linie'>
        <img src={process.env.PUBLIC_URL + `/images/tlo_linie.webp`} alt='' />
      </div>

      <div className='page__container'>
        <header className='header__container page08'>
          <div className='icons__container'>
            <img src={process.env.PUBLIC_URL + `/images/ruszczyk.svg`} alt='' />
            <img
              src={process.env.PUBLIC_URL + `/images/hesperydyna.svg`}
              alt=''
            />
            <img
              src={process.env.PUBLIC_URL + `/images/askorbowy.svg`}
              alt=''
            />
          </div>

          <h1>ZAPOBIEGANIE I ZMNIEJSZENIE OBRZĘKU</h1>
        </header>
        <section className='grades__container page09'>
          <div className='container__up page10'>
            <div className='container'>
              <h1 className='title_orange'>NACZYNIA ŻYLNE</h1>
              <h1
                className='title_black'
                style={{ textAlign: 'center', margin: '2vw 0' }}
              >
                {arrowUp} kurczliwość<sup>*1</sup>
                <div className='fota'>
                  <img
                    src={process.env.PUBLIC_URL + `/images/nogi_z_cm.png`}
                    alt=''
                  />
                </div>
              </h1>
            </div>
            <div className='container'>
              <h1 className='title_orange'>MIKROKRĄŻENIE</h1>
              <h1 className='title_black page10'>
                {arrowUp} kurczliwość* wenuli<sup>5</sup>{' '}
              </h1>
              <h1 className='title_black'>
                {arrowDown} przepuszczalność naczyń mikrokrążenia<sup>2, 3</sup>{' '}
              </h1>
              <h1 className='title_black'>
                {arrowUp} oporność naczyń włosowatych<sup>4</sup>{' '}
              </h1>
              <h1 className='title_black'>
                {arrowDown} interakcje leukocytów ze śródbłonkiem<sup>5</sup>{' '}
              </h1>
            </div>
            <div
              className='container'
              style={{ width: '100%', alignItems: 'flex-start' }}
            >
              <h1 className='title_orange'>NACZYNIA LIMFATYCZNE</h1>
              <h1
                className='title_black'
                style={{ width: '100%', alignItems: 'flex-start' }}
              >
                {arrowUp} kurczliwość<sup>*1</sup>{' '}
              </h1>
              <h1
                className='title_black'
                style={{ width: '100%', alignItems: 'flex-start' }}
              >
                {circleBlack} pobudza receptory <br /> &alpha;-adrenergiczne
                <sup>1</sup>{' '}
              </h1>
              <h1 className='title_black'>
                {circleBlack} silnie {arrowUp} ilość Ca<sup>2+</sup> w komórkach
                mięśni gładkich naczyń limfatycznych<sup>**6</sup>{' '}
              </h1>
            </div>
          </div>
        </section>
      </div>
      <p className='notes page08'>
        1. Woroń J., Leki zawierające wyciągi z Ruszczyka kolczastego w terapii
        przewlekłej choroby żylnej - co nowego wiemy o ich działaniu? Pol Przegl
        Chir 2022; 94 (1): 75-78 - działanie wyciągu z Ruszczyka;, pobudzenie
        receptorów α-adrenergicznych; 2. Woroń J., Leki zawierające…, Pol Przegl
        Chir 2022; 94 (1): 75-78 - działanie wyciągu z Ruszczyka;, pobudzenie
        receptorów muskarynowych M1 i M3; 3. Charakterystyka produktu
        leczniczego Cyclo 3 Fort – działanie hesperydyny; 4. Charakterystyka
        produktu leczniczego Cyclo 3 Fort – działanie kwasu askorbowego; 5.
        Rauly-Lestienne I. et al.: Contribution of muscarinic receptors to in
        vitro and in vivo effects of Ruscus extract. Microvascular Research
        2017;114:1-11 – działanie Ruszczyka, pobudzenie receptorów muskarynowych
        M1 i M3; 6. N. Monjotin, G. Teca, Lymphotonic activity of Ruscus
        extract, hesperidin methyl chalcone and vitamin C in human lymphatic
        smooth muscle cells, Microvascular Research 2022;139 *kurczliwość:
        cykliczna czynność skurczowa, **zależnie od stężenia leku
      </p>
    </>
  );
};

export default Page10;
