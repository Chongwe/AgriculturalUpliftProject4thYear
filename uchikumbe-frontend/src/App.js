import Home from "./components/Home";
import News from "./components/News";
import People from "./components/People";
import Forum from "./components/Forum";
import RootLayout from "./Layout/RootLayout";
import NotFound from "./others/NotFound";
import CreatePost from "./components/CreatePost";

//ROUTES
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import UserProfile from "./components/userProfile";
import EditProfile from "./config-pages/EditProfile";
import AddFarm from "./config-pages/AddFarm";
import CreateForum from "./components/createForum";
import ForumPage from "./pages/ForumPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="forum-page/:forumId" element={<ForumPage />} />
      <Route path="post" element={<CreatePost />} />
      <Route path="people" element={<People />} />
      <Route path="news" element={<News />} />
      <Route path="forum" element={<Forum />} />
      <Route path="create-forum/:userId" element={<CreateForum />} />
      <Route path="add-farm" element={<AddFarm />} />
      <Route path="edit-profile" element={<EditProfile />} />
      <Route path="user-profile/:userId" element={<UserProfile />}></Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  );
}
export default App;
