import React from 'react'
import '../Page01/Page01.scss'



const Page11 = ({setPage}) => {
  return (
    <>
        <img onClick={()=> setPage(1)} src={process.env.PUBLIC_URL + '/images/home.svg'} alt="" className="home" />
<img onClick={()=> setPage(9)} src={process.env.PUBLIC_URL + '/images/back.svg'} alt="" className="back" />


    <div className="background__container linie">
             <img src={process.env.PUBLIC_URL + `/images/tlo_linie.webp`} alt="" />
    </div>

<div className="page__container">
<header className="header__container page11">
    <div className="icons__container">
        <img src={process.env.PUBLIC_URL + `/images/ruszczyk.svg`} alt="" />
                <img src={process.env.PUBLIC_URL + `/images/hesperydyna.svg`} alt="" />
                        <img src={process.env.PUBLIC_URL + `/images/askorbowy.svg`} alt="" />
    </div>


</header>
<section className="grades__container page11">
        <img style={{width:'80%'}} src={process.env.PUBLIC_URL + `/images/obrzek.svg`} alt="" />
<img style={{width:'50%'}}  src={process.env.PUBLIC_URL + `/images/01.jpg`} alt="" />
      <img style={{width:'80%'}} src={process.env.PUBLIC_URL + `/images/bol.svg`} alt="" />
<img style={{width:'50%'}}  src={process.env.PUBLIC_URL + `/images/02.jpg`} alt="" />
      <img style={{width:'80%'}} src={process.env.PUBLIC_URL + `/images/uczucie.svg`} alt="" />
<img style={{width:'50%'}}  src={process.env.PUBLIC_URL + `/images/03.jpg`} alt="" />
</section>
</div>
<p className="notes page08">PFM/42/2023</p>
  </>
  )

}

export default Page11