import MyCard from "./myCard";

const Cards = [
  {
    img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title: "Europe Street beat",
    description: "some description about the travel",
  },
  {
    img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title: "Europe Street beat",
    description: "some description about the travel",
  },
  {
    img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title: "Europe Street beat",
    description: "some description about the travel",
  },
  {
    img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    title: "Europe Street beat",
    description: "some description about the travel",
  },
];

const Destinations = () => {
  return (
    <>
      <div className="mx-20">
        <div>
          <h2>Find your best Destination</h2>
        </div>
        <div className="flex items-center gap-10 mb-10 mt-3">
          {Cards.map((card, index) => (
            <MyCard
              key={index}
              title={card.title}
              description={card.description}
              img={card.img}
              style={{
                width: 400,
                height: 400,
                borderRadius: 10,
                border: "2px solid #ff0000",
                padding: 20,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Destinations;
