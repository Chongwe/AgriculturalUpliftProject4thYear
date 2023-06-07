import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import {
  FeedCalculator,
  SeedCalculator,
} from "../utils/Calculators";
import CompostCalculator from "../utils/CompostCalculator";
import MaizeFertilizerCalculator from "../utils/MaizeFertilizerCalculator"

const feedCalculator = <FeedCalculator />;
const seedCalculator = <SeedCalculator />;
const maizeCalculator = <MaizeFertilizerCalculator/>
const copostCalculator = <CompostCalculator />

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
      icon: UserCircleIcon,
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
