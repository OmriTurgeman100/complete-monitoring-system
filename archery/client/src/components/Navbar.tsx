import { Outlet, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="root-layout">
      <header>
        <h2>archery</h2>
        <NavLink to="/">home</NavLink>
        <NavLink to="about">about</NavLink>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};
