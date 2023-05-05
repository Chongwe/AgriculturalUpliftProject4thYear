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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="post" element={<CreatePost />} />
      <Route path="people" element={<People />} />
      <Route path="news" element={<News />} />
      <Route path="forum" element={<Forum />} />
      <Route path="user-profile/:userId" element={<UserProfile />} />
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
