import "./footer.css";

export function Footer() {
  return (
    <div className="footer">
      <ul className="footer-content">
        <li>
          <div className="footer-header">ABOUT</div>
        </li>
        <li>Contact Us</li>
        <li>About Us</li>
        <li>Inquiry/Feedback</li>
        <li>Careers</li>
        {/* <li>Corporate Information</li> */}
      </ul>
      <ul className="footer-content">
        <li>
          <div className="footer-header">HELP</div>
        </li>
        <li>Payments</li>
        <li>Shipping</li>
        <li>Cancellation & Returns</li>
        <li>FAQ</li>
      </ul>
      <ul className="footer-content">
        <li>
          <div className="footer-header">POLICY</div>
        </li>
        <li>Return Policy</li>
        <li>Terms Of Use</li>
        <li>Privacy</li>
        <li>Security</li>
      </ul>
      <ul className="footer-content">
        <li>
          <div className="footer-header">SOCIAL</div>
        </li>
        <li>Twitter</li>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Youtube</li>
      </ul>

      <div className="address-content">
        <div className="footer-header">Registered Office Address:</div>
        <div>
          SportsTown Private Limited,Buildings Alyssa, Begonia & Clove Embassy
          Tech Village, Outer Ring Road,Bengaluru,560103, Karnataka, India
        </div>
      </div>
    </div>
  );
}
