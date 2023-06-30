import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { fetchUser } from "../utils/fetchUser";
import { useEffect, useState } from "react";
import { userQuery } from "../utils/data";
import UserContext from "./UserContext";
import { client } from "../client";
export default function RootLayout({ is404 }) {
  const [user, setUser] = useState();
  const signedInUser = user;

  const userInfo = fetchUser();

  useEffect(() => {
    const query = userQuery(userInfo?.sub);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  });

  return (
    <>
      <div>
        <Header user={user} />
        <main>
          <UserContext.Provider value={user}>
            <Outlet />
          </UserContext.Provider>
        </main>
        <Footer />
      </div>
    </>
  );
}
