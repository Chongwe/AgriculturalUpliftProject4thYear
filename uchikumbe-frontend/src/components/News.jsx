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
  Button 
} from "@material-tailwind/react";
 
export default function News() {
  const data = [
    {
      label: "Crops",
      value: "crops",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Livestock and Poultry",
      value: "Livestock and Poultry",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
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
 
<Tabs value="html">
  <TabsHeader className="bg-transparent pt-4">
    {data.map(({ label, value }) => (
      <Tab key={value} value={value}>
        {label}
      </Tab>
    ))}
  </TabsHeader>
  <TabsBody >
    {data.map(({ value, desc }) => (
      <TabPanel key={value} value={value}>
       
        
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1">

    <Card className="mt-6 w-45">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          {desc}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 hover:bg-none">
        <Button className="bg-green-600">Read More</Button >
      </CardFooter>
    </Card>
    <Card className="mt-6 w-45">
      <CardBody>
        <Typography variant="h5" color="blue-gray"  className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          {desc}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className="bg-green-600">Read More</Button >
      </CardFooter>
    </Card>
    <Card className="mt-6 w-45">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          {desc}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className="bg-green-600">Read More</Button>
      </CardFooter>
    </Card>
    <Card className="mt-6 w-45">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          {desc}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className="bg-green-600"><link>Read More</link></Button >
      </CardFooter>
    </Card>
    <Card className="mt-6 w-45">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          {desc}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className="bg-green-600">Read More</Button>
      </CardFooter>
    </Card>

    </div>
      </TabPanel>
    ))}
  </TabsBody>
</Tabs>
); }
 