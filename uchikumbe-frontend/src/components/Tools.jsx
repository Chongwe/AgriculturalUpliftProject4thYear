import React from "react";
// import compostIcon from "../assets/fertilizer.svg"
// import catleicon from "../assets/cattle.svg"
// import maizeicon from "../assets/maize.svg"
// import seedlingicon from "../seedling.svg"
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import {
  FeedCalculator,
  SeedCalculator,
} from "../utils/Calculators";
import CompostCalculator from "../utils/CompostCalculator";
import MaizeFertilizerCalculator from "../utils/MaizeFertilizerCalculator"
import ChickenFeedCalculator from "../utils/ChickenFeedCulculator";



const feedCalculator = <FeedCalculator />;
const seedCalculator = <SeedCalculator />;
const maizeCalculator = <MaizeFertilizerCalculator/>
const copostCalculator = <CompostCalculator />
const chickenFeedCalculator = <ChickenFeedCalculator/> 

export default function Example() {
  const data = [
    {
      label: "FeedCalculator",
      value: "feed-calculator",
      icon: Square3Stack3DIcon,
      desc: feedCalculator
    },
    {
      label: "Seed Calculator",
      value: "seed-calculator",
      icon: Cog6ToothIcon,
      desc: seedCalculator
    },
    {
      label: "Compost Calculator",
      value: "compost-calculator",
      icon: Cog6ToothIcon,
      desc: copostCalculator
    },
    {
      label: "Maize Calculator",
      value: "maize-calculator",
      icon: Cog6ToothIcon,
      desc: maizeCalculator
    },
    {
      label: "Chicken feed Calculator",
      value: "chickenfeed-calculator",
      icon: Cog6ToothIcon,
      desc: chickenFeedCalculator
    },
  ];

  const initialValue = data[0].value; // Set the initial value to the value of the first tab

  return (
    <div className=" mb-96 flex bg-green-50 rounded-xl p-2 m-4">
      <Tabs value={initialValue} orientation="vertical">
        <TabsHeader className="w-60 bg-green-100">
          {data.map(({ label, value, icon }) => (
            <Tab key={value} value={value} className="place-items-start  ">
              <div className="flex items-center gap-2">
                {React.createElement(icon, { className: "w-5 h-5" })}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="bg-transparent">
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className="py-0">
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
