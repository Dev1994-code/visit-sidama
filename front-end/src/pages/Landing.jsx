import pic from "../assets/pic.jpg";
import Destinations from "../components/Destinations";
import Blogs from "../components/Blogs";

const Landing = () => {
  return (
    <>
      <div className="flex items-center  flex-col-sm">
        <div className="grid grid-cols-5 gap-8">
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
              src={pic}
              alt="hero"
              className="rounded-md shadow-md w-full h-4/5 mt-7"
            />
          </div>
        </div>
      </div>
      <div>
        <Destinations />
      </div>
      <div>
        <Blogs />
      </div>
    </>
  );
};
export default Landing;
