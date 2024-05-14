import { useParams } from "react-router-dom";
const Package1 = () => {
  const params = useParams();
  return (
    <div>
      <img className="h-[200px] w-[200px] bg-black" />
      <h1 className="mt-12 mb-96">Package{params.id}</h1>;
    </div>
  );
};
export default Package1;
