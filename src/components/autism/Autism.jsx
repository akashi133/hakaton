import React from 'react';
import { aut } from '../../assets/img/logo';
import './autism.scss';

const Autism = () => {
  return (
    <div className="autism">
      <div className="autism__desc">
        <h1>О нас</h1>
        <span>
          Наша миссия - создать будущее для детей с аутизмом. ОО «Рука в руке» создано по инициативе
          родителей и является некоммерческой организацией. На сегодня мы одна из немногих
          организаций в стране, оказывающих абилитационные услуги детям с аутизмом. Вся деятельность
          по оснащению кабинетов, приобретению учебно- наглядных пособий, мероприятия с детьми для
          социализации проходит в рамках реализации проектов или пожертвований частных лиц и
          бизнеса.
        </span>
      </div>
      <div className='img1'>
        <img src="http://kakrisovat.top/wp-content/uploads/2019/01/r9.jpg" alt="" />
      </div>
      <div className="img_block">
        <img src={aut} alt="" />
      </div>
    </div>
  );
};

export default Autism;
