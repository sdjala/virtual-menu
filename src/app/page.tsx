"use client";

import { Tab, TabGroup, TabList, TabPanels, TabPanel } from "@headlessui/react";
import { Fragment } from "react";
import { PiBeerBottleFill, PiHamburger, PiPizza } from "react-icons/pi";
import { TbSoup } from "react-icons/tb";
import Image from "next/image";

import logoImg from '../../public/images/logo.png';
import headerImg from '../../public/images/header-image.jpg';
import lajthizaImg from '../../public/images/lajthiza.png';


export default function Menu() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <div className="flex flex-col relative max-w-[430px] w-full bg-[#f5f0e8]">
        <Image 
          src={headerImg}
          width={430}
          height={240}
          alt="Header Image"
        />

        <div className="flex flex-col items-center gap-3 bg-[#FFFDF9] py-4 px-5 rounded-lg mx-5 -mt-6">
          <div className="flex items-center text-[#231100] gap-1">
            <h3 className="font-light text-xl">Mireserdhe ne</h3>
            <h2 className="font-semibold text-2xl">UNICA PIZZA!</h2>
          </div>
          <div className="h-[1px] w-full bg-[#F0EFEC]" />
          <p className="text-[#231100B2] text-center text-sm">
            Ju ftojme te provoni shijet tradicionale italiane me ne! Me poshte ju mund te shihni menune tone virtuale.
          </p>
          <div className="flex w-full px-2">
            <div className="flex flex-col flex-1 text-[#231100B2]">
              <h4 className="text-sm font-semibold">Adresa:</h4>
              <p className="text-sm">Blvd. Nenetereza</p>
              <p className="text-sm">St. Autobusave Kamez</p>
            </div>
            <div className="flex w-[1px] bg-[#F0EFEC] mx-4" />
            <div className="flex flex-col flex-1 text-[#231100B2]">
              <h4 className="text-sm font-semibold">Nr Tel:</h4>
              <p className="text-sm">068 658 6258</p>
            </div>
          </div>

        </div>

        <div className="flex flex-col items-center text-black mt-10 gap-0.5">
          <Image
            src={logoImg}
            width={68}
            height={100}
            alt="Unica Pizza Logo"
          />
          <h1 className="text-2xl font-medium text-black">Menu Virtuale</h1>
        </div>

        <div className="flex justify-center mb-4 mt-6">
          <h4 className="text-xs uppercase font-medium text-black">
            Te Gjitha
          </h4>
        </div>

        {/* Menu Tabs */}
        <TabGroup>
          <TabList className="flex px-3 gap-2 items-center">
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`flex items-center px-2 py-3 rounded-md font-medium text-md gap-2 ${
                    selected ? "bg-black text-white" : "text-black"
                  }`}
                >
                  <PiBeerBottleFill className="text-c" />
                  <span>Pijet</span>
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`flex items-center px-2 py-3 rounded-md font-medium text-md gap-2 ${
                    selected ? "bg-black text-white" : "text-black"
                  }`}
                >
                  <PiPizza className="text-[20px]" />
                  <span>Pizza</span>
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`flex items-center px-2 py-3 rounded-md font-medium text-md gap-2 ${
                    selected ? "bg-black text-white" : "text-black"
                  }`}
                >
                  <PiHamburger className="text-[20px]" />
                  <span>Sandwiches</span>
                </button>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <button
                  className={`flex items-center px-2 py-3 rounded-md font-medium text-md gap-2 ${
                    selected ? "bg-black text-white" : "text-black"
                  }`}
                >
                  <TbSoup className="text-[20px]" />
                  <span>Supa</span>
                </button>
              )}
            </Tab>
          </TabList>

          <div className="w-full h-[1px] bg-[#D8D2C5] mt-4"/>

          <TabPanels className="mt-[30px] mb-8 w-full px-5">
            <TabPanel className="flex flex-col gap-3">
              {/* TODO: copy paste component below and change text then add for other TabPanel-s */}
              <div className="flex justify-center w-full">
                <h3 className="text-[32px] text-[#2F2F2F] font-semibold">Pijet - Drinks</h3>
              </div>
              {/* TODO: copy paste component below and change text and image then add for other TabPanel-s */}
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">Uje</p>
                  <p className="text-lg text-[#232323] font-medium">60L</p>
                </div>
                  <Image 
                    src={lajthizaImg}
                    alt="Lajthiza"
                    width={46}
                    height={115}
                  />
              </div>
            </TabPanel>

            <TabPanel className="grid-cols-2 gap-4 grid grid-cols-2 gap-4 md:gap-8">
              <div className="flex flex-col justify-center">
                <p className="text-lg text-black">Margerita N/M</p>
                <p className="text-m text-subtitle-gray">Domate, Mozzarella</p>
                <p className="text-lg text-black">400L</p>
              </div>
              <div className="flex justify-end">
                <img
                  src="https://as2.ftcdn.net/jpg/06/09/87/69/1000_F_609876955_LM9vRt1Dy60FUMfdvS63jCNAJ1m40w9q.jpg"
                  alt="Margerita"
                  className="w-40 h-auto object-cover rounded-lg"
                />
              </div>
            </TabPanel>

            <TabPanel className="grid-cols-2 gap-4 grid grid-cols-2 gap-4 md:gap-8">
              <div className="flex flex-col justify-center">
                <p className="text-lg text-black">Fshati</p>
                <p className="text-m text-subtitle-gray">
                  Mozzarella, ullinj, spec, domate, sallam, djath i bardhe,
                  majonez
                </p>
                <p className="text-lg text-black">200L</p>
              </div>
              <div className="flex justify-end">
                <img
                  src="https://image.similarpng.com/file/similarpng/very-thumbnail/2021/06/Bologna-and-lettuce-sandwich-isolated-on-transparent-background-PNG.png"
                  alt="Sandwich Fshati"
                  className="w-40 h-auto object-cover rounded-lg"
                />
              </div>
            </TabPanel>

            <TabPanel className="grid-cols-2 gap-4 grid grid-cols-2 gap-4 md:gap-8">
              <div className="flex flex-col justify-center">
                <p className="text-lg text-black">Supe Vici</p>
                <p className="text-lg text-black">200L</p>
              </div>
              <div className="flex justify-end">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjP6D_EiFNW4BPSGUZSzCUAM1nkTWHZl_QeA&s"
                  alt="Supe Vici"
                  className="w-40 h-auto object-cover rounded-lg"
                />
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
