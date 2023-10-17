import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

const Footer: React.FC = () =>  {
  const t = useTranslations();
  const lang = useLocale();
  const currentYear = new Date().getFullYear();

  return(
    <>
      <div id="footer">
        <div className="h-48 lg:h-72 bg-green-600 flex items-center justify-center">
          <div className="flex-1"></div>
          <Link href={`/${lang}`} className=" m-1.5 p-1.5 flex-1">
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
          <div className="flex-1">
            <Image
              src="/leaf.svg"
              alt="Global sustainability audit and consulting"
              className="pt-16"
              width={230}
              height={0}
              priority
            />
          </div>
        </div>
        <div className="flex h-10 justify-center items-center bg-black">
          <span>
              GSAC {currentYear} - {t("footer.copyright")}
          </span>
        </div>
      </div>
    </>
  )
}

export default Footer;