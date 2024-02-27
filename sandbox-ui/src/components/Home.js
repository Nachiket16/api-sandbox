import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <div className="intro">
          <iframe
          src="https://docs.mintifi.com/"
          title="Embedded Docs of Mintifi"
          width="100%"
          height="1000px" // Adjust the height as per your requirement
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default Home;
