import Header from '#/components/Header';
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link';

const Services: React.FunctionComponent = () => {

  const { t, lang } = useTranslation("services-provided")

  return (
    <>
      <Link href={`/${lang}`}>{t("to-home-page")}</Link>
    </>
  ) 
}

export default Services;
