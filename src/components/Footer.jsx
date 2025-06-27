import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <footer className="bg-dark" 
      style={{ paddingTop: '70px', paddingBottom: '70px' }}>
        
      <div className="container cyber-information d-flex justify-content-between">
        <div className="items w-25 pe-4">
          <div className="top d-flex flex-column">
            <p className="m-0 p-0 mb-1 fs-5" style={{ color: '#f85606' }}>Customer Care</p>
            <a className="text-decoration-none text-white" href="#">Help Center</a>
            <a className="text-decoration-none text-white" href="#">How to Buy</a>
            <a className="text-decoration-none text-white" href="#">Returns and Refunds</a>
            <a className="text-decoration-none text-white" href="#">Contact Us</a>
          </div>
          <div className="bottom d-flex flex-column">
            <p className="m-0 p-0 mb-1 fs-5 mt-3" style={{ color: '#f85606' }}>Earn with Cyber</p>
            <a className="text-decoration-none text-white" href="#">Cyber University</a>
            <a className="text-decoration-none text-white" href="#">Sell on Cyber</a>
            <a className="text-decoration-none text-white" href="#">Code of Conducts</a>
          </div>
        </div>

        <div className="items w-25 pe-3 d-flex flex-column">
          <p className="m-0 p-0 mb-1 fs-5" style={{ color: '#f85606' }}>Cyber</p>
          <a className="text-decoration-none text-white" href="#">About Cyber</a>
          <a className="text-decoration-none text-white" href="#">Careers</a>
          <a className="text-decoration-none text-white" href="#">Cyber Blog</a>
          <a className="text-decoration-none text-white" href="#">Terms & Conditions</a>
          <a className="text-decoration-none text-white" href="#">Privacy Policy</a>
          <a className="text-decoration-none text-white" href="#">Digital Payments</a>
          <a className="text-decoration-none text-white" href="#">Cyber Customer University</a>
          <a className="text-decoration-none text-white" href="#">Cyber Affiliate Program</a>
          <a className="text-decoration-none text-white" href="#">Review & Win</a>
          <a className="text-decoration-none text-white" href="#">Meet the Winners</a>
        </div>

        <div className="items w-25 pe-3">
          <p className="m-0 p-0 mb-1 fs-5" style={{ color: '#f85606' }}>Cyber International</p>
          <div className="country d-flex flex-wrap">
            <a className="text-decoration-none text-white bg-dark ps-2 pe-2 rounded" href="#">Germany</a>
            <a className="text-decoration-none text-white bg-dark ps-2 pe-2 rounded" href="#">France</a>
            <a className="text-decoration-none text-white bg-dark ps-2 pe-2 rounded" href="#">Spain</a>
            <a className="text-decoration-none text-white bg-dark ps-2 pe-2 rounded" href="#">Italy</a>
            <a className="text-decoration-none text-white bg-dark ps-2 pe-2 rounded" href="#">Netherlands</a>
          </div>
          <p className="m-0 p-0 mb-1 fs-5 mt-3" style={{ color: '#f85606' }}>Payment Methods</p>
          <div className="payMethods d-flex flex-wrap gap-3">
            <p className="m-0 p-0 bg-white ps-2 pe-2 d-inline rounded">CASH ON DELIVERY</p>
            <p className="m-0 p-0 bg-white ps-2 pe-2 d-inline rounded">VISA</p>
            <p className="m-0 p-0 bg-white ps-2 pe-2 d-inline rounded">Mastercard</p>
            <p className="m-0 p-0 bg-white ps-2 pe-2 d-inline rounded">PayPal</p>
            <p className="m-0 p-0 bg-white ps-2 pe-2 d-inline rounded">SEPA</p>
          </div>
        </div>

        <div className="items pe-3">
          <div className="happyShopping d-flex flex-column">
            <span className="material-symbols-outlined rounded d-inline" style={{ backgroundColor: '#f85606', width: '100px' }}>
              <img src="./logo.png" alt="cyber-logo" width={100} />
            </span>
            <div className="iconText d-flex flex-column">
              <p className="m-0 p-0 happy" style={{ color: '#f85606' }}>Happy Shopping</p>
            </div>
          </div>
          <p className="m-0 p-0 mb-1 fs-5 mt-3" style={{ color: '#f85606' }}>Follow Us</p>
          <div className="links d-flex justify-content-between gap-3">
            <a className="text-decoration-none text-white" href="#"><i className="fa-brands fa-facebook fs-3 text-primary"></i></a>
            <a className="text-decoration-none text-white" href="#"><i className="fa-brands fa-square-instagram fs-3 text-danger"></i></a>
            <a className="text-decoration-none text-white" href="#"><i className="fa-brands fa-square-youtube fs-3 text-danger"></i></a>
            <a className="text-decoration-none text-white" href="#"><i className="fa-solid fa-globe fs-3" style={{ color: '#f85606' }}></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
