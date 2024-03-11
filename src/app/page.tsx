'use client';
import Product from "@/Components/Product/Product";
import { useEffect, useState } from "react";


export default function Home() {
  const [changeProductList, setChangeProductList] = useState<string>("0")
  function changeProductListClick(evt: any): void {
    if (evt.target.id) {
      setChangeProductList(evt.target.id)
    }
  }
  //  --------------- Scrolling window start -------------
  const [scrollWindow, setScrollWindow] = useState<number>(0)
  const handleScroll = () => {
    setScrollWindow(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  //  --------------- Scrolling window end -------------
  const numberList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4]
  return (
    <main className={`px-4`}>
      <div className="container mx-auto">
        <ul onClick={changeProductListClick} className="flex items-center space-x-3">
          <li id="0" className={`cursor-pointer font-semibold text-[18px] border-b-[1.5px] ${changeProductList == "0" ? "text-[#000000] border-[#000]" : "text-[#a8a8a8] border-transparent"}`}>Рекомендуем</li>
          <li id="1" className={`cursor-pointer font-semibold text-[18px] border-b-[1.5px] ${changeProductList == "1" ? "text-[#000000] border-[#000]" : "text-[#a8a8a8] border-transparent"}`}>Топ-товары</li>
          <li id="2" className={`cursor-pointer font-semibold text-[18px] border-b-[1.5px] ${changeProductList == "2" ? "text-[#000000] border-[#000]" : "text-[#a8a8a8] border-transparent"}`}>Рекомендуем вам</li>
        </ul>
        {/* --------- Products start ------------- */}
        <div className="py-3 flex justify-between flex-wrap">
          {numberList.map(item => (
            <Product key={Math.random()} isBasket={false} id="1" imgList="https://picsum.photos/id/88/150/150" productName="Светодиодная лампа 1156 BA15S/1157 BAY15D для автомобильных фонарей заднего хода, 2 шт" productStatus="4,9" productSale="(5289 купили)" splitPrice="26280" oldPrice="38000" price="23000" />
          ))}
        </div>
        {/* --------- Products end ------------- */}
      </div>
    </main>
  );
}
