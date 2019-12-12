import Home from "./Home";
import Profile from "./Profile";
import Newsfeed from "./Newsfeed";
import NotFound from "./NotFound";
import RegisterPage from "./RegisterPage";
import UserSearch from "./UserSearch";

export default {
  Home: { path: "/", component: Home },
  Register: { path: "/register", component: RegisterPage },
  Profile: { path: "/profile/:username", component: Profile },
  Newsfeed: { path: "/newsfeed", component: Newsfeed },
  UserSearch: { path: "/usersearch", component: UserSearch },
  NotFound: { path: "*", component: NotFound }
};
