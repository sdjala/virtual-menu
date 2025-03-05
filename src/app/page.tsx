"use client";

import { motion } from "framer-motion";
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from "@headlessui/react";
import { Fragment } from "react";
import { PiBeerBottleFill, PiHamburger, PiPizza } from "react-icons/pi";
import { TbSoup } from "react-icons/tb";
import { GiLaurels } from "react-icons/gi";

export default function Menu() {
  return (
    <div className="min-h-screen p-5 flex flex-col items-center bg-ivory-cream">
      <motion.div
        className="flex flex-col items-center text-black"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Centered Icon with Gradient */}
        <GiLaurels className="text-6xl text-[#56ca9d] mb-2" />

        {/* Title */}
        <h1 className="text-4xl font-bold text-black">Menu Virtuale</h1>
      </motion.div>
      <motion.h4
        className="text-2xl uppercase font-bold text-black mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Te Gjitha
      </motion.h4>

      {/* Menu Tabs */}
      <TabGroup>
        <TabList className="flex space-x-2">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`flex items-center space-x-2 px-4 py-2 rounded-md font-bold text-2xl ${
                  selected ? "bg-black text-white" : "text-black"
                }`}
              >
                <PiBeerBottleFill className="text-3xl" />
                <span>Pijet</span>
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`flex items-center space-x-2 px-4 py-2 rounded-md font-bold text-2xl ${
                  selected ? "bg-black text-white" : "text-black"
                }`}
              >
                <PiPizza className="text-3xl" />
                <span>Pizza</span>
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`flex items-center space-x-2 px-4 py-2 rounded-md font-bold text-2xl ${
                  selected ? "bg-black text-white" : "text-black"
                }`}
              >
                <PiHamburger className="text-3xl" />
                <span>Sandwiches</span>
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`flex items-center space-x-2 px-4 py-2 rounded-md font-bold text-2xl ${
                  selected ? "bg-black text-white" : "text-black"
                }`}
              >
                <TbSoup className="text-3xl" />
                <span>Supa</span>
              </button>
            )}
          </Tab>
        </TabList>

        <TabPanels className="mt-4 w-full p-5 border rounded-lg bg-ivory-cream shadow-md">
          <TabPanel className="grid-cols-2 gap-4 grid grid-cols-2 gap-4 md:gap-8">
            <div className="flex flex-col justify-center">
              <p className="text-lg text-black">Uje</p>
              <p className="text-lg text-black">60L</p>
            </div>
            <div className="flex justify-end">
              <img
                src="https://freshalbmarket.co.uk/263-medium_default/lajthiza-premium-mineral-water-05l-out-of-stock.jpg"
                alt="Lajthiza Water"
                className="w-40 h-auto object-cover rounded-lg"
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
  );
}
