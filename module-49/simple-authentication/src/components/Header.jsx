import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between py-5 mb-2">
      <div>
        <h2>Simple Authentication </h2>
      </div>
      <div className="gap-4 inline-flex">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Header;
