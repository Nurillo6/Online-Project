'use client';

import Image from "next/image"
import Link from "next/link"
import CostumImage from "../CostumImage/CostumImage"
import React, { FormEvent, useEffect, useState } from "react"
import HeaderCard from "../HeaderCard/HeaderCard";
import HeaderCategoryLink from "../HeaderCategoryLink/HeaderCategoryLink";

function Header() {

  // --------- Search input start -----------
  const [openBlurBg, setOpenBlurBg] = useState<boolean>(false)
  const [clearInputValue, setClearInputValue] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>("")
  function searchInputChange(evt: React.FormEvent<HTMLInputElement>): void {
    const value = evt.currentTarget.value
    setSearchValue(value)
    if (evt.currentTarget.value) {
      setClearInputValue(true)
      setOpenBlurBg(true)
    }
    else {
      setClearInputValue(false)
      setOpenBlurBg(false)
    }
  }
  function clickClearInputValue(): void {
    setSearchValue("")
    setClearInputValue(false)
    setOpenBlurBg(false)
  }
  // ----------Search input end ------------

  // ---------- Header Blur bg Click start ------------------
  function handleClickBlurBg(evt: any): void {
    if (evt.target.id == "header-blur-bg") {
      setOpenBlurBg(false)
    }
  }
  // ---------- Header Blur bg Click end --------------------

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

  return (
    <header className="p-2">
      <div className={`xl:container duration-300 ${scrollWindow > 100 ? "sticky top-0" : ""} z-50 mx-auto p-[10px] bg-[#f0ad2d] rounded-md flex items-center justify-between`}>
        <Link href={'/'}>Site Logo</Link>
        <nav className="w-[80%] flex justify-end items-center space-x-3">
          <HeaderCard src="/Icons/book-open.svg" alt="Catalog Book Opening" blockSize={25} inlineSize={25} styleH="25px" styleW="25px" title="Katalog" />
          <form className="w-full md:w-[70%] relative">
            <label>
              <input value={searchValue} onChange={searchInputChange} className="w-full pl-[10px] py-[10px] md:py-[16px] rounded-md outline-none font-semibold placeholder:font-normal" placeholder="Eng ko'p qidirilgan so'z" />
              {clearInputValue && <button className="absolute top-0 bottom-0 my-auto right-[55px] md:right-[70px]" onClick={clickClearInputValue} type="button">
                <CostumImage src="/Icons/clear.svg" alt="Searing input clear" inlineSize={22} blockSize={22} styleSizeH="22px" styleSizeW="22px" />
              </button>}
            </label>
            <button className="w-[45px] h-[38px] md:w-[60px] md:h-[45px] absolute top-0 bottom-0 my-auto right-1 duration-200 bg-[#8b6b2f] hover:bg-[#b18f50] flex items-center justify-center py-2 rounded-xl" type="submit">
              <CostumImage src="/Icons/searching.svg" alt="Searing input icon" inlineSize={25} blockSize={25} styleSizeH="25px" styleSizeW="25px" />
            </button>
          </form>
          <HeaderCard src="/Icons/order.svg" alt="Order Icon" blockSize={28} inlineSize={28} styleH="28px" styleW="28px" title="Zakaz" />
          <HeaderCard src="/Icons/basket.svg" alt="Basket Icon" blockSize={25} inlineSize={25} styleH="27px" styleW="27px" title="Korzinka" />
          <HeaderCard src="/Icons/avatar.svg" alt="Avatar Icon" blockSize={25} inlineSize={25} styleH="27px" styleW="27px" title="Kirish" />
          <button className={`w-[40px] h-[40px] p-[5px] text-white duration-200 flex md:hidden items-center justify-center flex-col bg-[#8b6b2f] hover:bg-[#b18f50] rounded-md`}>
            <CostumImage src="/Icons/hamburger.svg" alt="Hamburger menu" blockSize={20} inlineSize={20} styleSizeH="20px" styleSizeW="20px" />
          </button>
        </nav>
      </div>
      <div className="hidden md:flex xl:container mx-auto py-2 items-center justify-between">
        <div className="flex items-center space-x-2">
          <HeaderCategoryLink href="/" title="0% Muddatli to'lov" />
          <HeaderCategoryLink href="/" title="Chegirmalar" />
          <HeaderCategoryLink href="/" title="Chegirmalar" />
        </div>
        <div className="flex items-center space-x-2">
          <HeaderCategoryLink href="/" title="UZ" />
          <HeaderCategoryLink href="/" title="UZS" />
        </div>
      </div>

      <div onClick={handleClickBlurBg} id="header-blur-bg" className={`fixed ${openBlurBg ? "block" : "hidden"} w-full z-10 h-[100vh] top-0 bottom-0 ring-0 left-0 backdrop-blur-sm bg-[#00000030]`}></div>
    </header>
  )
}

export default Header