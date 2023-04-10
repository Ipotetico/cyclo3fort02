import React from 'react'
import '../Page02/Page02.scss'

const Page04 = ({setPage}) => {
  return (
    <>
    <img onClick={()=> setPage(7)} src={process.env.PUBLIC_URL + '/images/fwd.svg'} alt="" className="fwd" />
        <img onClick={()=> setPage(1)} src={process.env.PUBLIC_URL + '/images/home.svg'} alt="" className="home" />

      <img onClick={() => setPage(5)} src={process.env.PUBLIC_URL + '/images/back.svg'} alt="" className="back" />

<div className="background__container">
      <img src={process.env.PUBLIC_URL + `/images/tlo_linie.webp`} alt="" className="background" />
    <h1 className="green">
    2018 WYTYCZNE EVF
        <p className="copy">
Leki flebotropowe - poziom dowodów naukowych, wpływ na poszczególne objawy
        </p>
    </h1>
    <div className="table page04">
        <section id='dark__grey' className="dark__greyPage02"></section>
        <section className="orange page02">Wyciągi z Ruszczyka*</section>
        <section  className="dark__greyPage02">MPFF (ZMIKRONIZOWANA OCZYSZCZONA FRAKCJA FLAWONOIDOWA)</section>
        <section  className="dark__greyPage02">Okserutyna</section>
         <section  className="dark__greyPage02">Wyciąg z nasion kasztanowca (escyna)</section>
         <section id='dark__grey' className="dark__greyPage02">Dobesylan wapnia</section>

 {/* DRUGI WIERSZ */}

 <div className="grey_page02 first">ból</div>
  <div className="orange lighter next">a</div>
    <div className="grey_page02">a</div>
      <div className="grey_page02">b</div>
        <div className="grey_page02">a</div>
          <div className="grey_page02 last_in_line">b</div>

          {/* TRZECI WIERSZ */}

 <div className="grey_page02 first darker">Uczucie ciężkości </div>
  <div className="orange lighter next">a</div>
    <div className="grey_page02 darker">a</div>
      <div className="grey_page02 darker">b</div>
        <div className="grey_page02 darker"></div>
         <div className="grey_page02 darker last_in_line">a</div>

           {/*CZWARTY WIERSZ */}

 <div className="grey_page02 first">Uczucie obrzęku</div>
  <div className="orange lighter next">a</div>
    <div className="grey_page02">a</div>
      <div className="grey_page02"></div>
        <div className="grey_page02"></div>
          <div className="grey_page02 last_in_line"></div>

          {/* PIATY WIERSZ */}

 <div className="grey_page02 first darker">Dyskomfort </div>
  <div className="orange lighter next"></div>
    <div className="grey_page02 darker">a</div>
      <div className="grey_page02 darker"></div>
        <div className="grey_page02 darker"></div>
         <div className="grey_page02 darker last_in_line">b</div>

                    {/* SZOSTY WIERSZ */}

 <div className="grey_page02 first ">Uczucie 
zmęczenia nóg </div>
  <div className="orange lighter next">b</div>
    <div className="grey_page02 ">ns</div>
      <div className="grey_page02 "></div>
        <div className="grey_page02 "></div>
          <div className="grey_page02 last_in_line"></div>


              {/* SIODMY WIERSZ */}

 <div className="grey_page02 first darker">Kurcze</div>
  <div className="orange lighter next">b/c</div>
    <div className="grey_page02 darker">b</div>
      <div className="grey_page02 darker">b</div>
        <div className="grey_page02 darker"></div>
        <div className="grey_page02 darker last_in_line"></div>

                    {/* OSMY WIERSZ */}

 <div className="grey_page02 first ">Parestezje </div>
  <div className="orange lighter next">a</div>
    <div className="grey_page02 ">b/c</div>
      <div className="grey_page02 "></div>
        <div className="grey_page02 "></div>
       <div className="grey_page02  last_in_line">b</div>

                    {/* DZIEWIATY WIERSZ */}

 <div className="grey_page02 first darker">Uczucie pieczenia</div>
  <div className="orange lighter next">ns</div>
    <div className="grey_page02 darker">b/c</div>
      <div className="grey_page02 darker"></div>
        <div className="grey_page02 darker"></div>
       <div className="grey_page02 darker last_in_line"></div>

                    {/* DZIESIATY WIERSZ */}

 <div className="grey_page02 first ">świąd</div>
  <div className="orange lighter next">b/c</div>
    <div className="grey_page02 "></div>
      <div className="grey_page02 ">a</div>
        <div className="grey_page02 "></div>
     <div className="grey_page02  last_in_line"></div>

                    {/* JEDENASTY WIERSZ */}

 <div className="grey_page02 first darker">Zaczerwienienie</div>
  <div className="orange lighter next"></div>
    <div className="grey_page02 darker">b</div>
      <div className="grey_page02 darker"></div>
        <div className="grey_page02 darker"></div>
                <div className="grey_page02 darker last_in_line"></div>

                              {/* DWUNASTY WIERSZ */}

 <div className="grey_page02 first ">Zmiany skórne</div>
  <div className="orange lighter next"></div>
    <div className="grey_page02 ">a</div>
      <div className="grey_page02 "></div>
        <div className="grey_page02 "></div>
       <div className="grey_page02  last_in_line"></div>

                              {/* TRZYNASTY WIERSZ */}

 <div className="grey_page02 first darker">Obwód 
wokół kostki </div>
  <div className="orange lighter next">a</div>
    <div className="grey_page02 darker">b</div>
      <div className="grey_page02 darker">ns</div>
        <div className="grey_page02 darker">a</div>
       <div className="grey_page02 darker last_in_line"></div>


                              {/* CZTERNASTY WIERSZ */}

 <div className="grey_page02 first ">Objętość 
kończyny**</div>
  <div className="orange lighter next">a</div>
    <div className="grey_page02 ">ns</div>
      <div className="grey_page02 ">ns</div>
        <div className="grey_page02 ">a</div>
           <div className="grey_page02 last_in_line">a</div>

                                        {/* PIETNASTY WIERSZ */}

 <div className="grey_page02 darker last  corner__left">Jakość życia</div>
  <div className="orange lighter darker next last"></div>
    <div className="grey_page02 darker  last">a</div>
      <div className="grey_page02 darker  last"></div>
        <div className="grey_page02 darker  last"></div>
          <div className="grey_page02 darker  last corner__right">ns</div>
          </div>
    <div className="przypisy">
        <p style={{fontSize:'9px'}} className="podpis">
NS - brak znamienności; A – dane pochodzące z wielu badań z randomizacją i metaanaliz. Dowody na poziomie A sugerują, że kolejne badania z dużym prawdopodobieństwem nie zmienią naszej pewności co do efektu działania leku; B – dane pochodzące z pojedynczego dobrego badania z randomizacją lub więcej niż jednego badania z randomizacją, ale z mniej spójnymi wynikami lub problemami metodologicznymi, które mają bezpośrednie zastosowanie do populacji docelowej, jak również badanie ekstrapolowane na populację docelową z innej grupy pacjentów. Dowody na poziomie B sugerują, że dalsze badania mogą mieć istotny wpływ na zaufanie i ocenę efektu i mogą wpłynąć na zmianę opinii;  C – dowody wynikają ze źle zaprojektowanych badań, badań obserwacyjnych lub małych serii przypadków. 
Dowody na poziomie C sugerują, że dalsze badania z dużym prawdopodobieństwem będą miały istotny wpływ na zaufanie i ocenę 
efektu i prawdopodobnie wpłyną na zmianę opinii.

        </p>
        <p className="przypis">
Źródło: Na podst.:  Nicolaides AN, et al.: Venoactive drugs. International Angiology 2018; 37: 232-254 <br />
* dane dotyczą wyciągu z Ruszczyka kolczastego z hesperydyną i kwasem askorbowym; <br />
** obliczona z obwodu łydek i kostek na podstawie modelu ściętego stożka
        </p>
    </div>
</div>
   </>
  )   

}

export default Page04