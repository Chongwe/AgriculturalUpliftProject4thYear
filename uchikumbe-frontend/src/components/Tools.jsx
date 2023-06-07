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
import {
  FeedCalculator,
  SeedCalculator,
} from "../utils/Calculators";



const feedCalculator = <FeedCalculator />;
const seedCalculator = <SeedCalculator />;


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
      icon: BeakerIcon,
      compontent: seedCalculator
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
