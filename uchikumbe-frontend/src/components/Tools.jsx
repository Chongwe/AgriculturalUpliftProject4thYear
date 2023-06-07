import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import {
   RssIcon,
  BeakerIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

import{
  FeedCalculator,
  SeedCalculator,
} from "../utils/Calculators";

import MaizeFertilizerCalculator from "../utils/MaizeFertilizerCalculator"
import CompostCalculator from "../utils/CompostCalculator"

const feedCalculator = <FeedCalculator/>
const seedCalculator = <SeedCalculator />
const maizeFertilizerCalculator = <MaizeFertilizerCalculator/>
const compostCalculator = <CompostCalculator/>
 
export default function Example() {
  const data = [
    {
      label: "Feed Calculator",
      value: "feed-calculator",
      icon:  RssIcon,
      compontent: feedCalculator
    },
    {
      label: "Seed Calculator",
      value: "seed-calculator",
      icon: UserCircleIcon,
      desc: seedCalculator
    },
    {
      label: "Maize Calculator",
      value: "maize-calculator",
      icon: Square3Stack3DIcon,
      desc: maizeFertilizerCalculator
    },
    {
      label: "Compost Calculator",
      value: "compost-calculator",
      icon: Square3Stack3DIcon,
      desc: compostCalculator
    },
   
  ];

  const initialValue = data[0].value; // Set the initial value to the value of the first tab

  return (
    <div className="h-screen p-2 m-4">
      <Tabs value={initialValue} orientation="vertical">
        <TabsHeader className="w-60">
          {data.map(({ label, value, icon }) => (
            <Tab key={value} value={value} className="place-items-start">
              <div className="flex items-center gap-2">
                {React.createElement(icon, { className: "w-5 h-5" })}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, compontent }) => (
            <TabPanel key={value} value={value} className="py-0">
              {compontent}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
