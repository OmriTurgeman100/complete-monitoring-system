import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="error_page">
      <h2>unexpected error</h2>
      <p>this page doesn't exist.</p>
      <Link to="/">back to homepage</Link>
    </div>
  );
};
