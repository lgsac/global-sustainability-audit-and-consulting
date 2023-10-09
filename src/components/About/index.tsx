import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import Title from '../Title';

const About = () =>  {
  const { t } = useTranslation('common');

  return(
    <div id={t("menu.about-id")} className="py-">
      <div className="container">
        <Title> Teste título sessão</Title>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim velit doloribus unde voluptatum perspiciatis cum molestias quisquam deleniti ad sit!</p>
      </div>
    </div>
  )
}

export default About;