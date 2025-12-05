import React from 'react';

const RightPanel: React.FC = () => {
  return (
    <aside className="rightpanel">
      <div className="profile-card">
        <img src="/assets/Layer 2.png" className="profile-large" alt="Jessica" />
        <h3 className="patient-name">Jessica Taylor</h3>
        <div className="patient-meta">
          <div className="meta-item">
            <img src="/assets/icons/calendar.svg" alt="Date of Birth" className="meta-icon" />
            <div>
              <strong>Date of Birth</strong><br />August 23, 1996
            </div>
          </div>

          <div className="meta-item">
            <img src="/assets/icons/FemaleIcon.svg" alt="Gender" className="meta-icon" />
            <div>
              <strong>Gender</strong><br />Female
            </div>
          </div>

          <div className="meta-item">
            <img src="/assets/icons/PhoneIcon.svg" alt="Contact Info" className="meta-icon" />
            <div>
              <strong>Contact Info.</strong><br />(415) 555-1234
            </div>
          </div>

          <div className="meta-item">
            <img src="/assets/icons/PhoneIcon.svg" alt="Emergency Contacts" className="meta-icon" />
            <div>
              <strong>Emergency Contacts</strong><br />(415) 555-5678
            </div>
          </div>

          <div className="meta-item">
            <img src="/assets/icons/InsuranceIcon.svg" alt="Insurance Provider" className="meta-icon" />
            <div>
              <strong>Insurance Provider</strong><br />Sunrise Health Assurance
            </div>
          </div>
        </div>

        <button className="cta">Show All Information</button>
      </div>
    </aside>
  );
};

export default RightPanel;