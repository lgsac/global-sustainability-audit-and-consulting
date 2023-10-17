"use client"

import React from 'react';
import Title from '../Title';
import Section from '../Section';
import Link from 'next/link';
import Gallery from '../Gallery';
import { useTranslations, useLocale } from 'next-intl';

const ServicesProvided = () =>  {
  const t = useTranslations();
  const lang = useLocale();
  const service = useTranslations("services.services-provided");
  const services = [ "auditoria", "consultancy", "agricultural" ] as string[];

  return(
    <Section backgroundColor="bg-white" sectionId={t("menu.services-id")}>
      <div className="container relative z-20">
        <Title align="text-center">{t("services.title")}</Title>
        <div className="flex space-x-0 flex-col">
          {services.map((value: string, index: number) => {
            return (
              <div key={index} className="card card-side bg-base-100 shadow-xl my-3">
                <figure className="w-1/3 bg-center bg-cover" style={{backgroundImage: `url(${service(value + ".images.card")})`}}>
                </figure>
                <div className="card-body flex-1">
                  <h2 className="card-title">{service(`${value}.name`)}</h2>
                  {service(`${value}.slug`) ? (
                    <>
                      <p>{service(`${value}.resume`)}</p>
                      <div className="card-actions mt-4">
                        <Link 
                          href={`/${lang}/${service(`${value}.slug`)}`}
                        >
                          <button className="btn bg-green-600 hover:bg-green-500 border-0 text-white">{t("view-more")}</button>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <ul className="marker:text-green-600 list-disc pl-5 my-7 space-y-2">
                    {(["0", "1", "2"]).map((act: string, i: number) => (
                      <li key={i}>{service(`${value}.activities.${act}`)}</li> 
                    ))}
                  </ul>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="mt-20">
        <Gallery />
      </div>
    </Section>
  )
}

export default ServicesProvided;