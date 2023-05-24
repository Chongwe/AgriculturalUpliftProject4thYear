import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  
} from "@material-tailwind/react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  CardHeader,
  Button 
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const randomImage = "https://source.unsplash.com/800x600/?farm,farm-animals";
 
export default function News() {
  const data = [
    {
      label: "General News",
      value: "General News",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
   
    {
      label: "Agribusiness and Markets",
      value: "Agribusiness and Markets",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "AgriTechology",
      value: "AgriTechnology",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "AgriPolicy",
      value: "AgriPolicy",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
 
return (
 
<Tabs value="html" className="h-screen  ">
  <TabsHeader className="bg-transparent pt-4 ">
    {data.map(({ label, value }) => (
      <Tab key={value} value={value}>
        {label}
      </Tab>
    ))}
  </TabsHeader>
  <TabsBody >
    {data.map(({ value, desc }) => (
      <TabPanel key={value} value={value}>
       
        <div className="flex justify-center">
              <Card className="w-full max-w-[48rem]">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="w-2/5 shrink-0 m-0 rounded-r-none"
                >
                  <img
              src={randomImage}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h6" color="green" className="uppercase mb-4">
                    startups
                  </Typography>
                  {desc}
                  <Typography color="gray" className="font-normal mb-8">
                    Like so many organizations these days, Autodesk is a company in transition.
                    It was until recently a traditional boxed software company selling licenses.
                    Yet its own business model disruption is only part of the story
                  </Typography>
                  <a href="#" className="inline-block ">
                    <Button variant="text" className="flex items-center gap-2" color="green">
                      Read More
                      <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                    </Button>
                  </a>
                </CardBody>
              </Card>
            </div>
<div className="flex justify-center pt-4">
              <Card className="w-full max-w-[48rem]">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="w-2/5 shrink-0 m-0 rounded-r-none"
                >
                  <img
              src={randomImage}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h6" color="green" className="uppercase mb-4">
                    startups
                  </Typography>
                  {desc}
                  <Typography color="gray" className="font-normal mb-8">
                    Like so many organizations these days, Autodesk is a company in transition.
                    It was until recently a traditional boxed software company selling licenses.
                    Yet its own business model disruption is only part of the story
                  </Typography>
                  <a href="#" className="inline-block">
                    <Button variant="text" className="flex items-center gap-2" color="green" >
                      Read More
                      <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                    </Button>
                  </a>
                </CardBody>
              </Card>
            </div> 
            <div className="flex justify-center pt-4">
              <Card className="w-full max-w-[48rem]">
                <CardHeader
                  shadow={false}
                  floated={false}
                  className="w-2/5 shrink-0 m-0 rounded-r-none"
                >
                  <img
              src={randomImage}
                    alt="image"
                    className="w-full h-full object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h6" color="green" className="uppercase mb-4">
                    startups
                  </Typography>
                  {desc}
                  <Typography color="gray" className="font-normal mb-8">
                    Like so many organizations these days, Autodesk is a company in transition.
                    It was until recently a traditional boxed software company selling licenses.
                    Yet its own business model disruption is only part of the story
                  </Typography>
                  <a href="#" className="inline-block">
                    <Button variant="text" className="flex items-center gap-2" color="green">
                      Read More
                      <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                    </Button>
                  </a>
                </CardBody>
              </Card>
            </div>    
   

    
      </TabPanel>
    ))}
  </TabsBody>
</Tabs>
); }
 