import React from 'react';
import './page.css';

const Page: React.FC = () => {
  return (
    <div className="page">
      <div className="overlay">
        <div className="content">
          {/* <img src="utm2.webp" alt="Background" className="background-image" /> */}
          <div className="button-container">
            <img src="libro-alt.png" alt="Button 1" className="button" />
            <img src="edificio.png" alt="Button 2" className="button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;