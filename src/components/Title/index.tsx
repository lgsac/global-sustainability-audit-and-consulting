import React from 'react';

type TitleProps = {
  children: string;
}

const Title: React.FC<TitleProps> = ({ children }) =>  {

  return(
    <h2 className="text-green-600 mb-5 font-semibold text-xl lg:text-2xl">{children}</h2>
  )
}

export default Title;