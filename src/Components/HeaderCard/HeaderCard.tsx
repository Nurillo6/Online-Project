import React from 'react'
import CostumImage from '../CostumImage/CostumImage'


interface HeaderCardItems {
  title: string;
  src: string;
  alt: string;
  inlineSize: number;
  blockSize: number;
  styleW: string;
  styleH: string
}

function HeaderCard({ src, alt, inlineSize, blockSize, styleW, styleH, title }: HeaderCardItems) {
  return (
    <button className={`w-[65px] h-[60px] hidden p-[5px] text-white duration-200 md:flex items-center justify-center flex-col bg-[#8b6b2f] hover:bg-[#b18f50] rounded-md`}>
      <CostumImage src={src} alt={alt} inlineSize={inlineSize} blockSize={blockSize} styleSizeH={styleH} styleSizeW={styleW} />
      <span className="text-[14px] font-semibold">{title}</span>
    </button>
  )
}

export default HeaderCard