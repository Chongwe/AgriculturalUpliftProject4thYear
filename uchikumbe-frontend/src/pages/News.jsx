import React, { useState, useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  Tab,
  Card,
  CardBody,
  Typography,
  CardHeader,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/outline";
import { client } from "../client";
import { mainNewsListQuery } from "../utils/data";
import imageUrlBuilder from "@sanity/image-url";
import Spinner from "../components/Spinner";

/**
 * The News component displays a list of news articles.
 */
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
        console.error("Error fetching news data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Spinner message="Looking for News" />;
  }

  if (listNews.length === 0) {
    return <p>No news data available.</p>;
  }

  /**
   * Returns the URL for the news article's image.
   * @param {Object} news - The news article object.
   * @returns {string} - The URL of the news article's image.
   */
  function urlFor(news) {
    return builder.image(news.image).url();
  }

  return (
    <div className="bg-green-100">
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
                      src={urlFor(news)}
                      className="w-full h-auto"
                      alt={news.title}
                    />
                  )}
                </div>
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h6"
                  color="green"
                  className="uppercase mb-4  border-b focus:border-green-300 
            border-green-100 outline-none"
                >
                  {news.title}
                </Typography>
                <Typography color="gray" className="font-normal mb-2">
                  {news.description}
                </Typography>
                <Card
                  color="none"
                  className="text-sm rounded-md ml-auto w-1/5 "
                >
                  Posted on: {new Date(news.time).toLocaleString()}
                </Card>
              </CardBody>
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
}
