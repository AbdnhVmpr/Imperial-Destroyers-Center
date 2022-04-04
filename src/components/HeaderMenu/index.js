import { headerNav } from "../../data";

import { Link, useLocation } from "react-router-dom";

const HeaderMenu = () => {
  const { pathname } = useLocation();

  const active = headerNav.findIndex((e) => e.path === pathname);
  return (
    <>
      {headerNav.map((e, i) => (
        <li key={i} className={`${i === active ? "active" : ""}`}>
          <Link to={e.path}>
            {e.icon}
            {e.display}
          </Link>
        </li>
      ))}
    </>
  );
};

export default HeaderMenu;
