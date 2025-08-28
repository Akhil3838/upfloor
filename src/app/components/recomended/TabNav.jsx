import React from "react";

function TabNav() {
  return (
    <ul className="nav-tab-recommended justify-content-md-center" role="tablist">
      <li className="nav-tab-item"><a href="#viewAll" className="nav-link-item active" data-bs-toggle="tab">View All</a></li>
      <li className="nav-tab-item"><a href="#apartment" className="nav-link-item" data-bs-toggle="tab">House</a></li>
      <li className="nav-tab-item"><a href="#villa" className="nav-link-item" data-bs-toggle="tab">Plot</a></li>
    </ul>
  );
}

export default TabNav;
