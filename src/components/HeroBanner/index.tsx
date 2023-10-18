import { useTranslations } from 'next-intl';
import React from 'react';

const HeroBanner: React.FC = () =>  {
  const t = useTranslations();

  return(
    <div className="hero min-h-screen" style={{backgroundImage: 'url(/img/hero-background.webp)'}}>
      <div className="hero-overlay bg-opacity-75 bg-black"></div>
      <div className="hero-content text-white text-left">
        <div className="max-w">
          <h1 className="mb-5 font-semibold text-3xl lg:text-4xl">Global Sustainability <br/> Audits and Consulting</h1>
          <p className="mb-5">{t("hero.text")}</p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner;