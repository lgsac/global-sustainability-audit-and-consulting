import React from 'react';

type TitleProps = {
  children: string;
  align: "text-left" | "text-center"
}

const Title: React.FC<TitleProps> = ({ children, align }) =>  {

  return(
    <h2 className={`${align} text-green-600 mb-5 font-semibold text-xl lg:text-2xl`}>{children}</h2>
  )
};

export default Title;