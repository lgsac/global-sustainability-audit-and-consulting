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
          <div className="flex-1">
            <Link href={`/${lang}/#`} className=" m-1.5 p-1.5">
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
            <div className="gap-x-6 flex justify-center mt-4 items-center">
              <Link target="_blank" href="mailto:leandrogarcia@lgsac.com" className="hover:opacity-80">
                <Image
                  src="/email.svg"
                  alt="email gsac"
                  className="mx-auto"
                  width={30}
                  height={0}
                  priority
                />
              </Link>
              <Link target="_blank"  href="https://www.linkedin.com/in/leandro-pires-garcia-a94132229/" className="hover:opacity-80">
                <Image
                  src="/linkedin.svg"
                  alt="linkedin gsac"
                  className="mx-auto"
                  width={30}
                  height={0}
                  priority
                />
              </Link>
              <Link target="_blank" href="https://wa.link/k6axji" className="hover:opacity-80">
                <Image
                  src="/whats.svg"
                  alt="whatsapp gsac"
                  className="mx-auto"
                  width={30}
                  height={0}
                  priority
                />
              </Link>
            </div>
          </div> 
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
        <div className="flex h-10 justify-center items-center bg-black text-white">
          <span>
              GSAC {currentYear} - {t("footer.copyright")}
          </span>
        </div>
      </div>
    </>
  )
}

export default Footer;