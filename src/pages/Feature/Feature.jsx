import React from 'react';
import './Feature.css';

import coinimage from '../../assets/coinimage.png'; // Assuming you have a coin image in your assets

const Feature = () => {
  return (
    <section className="features">
      <h1 className="features-title">Explore the C₹YPTONIUM</h1>
      <p className="features-subtitle">
  Stay ahead in the crypto game. Get real-time data, performance charts, and live updates on the top 10 cryptocurrencies — all in one powerful dashboard.
</p>

      <div className="team-scheduling">
        


        <div className="features-grid">
          <div className="feature-box">
            <div className="feature-icon" style={{ backgroundColor: "#8D493A" }}></div>
            <h3 className="feature-title">Top 10 Cryptos — Updated Live</h3>
            <p className="feature-description">
              Track the ten most influential cryptocurrencies in real-time. Our list auto-updates to reflect the most relevant coins based on global rankings and performance.
            </p>
            <a href="home" className="feature-link">VIEW DETAILS</a>
          </div>

          <div className="feature-box">
            <div className="feature-icon" style={{ backgroundColor: "#8D493A" }}></div>
            <h3 className="feature-title">Interactive 10-Day Graphs</h3>
            <p className="feature-description">
              Visualize the past 10 days of market activity with smooth, interactive charts. Spot trends, analyze price dips, and plan your next move with confidence.
            </p>
            <a href="#" className="feature-link">ANALYZE TRENDS</a>
          </div>

          <div className="feature-box">
            <div className="feature-icon" style={{ backgroundColor: "#8D493A" }}></div>
            <h3 className="feature-title">Complete Market Stats</h3>
            <p className="feature-description">
              Instantly view a coin’s market rank, live price, market cap, and its 24h high and low — all in one elegant view. No clutter. Just clean, reliable data.
            </p>
            <a href="#" className="feature-link">SEE STATS</a>
          </div>
        </div>
      </div>

      <div className="coin-image">
        <img src={coinimage} alt="coin" />
      </div>
    </section>
  );
};

export default Feature;
