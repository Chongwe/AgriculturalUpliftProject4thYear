import React, { useState, useEffect } from 'react';
import {
  Tabs,
  TabsHeader,
  div,
  Tab,
  Card,
  CardBody,
  Typography,
  CardHeader,
  Button 
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { urlFor, client } from "../client";
import { mainNewsListQuery } from "../utils/data";

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
    return <p>Loading...</p>;
  }

  if (!listNews) {
    return <p>No news data available.</p>;
  }

  return (
    <div>
      {listNews.map((news) => (
        <div key={news._id}>
          <div className="flex justify-center pt-4">
            <Card className="w-full max-w-[48rem]">
              <CardHeader
                shadow={false}
                floated={false}
                className="w-2/5 shrink-0 m-0 rounded-r-none"
              >
                {/* <div className="max-w-56 overflow-hidden rounded-xl max-h-36">
                  {news.image && (
                    <img src={urlFor(news.image).url()} className="w-full h-auto" alt={news.title} />
                  )}
                </div> */}
              </CardHeader>
              <CardBody>
                <Typography variant="h6" color="green" className="uppercase mb-4">
                  {news.title}
                </Typography>
                <Typography color="gray" className="font-normal mb-8">
                  {news.description}
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}
