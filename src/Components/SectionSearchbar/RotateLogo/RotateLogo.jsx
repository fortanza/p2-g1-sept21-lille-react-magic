import './RotateLogo.css';

export default function RotateLogo() {
  return (
    <div style={{ backgroundImage: 'url(img/logo.png)' }} className="logo">
      <div className="pivot">
        <div
          style={{ backgroundImage: 'url(img/white.png)' }}
          className="circle circle1 reverseSpinAnim shadow "
        />
        <div
          style={{ backgroundImage: 'url(img/blue.png)' }}
          className="circle circle2 reverseSpinAnim shadow"
        />
        <div
          style={{ backgroundImage: 'url(img/black.png)' }}
          className="circle circle3 reverseSpinAnim shadow"
        />
        <div
          style={{ backgroundImage: 'url(img/red.png)' }}
          className="circle circle4 reverseSpinAnim shadow"
        />
        <div
          style={{ backgroundImage: 'url(img/green.png)' }}
          className="circle circle5 reverseSpinAnim shadow"
        />
      </div>
    </div>
  );
}
