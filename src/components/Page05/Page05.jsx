import React from 'react'
import '../Page03/Page03.scss'

const Page05 = ({setPage}) => {
  return (
    <>
            <img onClick={()=> setPage(1)} src={process.env.PUBLIC_URL + '/images/home.svg'} alt="" className="home" />

        <img onClick={()=> setPage(7)} src={process.env.PUBLIC_URL + '/images/fwd.svg'} alt="" className="fwd" />

    
    

<div className="background__container">
    <img src={process.env.PUBLIC_URL + `/images/tlo_linie.webp`} alt="" className="background" />
    <h1 className="green">
        2018 WYTYCZNE EVF
        <p className="copy">
poziom dowodów naukowych, wpływ na poszczególne objawy 
        </p>
    </h1>
    <div onClick={() => setPage(4)} className="table page05">
        <div className="white"></div>
        <div className="orange">Wyciągi z Ruszczyka*</div>
        <div className="grey">ból</div>
        <div className="orange lighter">A</div>
        <div className="grey next darker">Uczucie ciężkości </div>
        <div className="orange lighter">A</div>
        <div className="grey next">Uczucie obrzęku</div>
        <div className="orange lighter">A</div>
        <div className="grey next darker">parestezje</div>
        <div className="orange lighter">A</div>
        <div className="grey next">Obwód wokół kostki</div>
        <div className="orange lighter">a</div>
          <div className="grey next darker last">Objętość kończyny**</div>
        <div className="orange lighter last">A</div>
    </div>
    <div className="przypisy">
        <p className="podpis">
 A – dane pochodzące z wielu badań z randomizacją i metaanaliz. Dowody na poziomie A sugerują, 
że kolejne badania z dużym prawdopodobieństwem nie zmienią naszej pewności co do efektu działania leku;
        </p>
        <p className="przypis">
Źródło: Na podst.: Nicolaides AN, et al.: Venoactive drugs. International Angiology 2018; 37: 232-254 <br />
* dane dotyczą wyciągu z Ruszczyka kolczastego z hesperydyną i kwasem askorbowym; <br />
** obliczona z obwodu łydek i kostek na podstawie modelu ściętego stożka
        </p>
    </div>
</div>
    </>
  )
}

export default Page05