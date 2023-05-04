import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fetchUser } from "../utils/fetchUser";
import { useEffect, useState } from "react";
import { userQuery } from "../utils/data";
import { client } from "../client";
export default function RootLayout({ is404 }) {
  const [user, setUser] = useState();

  const userInfo = fetchUser();

  console.log(userInfo?.sub);

  useEffect(() => {
    const query = userQuery(userInfo?.sub);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, []);

  return (
    <>
      <div>
        <Header user={user} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
