import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
    
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        {/* Page content here */}

        <ul className="menu p-4 w-auto min-h-screen bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-blue-700" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-blue-700" : "")}
              to="/users"
            >
              users
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "text-blue-700" : "")}
              to="/add-item"
            >
              add a contest
            </NavLink>
            {/* <NavLink
              className={({ isActive }) => (isActive ? "text-blue-700" : "")}
              to=""
            >
              all items
            </NavLink> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
