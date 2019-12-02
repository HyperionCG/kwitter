import Home from "./Home";
import Profile from "./Profile";
import Newsfeed from "./Profile";
import NotFound from "./NotFound";
import RegisterPage from "./RegisterPage";

export default {
  Home: { path: "/", component: Home },
  Register: { path: "/register", component: RegisterPage },
  Profile: { path: "/profile/:username", component: Profile },
  Newsfeed: { path: "/newsfeed", component: Newsfeed },
  NotFound: { path: "*", component: NotFound }
};
