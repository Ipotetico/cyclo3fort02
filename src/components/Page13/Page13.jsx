import React from 'react'
import '../Page12/Page12.scss'

const Page13 = ({setPage}) => {
  return (
    <>
    <img onClick={()=> setPage(1)} src={process.env.PUBLIC_URL + '/images/home.svg'} alt="" className="home" />
<img onClick={()=> setPage(14)} src={process.env.PUBLIC_URL + '/images/fwd.svg'} alt="" className="fwd" />
<div onClick={()=> setPage(14)} className="sil">SIL</div>
<img onClick={() => setPage(12)} src={process.env.PUBLIC_URL + '/images/back.svg'} alt="" className="back" />
 
 <div className="background12">
    <header className="header12">
        <img src={process.env.PUBLIC_URL + `/images/cyclo3fort_white.svg`} alt="" />
        <h1>Lek Cyclo 3<sup>®</sup> Fort – zmniejsza objawy niewydolności żylnej <br /> i działa przeciwobrzękowo</h1>
    </header>
    <div className="container12">
        <h1>Objawy choroby hemoroidalnej <br /> 4-5 kapsułek dziennie </h1>
       <img src={process.env.PUBLIC_URL + `/images/paczka.png`} alt="" />
    </div>
 </div>
    </>
  )
}

export default Page13