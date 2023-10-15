import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import Title from '../Title';
import Section from '../Section';

const ServicesProvided = () =>  {
  const { t } = useTranslation('common');

  return(
    <Section backgroundColor="bg-white" sectionId={t("menu.services-id")}>
      <div className="container relative z-20">
        <Title align="text-center">{t("services-provided.title")}</Title>
        
      </div>
    </Section>
  )
}

export default ServicesProvided;