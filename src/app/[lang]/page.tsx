import useTranslation from 'next-translate/useTranslation'
import Header from '#/components/Header';

const Home: React.FunctionComponent = () => {
  const { t, lang } = useTranslation("home");

  return (
    <>
      <Header />     
    </>
  ) 
}

export default Home;
