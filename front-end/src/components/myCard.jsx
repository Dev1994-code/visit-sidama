const MyCard = (Props) => {
  const { title, img, description } = Props;
  return (
    <div className="rounded-3xl">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default MyCard;
