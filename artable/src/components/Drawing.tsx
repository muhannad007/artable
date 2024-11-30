const Drawing = ({ drawing }: any) => {
  return (
    <div className="single-drawing">
      <img src={drawing.image} alt="img" />
      <h2>{drawing.title}</h2>
    </div>
  );
};

export default Drawing;
