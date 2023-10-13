"use client"

import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import Title from '../Title';
import Section from '../Section';
import Image from 'next/image';

const About = () =>  {
  const { t } = useTranslation('common');
  const qualities: any = t("about.ceo.qualities", {}, { returnObjects: true });

  return(
    <Section backgroundColor="bg-white" sectionId={t("menu.about-id")}>
      <div className="container relative z-20">
        <Title>{t("title")}</Title>
        <p>{t("about.description")}</p>
        <div className="flex flex-col lg:flex-row">
          <div className="mt-20">
            <Title>{t("about.ceo.title")}</Title>
            <ul className="marker:text-green-600 list-disc pl-5 space-y-2">
              {qualities.map((value: string, i: number) => (
                <li key={i}>{value}</li> 
              ))}
            </ul>
          </div>
          <div className="flex flex-1 justify-center">
            <Image
              src="/img/leandro-garcia.webp"
              alt="Leandro Garcia"
              className="my-16 lg:mt-20 lg:mb-0"
              width={360}
              height={0}
              priority
            />
          </div>
        </div>
        <div className="-mt-8 lg:-mt-28 absolute items-center flex">
          <span className="text-white bg-green-600 py-3 px-8 rounded">{t("about.ceo.member")}</span>
          <Image
            src="/list.svg"
            alt="ícone certificado"
            className="bg-green-600 p-4 -ml-4 rounded-lg"
            width={70}
            height={0}
            priority
          />
        </div>
      </div>
    </Section>
  )
}

export default About;