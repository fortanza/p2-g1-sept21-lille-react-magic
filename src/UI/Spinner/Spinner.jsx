import './Spinner.css';

const Spinner = () => {
  return (
    <div className="loader loader--fan-out">
      <div className="item item-1" />
      <div className="item item-2" />
      <div className="item item-3" />
      <div className="item item-4" />
      <div className="item item-5" />
    </div>
  );
};

export default Spinner;
