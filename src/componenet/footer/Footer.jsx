import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative footer  bg-black/20 text-neutral-content p-2 fixed flex flex-col items-center shadow-xl ">
      <aside className="grid-flow-col items-center ">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="md:flex  items-center md:text-sm gap-5">
        <Link to="privacypolicy">
          <li>Privacy Policy</li>
        </Link>
        <Link to="refund">
          <li>Refund Policy</li>
        </Link>
        <Link to="termsandconditions">
          <li>Terms & Conditions</li>
        </Link>
        <Link to="contactus">
          <li>ContactUs</li>
        </Link>
      </nav>
    </footer>
  );
};
export default Footer;
