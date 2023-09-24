import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../components/Header/Header";
import { useEffect } from "react";
import Spinner from "../components/Spinner/Spinner";

const MainLayout = () => {
  const loc = useLocation();

  const navigation = useNavigation();

  useEffect(() => {
    if (loc.pathname === "/") {
      document.title = `Phone _ Home`;
    } else {
      document.title = `Phone ${loc.pathname.replace("/", "_")}`;
    }

    if (loc.state) {
      document.title = `Phone _ ${loc.state}`;
    }
  }, [loc.pathname, loc.state]);

  return (
    <div>
      <Header></Header>
      {navigation.state === "loading" ? <Spinner></Spinner> : <Outlet></Outlet>}
    </div>
  );
};

export default MainLayout;
