import React, { useState, useEffect } from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
  CardBody,
  Typography,
  CardHeader,
  Button 
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { urlFor, client } from "../client";
import { mainNewsListQuery } from "../utils/data";
import Spinner from "./Spinner";
import imageUrlBuilder from '@sanity/image-url';

export default function News() {
  const [listNews, setListNews] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const data = await client.fetch(mainNewsListQuery);
        setListNews(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Spinner message="Loading News" />;
  }

  if (!listNews) {
    return <h2>No news data available.</h2>;
  }

  const categories = [
    { title: "General News", value: "general-news" },
    { title: "Agribusiness and Markets", value: "agribusiness-and-markets" },
    { title: "AgriTechnology", value: "agritechnology" },
    { title: "AgriPolicy", value: "agripolicy" },
  ];

  return (
    <div className="pt-0 bg-green-100  rounded-2xl ">
    <Tabs value={categories[0].value} className="h-screen">
      <TabsHeader className="bg-transparent pt-4">
        {categories.map(({ title, value }) => (
          <Tab key={value} value={value}>
            {title}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="bg-green-100">
        <div className="overflow-y-auto h-screen" style={{ scrollbarWidth: 'none' }}>
          {listNews.map((news) => (
            <TabPanel key={news._id} value={news.category}>
              <div className="flex justify-center pt-4">
                <Card className="w-full max-w-[48rem]">
                  <CardHeader
                    shadow={false}
                    floated={false}
                    className="w-2/5 shrink-0 m-0 rounded-r-none"
                  >
                    {/* <div className=" ">
                      {news.image && (
                        <img
                          src={urlForImage(news.image, 600, 400)} // Adjust the width and height as needed
                          className="flex rounded-xl w-full mt-4"
                          alt={news.title}
                        />
                      )}
                    </div> */}
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h6" color="green" className="uppercase mb-4">
                      {news.title}
                    </Typography>
                    <Typography color="gray" className="font-normal mb-2">
                      {news.description}
                    </Typography>
                    <Typography color="green-100" className="text-xs">
                      Created: {new Date(news.datetime).toLocaleString()}
                    </Typography>
                    {/* <a href="#" className="inline-block">
                      <Button variant="text" className="flex items-center gap-2" color="green">
                        Read More
                        <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                      </Button>
                    */}
                  </CardBody>
                </Card>
              </div>
            </TabPanel>
          ))}
        </div>
      </TabsBody>
    </Tabs>
    </div>
    
  );
}
