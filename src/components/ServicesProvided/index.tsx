"use client"

import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import Title from '../Title';
import Section from '../Section';
import { Service } from '#/api/models';
import Link from 'next/link';
import Gallery from '../Gallery';

const ServicesProvided = () =>  {
  const { t, lang } = useTranslation('common');
  const services: any = t("services.services-provided", {}, { returnObjects: true });

  return(
    <Section backgroundColor="bg-white" sectionId={t("menu.services-id")}>
      <div className="container relative z-20">
        <Title align="text-center">{t("services.title")}</Title>
        <div className="flex space-x-0 flex-col">
          {services.map((service: Service, index: number) => {
            return (
              <div key={index} className="card card-side bg-base-100 shadow-xl my-3">
                <figure className="w-1/3 bg-center bg-cover" style={{backgroundImage: `url(${service.images.card})`}}>
                </figure>
                <div className="card-body flex-1">
                  <h2 className="card-title">{service.name}</h2>
                  {service.slug ? (
                    <>
                      <p>{service.resume}</p>
                      <div className="card-actions mt-4">
                        <Link 
                          href={`/${lang}/${service.slug}`}
                        >
                          <button className="btn bg-green-600 hover:bg-green-500 border-0 text-white">{t("view-more")}</button>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <ul className="marker:text-green-600 list-disc pl-5 my-7 space-y-2">
                    {service.activities?.map((value: string, i: number) => (
                      <li key={i}>{value}</li> 
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