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
  FeedCalculator,
  SeedCalculator,


} from "../utils/Calculators";
const feedCalculator = <FeedCalculator/>
const seedCalculator = <SeedCalculator />
 
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
      label: "Settings",
      value: "settings",
      icon: Cog6ToothIcon,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <div className="h-screen m-4">
        <Tabs value="dashboard" orientation="vertical">
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