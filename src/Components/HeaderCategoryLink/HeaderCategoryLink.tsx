import Link from 'next/link'
import React from 'react'
import CostumImage from '../CostumImage/CostumImage';
import Image from 'next/image';

interface categoryLink {
  href: string;
  title: string;
}

function HeaderCategoryLink({ href, title }: categoryLink) {
  return (
    <Link className={`border-[2px] text-[#8a6a2e] hover:border-transparent border-[#f0ad2d] hover:bg-[#8B6B2F] hover:text-white duration-200 p-[6px] text-[14px] rounded-[15px]`} href={href}>
      {title}
    </Link>
  )
}

export default HeaderCategoryLink