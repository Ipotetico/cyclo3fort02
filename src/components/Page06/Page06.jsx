import React from 'react'
import '../Page02/Page02.scss'

const Page06 = ({setPage}) => {
  return (
    <>
    <img onClick={()=> setPage(8)} src={process.env.PUBLIC_URL + '/images/fwd.svg'} alt="" className="fwd" />
        <img onClick={()=> setPage(1)} src={process.env.PUBLIC_URL + '/images/home.svg'} alt="" className="home" />

      <img onClick={() => setPage(7)} src={process.env.PUBLIC_URL + '/images/back.svg'} alt="" className="back" />

<div className="background__container">
      <img src={process.env.PUBLIC_URL + `/images/tlo_linie.webp`} alt="" className="background" />
    <h1 className="green red">
  2022 WYTYCZNE ESVS
        <p className="copy red">
Wszystkie leki stosowane w PNŻ otrzymały klasę rekomendacji IIa, <br />
w oparciu o poziom dowodów naukowych A
        </p>
                <p className="copy ">
ESVS zaleca, aby przy doborze leków flebotropowych kierować się ich specyficznymi <br /> działaniami terapeutycznymi 
wynikającymi z mechanizmu działania i potwierdzonymi badaniami
        </p>
               <p className="copy srodtytul">
   Ogólne podsumowanie wpływu głównych leków flebotropowych <br /> na objawy żylne i obrzęki
        </p>
    </h1>
    <div className="table page06">
        <section id='dark__grey' className="dark__greyPage02"></section>
        <section className="orange page02">Wyciągi z Ruszczyka*</section>
        <section  className="dark__greyPage02">MPFF (ZMIKRONIZOWANA OCZYSZCZONA FRAKCJA FLAWONOIDOWA)</section>
        <section id='dark__grey' className="dark__greyPage02">Dobesylan wapnia</section>
        <section  className="dark__greyPage02">Wyciąg z nasion kasztanowca (escyna)</section>
        <section  className="dark__greyPage02">Okserutyna</section>
         <section  className="dark__greyPage02">Ekstrakt z liści czerwonych winogron</section>
         <section  className="dark__greyPage02">Sulodeksyd</section>

     

 {/* DRUGI WIERSZ */}

 <div className="grey_page02 first">ból</div>
  <div className="orange lighter next">+</div>
    <div className="grey_page02">+</div>
      <div className="grey_page02">+</div>
        <div className="grey_page02">+</div>
                <div className="grey_page02">+</div>
                        <div className="grey_page02">+</div>
          <div className="grey_page02 last_in_line">+</div>

          {/* TRZECI WIERSZ */}

 <div className="grey_page02 first darker">Uczucie ciężkości </div>
  <div className="orange lighter next">+</div>
    <div className="grey_page02 darker">+</div>
      <div className="grey_page02 darker">+</div>
        <div className="grey_page02 darker"></div>
                <div className="grey_page02 darker">+</div>
                        <div className="grey_page02 darker"></div>
         <div className="grey_page02 darker last_in_line">+</div>

           {/*CZWARTY WIERSZ */}

 <div className="grey_page02 first">Uczucie zmęczenia</div>
  <div className="orange lighter next">+</div>
    <div className="grey_page02"></div>
      <div className="grey_page02">+</div>
           <div className="grey_page02"></div>
                <div className="grey_page02"></div>
        <div className="grey_page02"></div>
          <div className="grey_page02 last_in_line"></div>

          {/* PIATY WIERSZ */}

 <div className="grey_page02 first darker">uczucie obrzemiania </div>
  <div className="orange lighter next">+</div>
    <div className="grey_page02 darker">+</div>
      <div className="grey_page02 darker"></div>
        <div className="grey_page02 darker"></div>
              <div className="grey_page02 darker"></div>
                    <div className="grey_page02 darker">+</div>
         <div className="grey_page02 darker last_in_line">+</div>

                    {/* SZOSTY WIERSZ */}

 <div className="grey_page02 first ">kurcze</div>
  <div className="orange lighter next">+</div>
    <div className="grey_page02 ">+</div>
      <div className="grey_page02 ">+</div>
        <div className="grey_page02 "></div>
             <div className="grey_page02 ">+</div>
                  <div className="grey_page02 "></div>
          <div className="grey_page02 last_in_line">+</div>


              {/* SIODMY WIERSZ */}

 <div className="grey_page02 first darker">parestezje</div>
  <div className="orange lighter next">+</div>
    <div className="grey_page02 darker">+</div>
      <div className="grey_page02 darker">+</div>
        <div className="grey_page02 darker"></div>
                <div className="grey_page02 darker"></div>
                        <div className="grey_page02 darker"></div>
        <div className="grey_page02 darker last_in_line"></div>

        {/* PIETNASTY WIERSZ */}

 <div className="grey_page02  corner__left">Świąd</div>
  <div className="orange lighter  next"></div>
    <div className="grey_page02  "></div>
      <div className="grey_page02 ">+</div>
        <div className="grey_page02  ">+</div>
                <div className="grey_page02"></div>
                        <div className="grey_page02"></div>
          <div className="grey_page02  last_in_line"></div>
    

{/* PIETNASTY WIERSZ */}

 <div className="grey_page02 darker last  corner__left">obrzęk</div>
  <div className="orange lighter darker next last">+</div>
    <div className="grey_page02 darker  last">+</div>
      <div className="grey_page02 darker  last">+</div>
        <div className="grey_page02 darker  last">+</div>
                <div className="grey_page02 darker  last"></div>
                        <div className="grey_page02 darker  last">+</div>
          <div className="grey_page02 darker  last corner__right"></div>
          </div>
    <div className="przypisy">
        <p className="podpis">
Poziom dowodów A: dane pochodzą z wieloośrodkowych badań randomizowanych lub metaanaliz. Klasa rekomendacji IIa: waga dowodów 
naukowych i opinii przemawia na korzyść skuteczności i użyteczności danej opcji terapeutycznej

        </p>
        <p className="przypis">
Źródło: Na podst.: De Maeseneer MG et al.: European Society for Vascular Surgery (ESVS) 2022 Clinical Practice Guidelines on the Management of Chronic Venous Disease of the Lower Limbs. Eur J Vasc Endovasc Surg 2022; 63: 184-267 <br /> <br />
* dane dotyczą wyciągu z Ruszczyka kolczastego z hesperydyną i kwasem askorbowym
        </p>
    </div>
</div>
   </>
  )   

}

export default Page06