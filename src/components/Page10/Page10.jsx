    import React from 'react'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import '../Page01/Page01.scss'

 const arrowUp = <FontAwesomeIcon icon={faArrowUp} />
  const arrowDown = <FontAwesomeIcon icon={faArrowDown} />


const Page10 = ({setPage}) => {
  return (
    <>
<img onClick={()=> setPage(1)} src={process.env.PUBLIC_URL + '/images/home.svg'} alt="" className="home" />
<img onClick={()=> setPage(11)} src={process.env.PUBLIC_URL + '/images/fwd.svg'} alt="" className="fwd" />
<img onClick={()=> setPage(9)} src={process.env.PUBLIC_URL + '/images/back.svg'} alt="" className="back" />


    <div className="background__container linie">
             <img src={process.env.PUBLIC_URL + `/images/tlo_linie_stopy.jpg`} alt="" />
    </div>

<div className="page__container">
<header className="header__container page08">
    <div className="icons__container">
        <img src={process.env.PUBLIC_URL + `/images/ruszczyk.svg`} alt="" />
                <img src={process.env.PUBLIC_URL + `/images/hesperydyna.svg`} alt="" />
                        <img src={process.env.PUBLIC_URL + `/images/askorbowy.svg`} alt="" />
    </div>

    <h1>UNIKALNE DZIAŁANIE LIMFOTONICZNE</h1>

</header>
<section className="grades__container page09">
    <div className="container__up page10">
        <h1>mikrokrążenie</h1>
          <img style={{alignSelf:'center', justifySelf:'center'}} src={process.env.PUBLIC_URL + `/images/strzala_szara_lewo.svg`} alt="" />

       <h1>ZMNIEJSZENIE OBRZĘKU</h1>
             <img style={{alignSelf:'center', justifySelf:'center'}} src={process.env.PUBLIC_URL + `/images/strzala_szara_prawo.svg`} alt="" />
                    <h1>Naczynia limfatyczne</h1>
        </div>


        
        <div className='container_down page10'>
<h1>{arrowDown} przepuszczalność naczyń mikrokrążenia <sup>1, 2</sup> </h1>
<h1>{arrowUp} częstość skurczu </h1>
<h1>{arrowDown} oporność naczyń włosowatych <sup>3</sup> </h1>
<h1><img style={{width:'1vw'}} src={process.env.PUBLIC_URL + `/images/circle.svg`} alt="" /> pobudza receptory <br /> α-adrenergiczne <sup>1</sup> </h1>
<h1>{arrowDown} interakcje leukocytów ze śródbłonkiem <sup>4</sup> </h1>
<h1><img style={{width:'1vw'}} src={process.env.PUBLIC_URL + `/images/circle.svg`} alt="" /> silnie {arrowUp} ilość Ca<sup>2+</sup> w komórkach mięśni gładkich naczyń limfatycznych<sup>*5</sup> </h1>
</div>
</section>
</div>
<p className="notes page08">
1. Woroń J., Leki zawierające wyciągi z Ruszczyka kolczastego w terapii przewlekłej choroby żylnej  - co nowego wiemy o ich działaniu? Pol Przegl Chir 2022; 94 (1): 75-78  - działanie wyciągu z Ruszczyka;, pobudzenie receptorów muskarynowych M1 i M3; 2. Charakterystyka produktu
leczniczego Cyclo 3 Fort – działanie hesperydyny; 3. Charakterystyka produktu leczniczego Cyclo 3 Fort – działanie kwasu askorbowego; 4. Rauly-Lestienne I. et al.: Contribution of muscarinic receptors to in vitro and in vivo effects of Ruscus extract. Microvascular Research 2017;114:1-11 – działanie Ruszczyka, pobudzenie receptorów muskarynowych M1 i M3; 5. N. Monjotin, G. Teca,  Lymphotonic activity of Ruscus extract, hesperidin methyl chalcone and vitamin C in human lymphatic smooth muscle cells, Microvascular Research 2022;139  
*zależnie od stężenia leku
</p>
  </>
  )

}

export default Page10