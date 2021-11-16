import './Spinner.css';

const Spinner = () => {
  return (
    <div className={['loader', 'loader--fan-out'].join(' ')}>
      <div className={['item', 'item-1'].join(' ')} />
      <div className={['item', 'item-2'].join(' ')} />
      <div className={['item', 'item-3'].join(' ')} />
      <div className={['item', 'item-4'].join(' ')} />
      <div className={['item', 'item-5'].join(' ')} />
    </div>
  );
};

export default Spinner;
