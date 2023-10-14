"use client"

import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import Title from '../Title';
import Section from '../Section';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import { Experience } from '#/api/models';
import { EXPERIENCE_TYPE } from '#/api/enums';
import SwiperCarousel from '../SwiperCarousel';
import { formatPeriod } from '#/utils/date';

const About = () =>  {
  const { t, lang } = useTranslation('common');
  const qualities: any = t("about.ceo.qualities", {}, { returnObjects: true });
  const experiences: any = t("about.ceo.curriculum.experiences", {}, { returnObjects: true });

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
      <div className="bg-slate-200 py-20 text-zinc-900 relative z-10 mt-0 lg:-mt-20">
        <div className="container">
          <Title>{t("about.ceo.curriculum.title")}</Title>
          <SwiperCarousel>
            {experiences.map((experience: Experience, index: number) => {
            return (
              <SwiperSlide key={index}>
                <div className="card bg-base-100 shadow-xl min-h-max">
                  <div className="card-body">
                    <div className="flex justify-between items-center">
                      <span className="text-green-600 font-bold text-2xl">{experience.period.ingress.slice(0, 4)}</span>
                      <Image
                        src={experience.type === EXPERIENCE_TYPE.WORK ? "/work.svg" : "/education.svg" }
                        alt=""
                        className="bg-green-600 p-2 rounded-lg"
                        width={experience.type === EXPERIENCE_TYPE.WORK ? 30 : 35}
                        height={0}
                        priority
                      />
                    </div>
                    <h3 className="card-title flex-1 my-2">{experience.name}</h3>
                    {experience.period.conclusion && (
                      <span className="text-lg font-semibold">{formatPeriod(lang, experience.period.ingress, experience.period.conclusion)}</span>
                    )}
                    <span className="text-base -mt-2">{experience.company}, {experience.location}</span>
                    {experience.activities.length > 0 && (
                      <>
                        <button 
                          className="btn btn-ghost text-green-600 w-28 px-0 mt-2"
                          onClick={()=> (document.getElementById(`modal-${index}`) as HTMLFormElement).showModal()}
                        >
                          <span className="text-left">Ver mais</span>
                          <Image
                            src="/arrow-btn.svg"
                            alt=""
                            className="ml-1"
                            width={16}
                            height={0}
                            priority
                          />
                        </button>
                        <dialog id={`modal-${index}`} className="modal">
                          <div className="modal-box w-11/12 max-w-5xl">
                            <div className="flex justify-between items-center">
                              <span className="text-green-600 font-bold text-2xl">{experience.period.ingress.slice(0, 4)}</span>
                              <Image
                                src={experience.type === EXPERIENCE_TYPE.WORK ? "/work.svg" : "/education.svg" }
                                alt=""
                                className="bg-green-600 p-2 rounded-lg"
                                width={experience.type === EXPERIENCE_TYPE.WORK ? 30 : 35}
                                height={0}
                                priority
                              />
                            </div>
                            <h3 className="card-title flex-1 my-2">{experience.name}</h3>
                            <h6 className="text-lg font-semibold">{formatPeriod(lang, experience.period.ingress, experience.period.conclusion!)}</h6>
                            <span className="text-base -mt-2">{experience.company}, {experience.location}</span>
                            <ul className="marker:text-green-600 list-disc pl-5 my-7 space-y-2">
                              {experience.activities.map((value: string, i: number) => (
                                <li key={i}>{value}</li> 
                              ))}
                            </ul>
                            <div className="modal-action">
                              <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-outline">Fechar</button>
                              </form>
                            </div>
                          </div>
                        </dialog>
                      </>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            )})}
          </SwiperCarousel>
        </div>
      </div>
    </Section>
  )
}

export default About;