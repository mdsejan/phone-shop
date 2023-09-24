import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Phones from "../../components/Phones/Phones";

const Home = () => {
  const phones = useLoaderData();
  return (
    <>
      <Banner></Banner>
      <div className="max-w-screen-2xl mx-auto">
        <Phones phones={phones}></Phones>
      </div>
    </>
  );
};

export default Home;
