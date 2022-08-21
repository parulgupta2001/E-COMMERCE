import "./footer.css";

export function Footer() {
  return (
    <div className="footer">
      <ul className="footer-content">
        <li>
          <div className="footer-header">About</div>
        </li>
        <li>Contact Us</li>
        <li>About Us</li>
        <li>Inquiry/Feedback</li>
      </ul>
      <ul className="footer-content">
        <li>
          <div className="footer-header">Help</div>
        </li>
        <li>Payments</li>
        <li>Shipping</li>
        <li>Cancellation & Returns</li>
      </ul>
      <ul className="footer-content">
        <li>
          <div className="footer-header">Policy</div>
        </li>
        <li>Return Policy</li>
        <li>Terms Of Use</li>
        <li>Privacy</li>
      </ul>
      <ul className="footer-content">
        <li>
          <div className="footer-header">Social</div>
        </li>
        <li>Twitter</li>
        <li>Facebook</li>
        <li>Youtube</li>
      </ul>

      <div className="address-content">
        <div className="footer-header">Registered Office Address:</div>
        <div className="footer-address-content">
          SportsTown Private Limited,Buildings Alyssa, Begonia & Clove Embassy
          Tech Village, Bengaluru, 560103, Karnataka, India
        </div>
      </div>
    </div>
  );
}
