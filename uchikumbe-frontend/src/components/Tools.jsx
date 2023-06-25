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
import {
  FeedCalculator,
  SeedCalculator,
} from "../utils/Calculators";
import CompostCalculator from "../utils/CompostCalculator";
import MaizeFertilizerCalculator from "../utils/MaizeFertilizerCalculator";
import ChickenFeedCalculator from "../utils/ChickenFeedCulculator";

const feedCalculator = <FeedCalculator />;
const seedCalculator = <SeedCalculator />;
const maizeCalculator = <MaizeFertilizerCalculator />;
const compostCalculator = <CompostCalculator />;
const chickenFeedCalculator = <ChickenFeedCalculator />;

export default function Example() {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "Seed Calculator",
      value: "seed-calculator",
      desc: seedCalculator,
    },
    {
      label: "Compost Calculator",
      value: "compost-calculator",
      desc: compostCalculator,
    },
    {
      label: "Fertilizer Calculator",
      value: "maize-calculator",
      desc: maizeCalculator,
    },
    {
      label: "Chicken feed Calculator",
      value: "chickenfeed-calculator",
      desc: chickenFeedCalculator,
    },
  ];

  const initialValue = data[0].value; // Set the initial value to the value of the first tab

  return (
    <div className="flex min-w-[320px] items-center justify-center">
      <div className="mb-96  flex items-center bg-green-100 rounded-xl p-2 m-4">
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
