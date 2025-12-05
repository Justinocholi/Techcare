import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-card">
        <div className="sidebar-title">Patients <img src="/assets/icons/search.svg" alt="Search" className="search-icon" /> </div>
      </div>

      <ul className="patient-list">
        <li className="patient-item">
          <img src="/assets/Layer 8.png" alt="Emily Williams" />
          <div className="p-info">
            <div className="p-name">Emily Williams</div>
            <div className="p-meta">Female, 18</div>
          </div>
          <img src="/assets/icons/more_horiz.svg" alt="More Options" className="icon-btn" />
        </li>

        <li className="patient-item">
          <img src="/assets/Layer 1.png" alt="Ryan Johnson" />
          <div className="p-info">
            <div className="p-name">Ryan Johnson</div>
            <div className="p-meta">Male, 45</div>
          </div>
          <img src="/assets/icons/more_horiz.svg" alt="More Options" className="icon-btn" />
        </li>

        <li className="patient-item">
          <img src="/assets/Layer 3.png" alt="Brandon Mitchell" />
          <div className="p-info">
            <div className="p-name">Brandon Mitchell</div>
            <div className="p-meta">Male, 36</div>
          </div>
          <img src="/assets/icons/more_horiz.svg" alt="More Options" className="icon-btn" />
        </li>

        <li className="patient-item selected">
          <img src="/assets/Layer 2.png" alt="Jessica Taylor" />
          <div className="p-info">
            <div className="p-name">Jessica Taylor</div>
            <div className="p-meta">Female, 28</div>
          </div>
          <img src="/assets/icons/more_horiz.svg" alt="More Options" className="icon-btn" />
        </li>

        <li className="patient-item">
          <img src="/assets/Layer 6.png" alt="Samantha Johnson" />
          <div className="p-info">
            <div className="p-name">Samantha Johnson</div>
            <div className="p-meta">Female, 56</div>
          </div>
          <img src="/assets/icons/more_horiz.svg" alt="More Options" className="icon-btn" />
        </li>

        <li className="patient-item">
          <img src="/assets/Layer 12.png" alt="Ashley Martinez" />
          <div className="p-info">
            <div className="p-name">Ashley Martinez</div>
            <div className="p-meta">Female, 54</div>
          </div>
          <img src="/assets/icons/more_horiz.svg" alt="More Options" className="icon-btn" />
        </li>

        <li className="patient-item">
          <img src="/assets/Layer 10.png" alt="Olivia Brown" />
          <div className="p-info">
            <div className="p-name">Olivia Brown</div>
            <div className="p-meta">Female, 32</div>
          </div>
          <img src="/assets/icons/more_horiz.svg" alt="More Options" className="icon-btn" />
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;