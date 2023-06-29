import React, { useState, useEffect } from 'react';
import {
  Tabs,
  TabsHeader,
  Tab,
  Card,
  CardBody,
  Typography,
  CardHeader,
} from '@material-tailwind/react';
import { ArrowLongRightIcon } from '@heroicons/react/outline';
import { client } from '../client';
import { mainNewsListQuery } from '../utils/data';
import imageUrlBuilder from '@sanity/image-url';

export default function News() {
  const [listNews, setListNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const builder = imageUrlBuilder(client);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(mainNewsListQuery);
        setListNews(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (listNews.length === 0) {
    return <p>No news data available.</p>;
  }

  function urlFor(news) {
    return builder.image(news).url();
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
                <div className="max-w-56 overflow-hidden rounded-xl max-h-36">
                  {news.image && (
                    <img
                      src={urlFor(news.image)}
                      className="w-full h-auto"
                      alt={news.title}
                    />
                  )}
                </div>
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
