import React from 'react';
import './Page01.scss';

const Page01 = ({ setPage }) => {
    return (
        <>
            <img onClick={() => setPage(8)} src={process.env.PUBLIC_URL + '/images/fwd.svg'} alt="" className="fwd" />
            <div className="background__container linie">
                <img src={process.env.PUBLIC_URL + `/images/tlo_linie.webp`} alt="" />
            </div>
            <div className="background__container">
                <img className='okladka' src={process.env.PUBLIC_URL + `/images/zyly_okladka.png`} alt="" />
            </div>

            <div className="page__container">
                <header className="header__container">
                    <div className="icons__container">
                        <img src={process.env.PUBLIC_URL + `/images/ruszczyk.svg`} alt="" />
                        <img src={process.env.PUBLIC_URL + `/images/hesperydyna.svg`} alt="" />
                        <img src={process.env.PUBLIC_URL + `/images/askorbowy.svg`} alt="" />
                    </div>

                    <h1>STANDARDY LECZENIA <br /> PRZEWLEKŁEJ NIEWYDOLNOŚCI ŻYLNEJ</h1>

                </header>
                <section className="grades__container">
                    <img onClick={() => setPage(3)} src={process.env.PUBLIC_URL + `/images/1A.svg`} alt="" />
                    <img onClick={() => setPage(7)} src={process.env.PUBLIC_URL + `/images/7+.svg`} alt="" />
                </section>
            </div>
            <p className="notes">
                * EVF - Europejskie Forum Żylne (European Venous Forum) <br />
                ** ESVS - Europejskie Towarzystwo Chirurgii Naczyniowej (European Society for Vascular Surgery)
            </p>
        </>
    );

};

export default Page01;