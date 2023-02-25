import React from 'react';
import { ab } from '../../assets/img/logo';
import './About.scss';

const About = () => {
  return (
    <div className="about">
      <div className="about__desc">
        <h1>О нас</h1>
        <p>
          Наша миссия - создать будущее для детей с аутизмом. ОО «Рука в руке» создано по инициативе
          родителей и является некоммерческой организацией. На сегодня мы одна из немногих
          организаций в стране, оказывающих абилитационные услуги детям с аутизмом. Вся деятельность
          по оснащению кабинетов, приобретению учебно- наглядных пособий, мероприятия с детьми для
          социализации проходит в рамках реализации проектов или пожертвований частных лиц и
          бизнеса.
        </p>
      </div>
      <div className='img1'>
        <img src="http://kakrisovat.top/wp-content/uploads/2019/01/r9.jpg" alt="" />
      </div>
      <div className="img_block">
        <img src={ab} alt="" />
      </div>
    </div>
  );
};

export default About;
