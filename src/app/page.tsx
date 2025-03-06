"use client";

import { Tab, TabGroup, TabList, TabPanels, TabPanel } from "@headlessui/react";
import { Fragment } from "react";
import { PiBeerBottleFill, PiHamburger, PiPizza } from "react-icons/pi";
import { TbSoup } from "react-icons/tb";
import Image from "next/image";

import logoImg from "../../public/images/logo.png";
import headerImg from "../../public/images/header-image.jpg";
import lajthizaImg from "../../public/images/lajthiza.png";
import pizzaImg from "../../public/images/Margheritta 2.png";
import bravoImg from "../../public/images/bravo.png";
import colaImg from "../../public/images/cola.png";
import dhalleImg from "../../public/images/dhalle.png";
import fantaImg from "../../public/images/fanta.png";
import goldeneagleImg from "../../public/images/goldeneagle.png";
import heinekenImg from "../../public/images/heineken.png";
import liptonImg from "../../public/images/lipton.png";
import peroniImg from "../../public/images/peroni.png";
import redbullImg from "../../public/images/redbull.png";
import tepeleneImg from "../../public/images/tepelene.png";

export default function Menu() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <div className="flex flex-col relative max-w-[430px] w-full bg-[#f5f0e8]">
        <Image src={headerImg} width={430} height={240} alt="Header Image" />

        <div className="flex flex-col items-center gap-3 bg-[#FFFDF9] py-4 px-5 rounded-lg mx-5 -mt-6">
          <div className="flex items-center text-[#231100] gap-1">
            <h3 className="font-light text-xl">Mireserdhe ne</h3>
            <h2 className="font-semibold text-2xl">UNICA PIZZA!</h2>
          </div>
          <div className="h-[1px] w-full bg-[#F0EFEC]" />
          <p className="text-[#231100B2] text-center text-sm">
            Ju ftojme te provoni shijet tradicionale italiane me ne! Me poshte
            ju mund te shihni menune tone virtuale.
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
          <Image src={logoImg} width={68} height={100} alt="Unica Pizza Logo" />
          <h1 className="text-2xl font-medium text-black">Menu Virtuale</h1>
        </div>

        <div className="flex justify-center mb-4 mt-6">
          <h4 className="text-xs uppercase font-medium text-black">
            Te Gjitha
          </h4>
        </div>

        {/* Menu Tabs */}
        <TabGroup>
          <TabList className="flex px-3 justify-between items-center">
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

          <div className="w-full h-[1px] bg-[#D8D2C5] mt-4" />

          <TabPanels className="mt-[30px] mb-8 w-full px-5">
            <TabPanel className="flex flex-col gap-3">
              <div className="flex justify-center w-full">
                <h3 className="text-[32px] text-[#2F2F2F] font-semibold">
                  Pijet - Drinks
                </h3>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">Uje</p>
                  <p className="text-lg text-[#232323] font-medium">60 L</p>
                </div>
                <Image
                  src={lajthizaImg}
                  alt="Lajthiza"
                  width={46}
                  height={115}
                />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">Dhalle</p>
                  <p className="text-lg text-[#232323] font-medium">100 L</p>
                </div>
                <Image src={dhalleImg} alt="Dhalle" width={46} height={115} />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">
                    Coca-Cola
                  </p>
                  <p className="text-lg text-[#232323] font-medium">150 L</p>
                </div>
                <Image src={colaImg} alt="Cola" width={46} height={115} />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">Fanta</p>
                  <p className="text-lg text-[#232323] font-medium">150 L</p>
                </div>
                <Image src={fantaImg} alt="Fanta" width={46} height={115} />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">RedBull</p>
                  <p className="text-lg text-[#232323] font-medium">300 L</p>
                </div>
                <Image src={redbullImg} alt="RedBull" width={46} height={115} />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">
                    Golden Eagle
                  </p>
                  <p className="text-lg text-[#232323] font-medium">150 L</p>
                </div>
                <Image
                  src={goldeneagleImg}
                  alt="GoldenEagle"
                  width={46}
                  height={115}
                />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">Bravo</p>
                  <p className="text-lg text-[#232323] font-medium">150 L</p>
                </div>
                <Image src={bravoImg} alt="Bravo" width={46} height={115} />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">
                    Lipton Ice
                  </p>
                  <p className="text-lg text-[#232323] font-medium">150 L</p>
                </div>
                <Image src={liptonImg} alt="Lipton" width={46} height={115} />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">Peroni</p>
                  <p className="text-lg text-[#232323] font-medium">200 L</p>
                </div>
                <Image src={peroniImg} alt="Peroni" width={46} height={115} />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">Heineken</p>
                  <p className="text-lg text-[#232323] font-medium">250 L</p>
                </div>
                <Image
                  src={heinekenImg}
                  alt="Heineken"
                  width={46}
                  height={115}
                />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">
                    Uje Vitamine
                  </p>
                  <p className="text-lg text-[#232323] font-medium">100 L</p>
                </div>
                <Image
                  src={tepeleneImg}
                  alt="Uje Vitamine"
                  width={46}
                  height={115}
                />
              </div>
            </TabPanel>

            <TabPanel className="flex flex-col gap-3">
              <div className="flex justify-center w-full">
                <h3 className="text-[32px] text-[#2F2F2F] font-semibold">
                  {"Italian Pizza's"}
                </h3>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">
                    Margerita N/M
                  </p>
                  <p className="text-m text-subtitle-gray">
                    Domate, Mozzarella
                  </p>
                  <p className="text-lg text-[#232323] font-medium">400 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">
                    Proshute N/M
                  </p>
                  <p className="text-m text-subtitle-gray">
                    Domate, Mozzarella, Proshute
                  </p>
                  <p className="text-lg text-[#232323] font-medium">450 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">
                    Kerpudhe N/M
                  </p>
                  <p className="text-m text-subtitle-gray">
                    Domate, Mozzarella, Kerpudhe
                  </p>
                  <p className="text-lg text-[#232323] font-medium">450 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">
                    Sallam N/M
                  </p>
                  <p className="text-m text-subtitle-gray">
                    Domate, Mozzarella, Sallam
                  </p>
                  <p className="text-lg text-[#232323] font-medium">450 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">
                    Proshute Kerpudhe N/M
                  </p>
                  <p className="text-m text-subtitle-gray">
                    Domate, Mozzarella, Proshute, Kerpudhe
                  </p>
                  <p className="text-lg text-[#232323] font-medium">550 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">
                    Proshute Sallam N/M
                  </p>
                  <p className="text-m text-subtitle-gray">
                    Domate, Mozzarella, Proshute, Sallam
                  </p>
                  <p className="text-lg text-[#232323] font-medium">550 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">
                    Diavola N/M
                  </p>
                  <p className="text-m text-subtitle-gray">
                    Domate, Mozzarella, Sallam pikant
                  </p>
                  <p className="text-lg text-[#232323] font-medium">500 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">Ton N/M</p>
                  <p className="text-m text-subtitle-gray">
                    Domate, Mozzarella, Ton
                  </p>
                  <p className="text-lg text-[#232323] font-medium">550 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">
                    Ton dhe Qepe N/M
                  </p>
                  <p className="text-m text-subtitle-gray">
                    Domate, Mozzarella, Ton, Qepe
                  </p>
                  <p className="text-lg text-[#232323] font-medium">600 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">
                    4 Stinet N/M
                  </p>
                  <p className="text-m text-subtitle-gray">
                    Domate, Mozzarella, Proshute, Ullinj, Kerpudhe, 4 djathra
                  </p>
                  <p className="text-lg text-[#232323] font-medium">550 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">
                    4 Formaggi (Djathera) N/M
                  </p>
                  <p className="text-m text-subtitle-gray">
                    Mozzarella, Gorgonzola, Parmigiano, Pana
                  </p>
                  <p className="text-lg text-[#232323] font-medium">550 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-bold">Kids N/M</p>
                  <p className="text-m text-subtitle-gray">
                    Domate, Mozzarella, Wudi, Patate
                  </p>
                  <p className="text-lg text-[#232323] font-medium">500 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <p className="text-lg text-[#232323] font-medium">
                      Bufolata N/M
                    </p>
                    <span className="text-sm text-white font-medium bg-black px-2 py-1 rounded">
                      Premium
                    </span>
                  </div>

                  <p className="text-m text-subtitle-gray">
                    Domate, Mozzarella, Bufala, Rukola, Pomodorini, Krudo,
                    Parmigiano
                  </p>

                  <p className="text-lg text-[#232323] font-medium">900 L</p>
                </div>

                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">
                    Vegjetariane N/M
                  </p>
                  <p className="text-m text-subtitle-gray">
                    Domate, Mozzarella, Ullinj, Spec, Kerpudhe, Borzilok
                  </p>
                  <p className="text-lg text-[#232323] font-medium">550 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">
                    Mexikane N/M
                  </p>
                  <p className="text-m text-subtitle-gray">
                    Mozzarella, Spec, Djathe i bardhe, ullinj
                  </p>
                  <p className="text-lg text-[#232323] font-medium">500 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <p className="text-lg text-[#232323] font-medium">
                      UNICA PIZZA N/M
                    </p>
                    <span className="text-sm text-white font-medium bg-black px-2 py-1 rounded">
                      Premium
                    </span>
                  </div>
                  <p className="text-m text-subtitle-gray">
                    Mozzarella, Spec, Djathe i bardhe, ullinj
                  </p>
                  <p className="text-lg text-[#232323] font-medium">700 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <p className="text-lg text-[#232323] font-medium">
                      Elegante N/M
                    </p>
                    <span className="text-sm text-white font-medium bg-black px-2 py-1 rounded">
                      Premium
                    </span>
                  </div>
                  <p className="text-m text-subtitle-gray">
                    Fogace, Bufala, Rukola, Pomodorini, Parmigiano
                  </p>
                  <p className="text-lg text-[#232323] font-medium">800 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
            </TabPanel>

            <TabPanel className="flex flex-col gap-3">
              <div className="flex justify-center w-full">
                <h3 className="text-[32px] text-[#2F2F2F] font-semibold">
                  Delicious Sandwiches
                </h3>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">Fshati</p>
                  <p className="text-m text-subtitle-gray">
                    Mozzarella, ullinj, spec, domate, sallam, djath i bardhe,
                    majonez
                  </p>
                  <p className="text-lg text-[#232323] font-medium">200 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">Ton</p>
                  <p className="text-m text-subtitle-gray">
                    Mozzarella, ullinj, ton, speca, domate
                  </p>
                  <p className="text-lg text-[#232323] font-medium">200 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">Proshute</p>
                  <p className="text-m text-subtitle-gray">
                    Mozzarella, proshute, ullinj, domate, majonez
                  </p>
                  <p className="text-lg text-[#232323] font-medium">200 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">
                    Proshute Kerpurdhe
                  </p>
                  <p className="text-m text-subtitle-gray">
                    Mozzarella, proshute, ullinj, domate, majonez
                  </p>
                  <p className="text-lg text-[#232323] font-medium">200 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">
                    4 Formaggi
                  </p>
                  <p className="text-m text-subtitle-gray">
                    Mozzarella, proshute, ullinj, domate, majonez{" "}
                  </p>
                  <p className="text-lg text-[#232323] font-medium">250 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <p className="text-lg text-[#232323] font-medium">
                      Special
                    </p>
                    <span className="text-sm text-white font-medium bg-black px-2 py-1 rounded">
                      Premium
                    </span>
                  </div>
                  <p className="text-m text-subtitle-gray">
                    Mozzarella, proshute, ullinj, domate, majonez
                  </p>
                  <p className="text-lg text-[#232323] font-medium">250 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
            </TabPanel>

            <TabPanel className="flex flex-col gap-3">
              <div className="flex justify-center w-full">
                <h3 className="text-[32px] text-[#2F2F2F] font-semibold">
                  Supa
                </h3>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">
                    Supe Vici
                  </p>
                  <p className="text-lg text-[#232323] font-medium">200 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
              <br />
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">
                    Supe Pule
                  </p>
                  <p className="text-lg text-[#232323] font-medium">200 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">
                    Supe Krem Perime
                  </p>
                  <p className="text-lg text-[#232323] font-medium">200 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">Pilaf</p>
                  <p className="text-lg text-[#232323] font-medium">100 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">
                    Fileto Pule
                  </p>
                  <p className="text-lg text-[#232323] font-medium">300 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-lg text-[#232323] font-medium">Qofte</p>
                  <p className="text-lg text-[#232323] font-medium">40 L</p>
                </div>
                <Image
                  src={pizzaImg}
                  alt="Margherita"
                  width={123}
                  height={124}
                />
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
