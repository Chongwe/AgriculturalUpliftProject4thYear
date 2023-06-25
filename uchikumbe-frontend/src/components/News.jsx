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
import _ from 'lodash';

export default function News() {
  const [listNews, setListNews] = useState(null);
  const [loading, setLoading] = useState(false);
  const builder = imageUrlBuilder(client);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const data = await client.fetch(mainNewsListQuery);
        const sortedData = _.sortBy(data, 'datetime');
        setListNews(sortedData);
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

  const urlForImage = (source) => {
    return urlFor(source).url();
  };

  return (
    <div className="pt-0 bg-green-100 rounded-2xl">
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
              <TabPanel key={news.title} value={news.category}>
                <div className="flex justify-center py-2">
                  <Card className="w-full max-w-[48rem] pt-2">
                    <CardHeader
                      shadow={false}
                      floated={false}
                      className="w-2/5 shrink-0 m-0 rounded-r-none"
                    >
                      <div className="flex items-center space-x-2">
                        {/* {news.image && (
                          <img
                            src={urlFor(news[0]?.image && [0]?.urlFor) .url()}
                            className="w-10 h-10 rounded-full object-cover"
                            alt="posted-by"
                          />
                        )} */}
                      </div>
                    </CardHeader>
                    <CardBody className="py-2">
                      <Typography variant="h6" color="green" className="uppercase mb-2">
                        {news.title}
                      </Typography>
                      <Typography color="gray" className="font-normal mb-2">
                        {news.description}
                      </Typography>
                      <Typography className="float-right">
                        <Card className="text-lg p-2 bg-transparent">
                          Posted: {new Date(news.datetime).toLocaleString()}
                        </Card>
                      </Typography>
                      {/* <a href="#" className="inline-block">
                        <Button variant="text" className="flex items-center gap-2" color="green">
                          Read More
                          <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
                        </Button>
                      </a> */}
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
