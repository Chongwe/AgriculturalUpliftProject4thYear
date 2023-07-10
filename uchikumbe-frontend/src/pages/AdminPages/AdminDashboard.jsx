import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import ManageForumCreationRequestPage from "./ManageForumCreationRequestPage";
import ManageUserPage from "./ManageUserPage";

const manageForumCreationRequest = <ManageForumCreationRequestPage />;
const manageUser = <ManageUserPage />;

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "Manage Forum Creation Submission",
      value: "forum-request-submissions",
      desc: manageForumCreationRequest,
    },
    {
      label: "Manage Users",
      value: "manage-users",
      desc: manageUser,
    },
  ];

  const initialValue = data[0].value; // Set the initial value to the value of the first tab


  return (
    <div className="flex min-w-screen-sm items-center justify-center">
      <div className="mb-96  flex items-center bg-green-100 rounded-xl p-2 m-4">
        <Tabs value={initialValue}>
          <TabsHeader
            className="rounded-xl bg-white p-4 border-green-900  "
            indicatorProps={{
              className:
                "bg-transparent border-t-2 border-green-500 shadow-none rounded-none",
            }}
          >
          /*  mapping over the `data` array and creating a set of `Tab`
          components based on the values in the array. */
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
            /* mapping over the `data` array and creating a set of `TabPanel`
            components based on the values in the array. */
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
};

export default AdminDashboard;
