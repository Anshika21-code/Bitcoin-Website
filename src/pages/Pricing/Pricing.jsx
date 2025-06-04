import React from 'react';
import './pricing.css';

const Pricing = () => {
  return (
    <section className="pricing-section">
      <h1 className="pricing-title">Choose Your Crypto Plan</h1>
      <p className="pricing-subtitle">
        Whether you're a casual investor or a crypto pro — we've got a plan for you.
      </p>

      <div className="pricing-cards">
        {/* Free Plan */}
        <div className="pricing-card">
          <h3>Free</h3>
          <p className="price">$0<span>/month</span></p>
          <ul>
            <li>Access top 10 coins</li>
            <li>Basic 10-day graphs</li>
            <li>View market cap & rank</li>
            <li>Limited trend analysis</li>
          </ul>
          <button className="pricing-button">Start Free</button>
        </div>

        {/* Pro Plan */}
        <div className="pricing-card featured">
          <h3>Pro</h3>
          <p className="price">$9<span>/month</span></p>
          <ul>
            <li>All features in Free</li>
            <li>Unlimited coin tracking</li>
            <li>Advanced chart tools</li>
            <li>Real-time alerts & updates</li>
          </ul>
          <button className="pricing-button featured-button">Upgrade Now</button>
        </div>

        {/* Enterprise Plan */}
        <div className="pricing-card">
          <h3>Enterprise</h3>
          <p className="price">Custom</p>
          <ul>
            <li>Dedicated dashboard</li>
            <li>API access</li>
            <li>Custom analytics reports</li>
            <li>24/7 premium support</li>
          </ul>
          <button className="pricing-button">Contact Sales</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
