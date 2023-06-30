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
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import FeedCalculators from "../utils/FeedCalculators.";
import {
  SeedCalculator,
} from "../utils/Calculators";
import MaizeFertilizerCalculator from "../utils/MaizeFertilizerCalculator";
import ChickenFeedCalculator from "../utils/ChickenFeedCulculator";
import Planters from "../utils/Planters";

const seedCalculator = <SeedCalculator />;
const maizeCalculator = <MaizeFertilizerCalculator />;
const feedCalculator = <FeedCalculators />;
const planters = <Planters />

export default function Example() {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "Planters",
      value: "seed-calculator",
      desc: planters,
    },
   

    {
      label: "Feed Calculators",
      value: "chickenfeed-calculator",
      desc: feedCalculator,
    },
  ];

  const initialValue = data[0].value; // Set the initial value to the value of the first tab

  return (
    <div className="flex min-w-screen-sm items-center justify-center">
      <div className="mb-96  flex items-center bg-green-100 h-auto rounded-xl p-2 m-4">
      <Tabs value={initialValue} >
      <TabsHeader
        className="rounded-xl bg-white p-4 border-green-900  "
        indicatorProps={{
          className: "bg-transparent border-t-2 border-green-500 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-green-500" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
      </div>
    </div>
  );
}
