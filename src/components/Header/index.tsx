'use client';

import Image from 'next/image';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { languageFlagPath } from './labels';
import { LANGUAGE } from '#/api/enums';
import React, { useEffect, useState, useCallback} from 'react';

const Header = () =>  {
  const { t, lang } = useTranslation('common');
  const [ currentLanguage, setCurrentLanguage] = useState<any>()

  const changeLanguageButton = useCallback(() => {
    if(lang === LANGUAGE.ENGLISH) {
      return setCurrentLanguage(t('language-button.en'))
    }

    if(lang === LANGUAGE.PORTUGUESE) {
      return setCurrentLanguage(t('language-button.pt'))
    }

    if(lang === LANGUAGE.SPANISH) {
      return setCurrentLanguage(t('language-button.es'))
    }
  },[lang, t])

  useEffect(() => {
    changeLanguageButton()
  },[changeLanguageButton])

  return (
    <div className="bg-green-600 fixed top-0 left-0 right-0">
    <div className="navbar bg-green-600 container ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-600 rounded w-52">
            <li>
              <Link className="my-2 p-3" href={`#${t("menu.about-id")}`}>
                {t("menu.about")}
              </Link>
            </li>
            <li>
              <Link className="my-2 p-3" href={`#${t("menu.services-id")}`}>
                {t("menu.services")}
              </Link>
            </li>
            <li>
              <Link className="my-2 p-3" href={`#${t("menu.clients-id")}`}>
                {t("menu.clients")}
              </Link>
            </li>
            <li>
              <Link className="my-2 p-3" href={`#${t("menu.certifications-id")}`}>
                {t("menu.certifications")}
              </Link>
            </li>
          </ul>
        </div>
        <Link href={`/${lang}`} className=" m-1.5 p-1.5">
          <span className="sr-only">Global sustainability audit and consulting</span>
          <Image
            src="/logo-gsac.svg"
            alt="Global sustainability audit and consulting"
            className="mx-auto"
            width={150}
            height={20}
            priority
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="mx-2" href={`#${t("menu.about-id")}`}>
              {t("menu.about")}
            </Link>
          </li>
          <li>
            <Link className="mx-2" href={`#${t("menu.services-id")}`}>
              {t("menu.services")}
            </Link>
          </li>
          <li>
            <Link className="mx-2" href={`#${t("menu.clients-id")}`}>
              {t("menu.clients")}
            </Link>
          </li>
          <li>
            <Link className="mx-2" href={`#${t("menu.certifications-id")}`}>
              {t("menu.certifications")}
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
      <details className="dropdown">
        <summary className="m-1 btn">
          <Image
            src={languageFlagPath[lang]}
            alt="country flag"
            className="mx-auto"
            width={25}
            height={20}
            priority
          />
          <p className="capitalize">{currentLanguage}</p>
          
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-gray-100 rounded w-40">
          <li className="text-black my-1">
            <Link href="/en">
              <Image
                src="/ca.svg"
                alt="Canada flag"
                className="mx-auto"
                width={25}
                height={20}
                priority
              />
              {t("language-button.en")}
            </Link>
          </li>
          <li className="text-black my-1">
            <Link href="/pt">
              <Image
                src="/br.svg"
                alt="brazil flag"
                className="mx-auto"
                width={25}
                height={20}
                priority
              />
              {t("language-button.pt")}
            </Link>
          </li>
          <li className="text-black my-1">
            <Link href="/es">
              <Image
                src="/es.svg"
                alt="spanish flag"
                className="mx-auto"
                width={25}
                height={20}
                priority
              />
              {t("language-button.es")}
            </Link>
          </li>
        </ul>
      </details>
      </div>
    </div>
    </div>
  )
}

export default Header;