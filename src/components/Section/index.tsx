import React, { ReactNode } from 'react';

type TitleProps = {
  children: ReactNode ;
  sectionId?: string;
  backgroundColor: "bg-white" | "bg-slate-200";
}

const Section: React.FC<TitleProps> = ({ children, sectionId, backgroundColor }) =>  {

  return(
    <div id={sectionId} className={`${backgroundColor} py-20 text-zinc-900`}>
      {children}
    </div>
  )
};

export default Section;