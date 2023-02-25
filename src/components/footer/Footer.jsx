import React from 'react'
import { logo } from '../../assets/img/logo'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__left'>
        <img src={logo} alt="" />
      </div>
      <div className='footer__center'>
        <h3>Рука в руке</h3>
        <p>ОО «Рука в руке» создано по инициативе родителей и является некоммерческой организацией. На сегодня мы одна из немногих организаций в стране, оказывающих абилитационные услуги детям с аутизмом.</p>
      </div>
      <div className='footer__right'>
        <h3>Связаться</h3>
        <ul>
          <a href="tel:+996312522209;"><li>0 312 522 209</li></a>
          <a href="mailto:autism.kg autism.kyrgyzstan@gmail.com"><li>autism.kg autism.kyrgyzstan@gmail.com</li></a>
          <li>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer