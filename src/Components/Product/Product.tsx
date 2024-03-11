import React from 'react'
import CostumImage from '../CostumImage/CostumImage';
import { basketIcon } from '../../../public/Icons/Icons';

interface productProps {
  id: string;
  imgList: string;
  productName: string;
  productStatus: string;
  productSale: string;
  splitPrice: string;
  oldPrice: string;
  price: string;
  isBasket: false;
}

function Product({ id, imgList, isBasket, oldPrice, price, productName, productSale, productStatus, splitPrice }: productProps) {
  function limitString(name: string): string {
    return name.split(" ").splice(0, 6).join(" ") + "...";
  }
  function formatNumber2(number: string): string {
    return number?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  return (
    <div id={id} className='w-[18%] hover:shadow-md duration-200 cursor-pointer rounded-[20px] p-2'>
      <img style={{ "height": "200px" }} className='rounded-[20px]' src={imgList} alt="Product Img" width={"100%"} height={150} />
      <div className='p-1'>
        <h2 className='text-[15px]'>{limitString(productName)}</h2>
        <div className='flex items-center space-x-2 py-1'>
          <div className='flex items-center space-x-1'>
            <CostumImage src='/Icons/star.svg' alt='Star Icon' blockSize={20} inlineSize={20} styleSizeH='20px' styleSizeW='20px' />
            <span>{productStatus}</span>
          </div>
          <p className='text-[14px]'>{productSale}</p>
        </div>
        <div className='bg-[#FFFF00] shadow px-2.5 py-1 rounded-[20px] inline text-[13px]'>
          <span>{formatNumber2(splitPrice)} сум/мес</span>
        </div>
        <div className='pt-[25px] pb-2 flex items-end justify-between'>
          <div className='flex flex-col'>
            <span className='text-slate-400 line-through text-[15px]'>{formatNumber2(oldPrice)} сум</span>
            <span className='font-semibold text-[22px] leading-[20px]'>{formatNumber2(price)} сум</span>
          </div>
          <button className='w-[28px] h-[28px] flex items-center justify-center'>
            {basketIcon(isBasket ? "#F0AD2D" : "grey")}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product