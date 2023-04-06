import React from 'react'
  // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  // import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import '../Page01/Page01.scss'

//  const arrowUp = <FontAwesomeIcon icon={faArrowUp} />
//   const arrowDown = <FontAwesomeIcon icon={faArrowDown} />

const Page08 = ({setPage}) => {
  return (
    <>
        <img onClick={()=> setPage(1)} src={process.env.PUBLIC_URL + '/images/home.svg'} alt="" className="home" />
<img onClick={()=> setPage(9)} src={process.env.PUBLIC_URL + '/images/fwd.svg'} alt="" className="fwd" />
<img onClick={()=> setPage(1)} src={process.env.PUBLIC_URL + '/images/back.svg'} alt="" className="back" />


    <div className="background__container linie">
             <img src={process.env.PUBLIC_URL + `/images/tlo_linie.webp`} alt="" />
    </div>

<div className="page__container">
<header className="header__container page08">
    <div className="icons__container">
        <img src={process.env.PUBLIC_URL + `/images/ruszczyk.svg`} alt="" />
                <img src={process.env.PUBLIC_URL + `/images/hesperydyna.svg`} alt="" />
                        <img src={process.env.PUBLIC_URL + `/images/askorbowy.svg`} alt="" />
    </div>

    <h1>DZIAŁANIE</h1>

</header>
<section className="grades__container page08">
  <img src={process.env.PUBLIC_URL + `/images/str_08.svg`} alt="" />
</section>
{/* <section className="grades__container page08">
        <img src={process.env.PUBLIC_URL + `/images/wenotoniczne.png`} alt="" />
              <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start'}}>
        <h1> {arrowUp} Przepływ żylny<sup>1</sup> </h1></div>
                <img src={process.env.PUBLIC_URL + `/images/ochronne.png`} alt="" />
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start'}}>
       <h1> {arrowDown} Przepuszczalność<sup>1,2</sup> </h1>
       <h1> {arrowUp} Opór<sup>3</sup> naczyń włosowatych</h1>
        </div>
                <img src={process.env.PUBLIC_URL + `/images/przeciwzapalne.png`} alt="" />
              <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start'}}>
        <h1> {arrowDown} Interakcje leukocytów 
ze śródbłonkiem<sup>4</sup> </h1></div>
</section> */}
</div>
<p className="notes page08">
1. Woroń J., Leki zawierające wyciągi z Ruszczyka kolczastego w terapii przewlekłej choroby żylnej  - co nowego wiemy o ich działaniu? Pol Przegl Chir 2022; 94 (1): 75-78 – działanie wyciągu z Ruszczyka; 2. Charakterystyka produktu leczniczego Cyclo 3 Fort – działanie hesperydyny; 3. Charakterystyka produktu leczniczego Cyclo 3 Fort – działanie kwasu askorbowego; 4. Rauly-Lestienne I. et al.: Contribution of muscarinic receptors to in vitro and in vivo effects of Ruscus extract. Microvascular Research 2017;114:1-11 – działanie Ruszczyka
</p>
  </>
  )

}

export default Page08