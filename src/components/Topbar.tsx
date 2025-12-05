import React from 'react';

const Topbar: React.FC = () => {
  return (
    <header className="topbar">
      <div className="brand">
        <img src="/assets/TestLogo.png" alt="logo" className="logo" />
      </div>

      <nav className="top-nav">
        <a className="nav-item">
          <img src="/assets/icons/home.svg" alt="Overview" className="nav-icon" />
          Overview
        </a>
        <a className="nav-item active">
          <img src="/assets/icons/group.svg" alt="Patients" className="nav-icon" />
          Patients
        </a>
        <a className="nav-item">
          <img src="/assets/icons/calendar.svg" alt="Schedule" className="nav-icon" />
          Schedule
        </a>
        <a className="nav-item">
          <img src="/assets/icons/chat_bubble.svg" alt="Message" className="nav-icon" />
          Message
        </a>
        <a className="nav-item">
          <img src="/assets/icons/credit_card.svg" alt="Transactions" className="nav-icon" />
          Transactions
        </a>
      </nav>

      <div className="profile">
        <img src="/assets/dr.png" alt="Dr" className="profile-pic" />

        <div className="profile-info">
          <div className="name">Dr. Jose Simmons</div>
          <div className="small">General Practitioner</div>
        </div>

        <div className="profile-divider"></div>

        <div className="profile-actions">
          <img src="/assets/icons/more.svg" alt="More Options" className="icon-btn" />
          <img src="/assets/icons/settings.svg" alt="Settings" className="icon-btn" />
        </div>
      </div>
    </header>
  );
};

export default Topbar;