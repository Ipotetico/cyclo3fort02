import React from 'react'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faArrowUp} from '@fortawesome/free-solid-svg-icons'
import '../Page01/Page01.scss'

 const arrowUp = <FontAwesomeIcon icon={faArrowUp} />

const Page09 = ({setPage}) => {
  return (
    <>
<img onClick={()=> setPage(1)} src={process.env.PUBLIC_URL + '/images/home.svg'} alt="" className="home" />
<img onClick={()=> setPage(11)} src={process.env.PUBLIC_URL + '/images/fwd.svg'} alt="" className="fwd" />
<img onClick={()=> setPage(8)} src={process.env.PUBLIC_URL + '/images/back.svg'} alt="" className="back" />


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

    <h1>UNIKALNE DZIAŁANIE LIMFOTONICZNE – NOWE DANE NAUKOWE</h1>

</header>
<section className="grades__container page09">
    <div className="container__up">
        <img onClick={() => setPage(10)} src={process.env.PUBLIC_URL + `/images/unikalne.png`} alt="" />
              <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start'}}>
        <h1>silnie  {arrowUp}   ilość Ca<sup>2+</sup> w komórkach mięśni gładkich naczyń limfatycznych* </h1></div>
          <img style={{alignSelf:'center', justifySelf:'center'}} src={process.env.PUBLIC_URL + `/images/mala_strzala.svg`} alt="" />
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start'}}>

       <h1> {arrowUp} skurcz</h1>
       </div>
        </div>
        <div className='container_down'>
                <img src={process.env.PUBLIC_URL + `/images/kiszka.png`} alt="" />
     <img src={process.env.PUBLIC_URL + `/images/kartka.png`} alt="" />
</div>
</section>
</div>
<p className="notes page08">
*zależnie od stężenia leku, <br />
** Micronised Purified Flavonoic Fraction, zmikronizowana oczyszczona frakcja 
flawonoidowa; <br />
*** w porównaniu z połączeniem wyciągu z Ruszczyka kolczastego, hesperydyny, kwasu askorbowego <br />
N. Monjotin, G. Teca,  Lymphotonic activity of Ruscus extract, hesperidin methyl chalcone and vitamin C 
in human lymphatic smooth muscle cells, Microvascular Research 2022;139 
</p>
  </>
  )

}

export default Page09