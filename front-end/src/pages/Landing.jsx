//import pic from "../assets/pic.jpg";
import Destinations from "../components/Destinations";
import Blogs from "../components/Blogs";
import { Button } from "antd";
import Reviews from "../components/Reviews";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const token = cookies["access_token"];
  const navigate = useNavigate();
  return (
    <>
      <div className="">
        <div className="lg:grid grid-cols-5 gap-8">
          <div className="col-span-2 mt-40 ml-20">
            <h2 className="text-4xl font-bold mb-4">Travel with us!</h2>
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              laborum libero aut voluptatum voluptatibus doloribus mollitia odit
              a eum magni veritatis reiciendis hic, maxime praesentium
              consectetur doloremque sunt iusto harum.
            </p>
          </div>
          <div className="col-span-3 mt-14 ml-6">
            <img
              src="https://visitsidama.travel/wp-content/uploads/2021/06/Aregash-Lodge.jpg"
              alt="hero"
              className="rounded-md shadow-md w-full h-4/5 mt-7"
            />
          </div>
        </div>
      </div>
      <Destinations />
      <Reviews />
      <div>
        {token && (
          <Button
            className="flex justify-end items-center  bg-yellow-500 hover:bg-lime-600  text-white my-6 mx-6 text-lg py-2 "
            onClick={() => navigate("/rate")}
          >
            Rate travelGuide
          </Button>
        )}
      </div>
    </>
  );
};
export default Landing;
