import Home from "./components/Home";
import News from "./components/News";
import People from "./components/People";
import Forum from "./components/Forum";
import RootLayout from "./Layout/RootLayout";
import NotFound from "./others/NotFound";
import CreatePost from "./components/CreatePost";
import CommentPage from "./pages/CommentPage";
import Tools from "./components/Tools";

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
import SendSMS from "./components/SendSMS";
import SignUp from "./utils/SignUp";
import AdminDashboard from "./pages/AdminPages/AdminDashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="sign-in" element={<SignUp />} />
      <Route path="forum-page/:forumId" element={<ForumPage />} />
      <Route path="/comments/:forumId/:postId" element={<CommentPage />} />
      <Route path="people" element={<People />} />
      <Route path="news" element={<News />} />
      <Route path="tools" element={<Tools />} />
      <Route path="forum" element={<Forum />} />
      <Route path="create-forum/:userId" element={<CreateForum />} />
      <Route path="create-post/:forumId" element={<CreatePost />} />
      <Route path="add-farm" element={<AddFarm />} />
      <Route path="message/:userId" element={<SendSMS />} />
      <Route path="edit-profile/:userId" element={<EditProfile />} />
      <Route path="user-profile/:userId" element={<UserProfile />}></Route>
      <Route path="admin-dashboard" element={<AdminDashboard />}></Route>
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
