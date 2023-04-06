import React from 'react'

const Page07 = ({setPage}) => {
  return (
    <>
            <img onClick={()=> setPage(1)} src={process.env.PUBLIC_URL + '/images/home.svg'} alt="" className="home" />

        <img onClick={()=> setPage(8)} src={process.env.PUBLIC_URL + '/images/fwd.svg'} alt="" className="fwd" />



<div className="background__container red">
    <img src={process.env.PUBLIC_URL + `/images/tlo_linie.webp`} alt="" className="background" />
    <h1 className="green red">
   2022 WYTYCZNE ESVS
        <p className="copy red">
Wszystkie leki stosowane w PNŻ otrzymały klasę rekomendacji IIa, <br />
w oparciu o poziom dowodów naukowych A
        </p>
        <p className="copy">
            ESVS zaleca, aby przy doborze leków flebotropowych kierować się ich specyficznymi działaniami terapeutycznymi 
wynikającymi z mechanizmu działania i potwierdzonymi badaniami
        </p>
        <p className="copy srodtytul">
            Podsumowanie wpływu na objawy żylne i obrzęki
        </p>
    </h1>
    <div onClick={()=>setPage(6)} className="table page07">
        <div className="white"></div>
        <div className="orange">Wyciągi z Ruszczyka*</div>
        <div className="grey">ból</div>
        <div className="orange lighter">+</div>
        <div className="grey next darker">Uczucie ciężkości </div>
        <div className="orange lighter">+</div>
        <div className="grey next">Uczucie zmęczenia</div>
        <div className="orange lighter">+</div>
        <div className="grey next darker">uczucie obrzmienia</div>
        <div className="orange lighter">+</div>
        <div className="grey next">Kurcze</div>
        <div className="orange lighter">+</div>
          <div className="grey next darker">Parestezje</div>
        <div className="orange lighter">+</div>
                  <div className="grey next last">obrzęk</div>
        <div className="orange lighter last">+</div>
    </div>
    <div className="przypisy">
        <p className="podpis">
Poziom dowodów A: dane pochodzą z wieloośrodkowych badań randomizowanych lub metaanaliz. Klasa rekomendacji IIa: waga dowodów 
naukowych i opinii przemawia na korzyść skuteczności i użyteczności danej opcji terapeutycznej
        </p>
        <p className="przypis">
Źródło: Na podst.: De Maeseneer MG et al.: European Society for Vascular Surgery (ESVS) 2022 Clinical Practice Guidelines on the Management of Chronic Venous Disease of the Lower Limbs. Eur J Vasc Endovasc Surg 2022; 63: 184-267 <br />
* dane dotyczą wyciągu z Ruszczyka kolczastego z hesperydyną i kwasem askorbowym
        </p>
    </div>
</div>
</>
  )
}
export default Page07