import React from 'react';

function Subscription() {
  return (
    <main className='subscription-container'>
      <div className='subscription-title'>
        <h3>Subscription</h3>
      </div>
      <hr className="dashed-line" />

      <div className="subscription-content">
        <div className="subscribed-to">
          <p>Subscribed to</p>
        </div>
        <div className="free-plan">
          <p>free</p>
        </div>
      </div>
      <hr className="dashed-line" />

      <div className="subscription-content">
        <div className="subscribed-to">
          <p>Credits used</p>
        </div>
        <div className="free-plan">
          <p>0 / 10.000</p>
        </div>
      </div>
      <hr className="dashed-line" />

      <div className="subscription-content">
        <div className="subscribed-to">
          <p>Credits will reset on</p>
        </div>
        <div className="free-plan">
          <p>jan 15, 02:45 PM</p>
        </div>
      </div>
      <hr className="dashed-line" />

      <div className='subscription-title'>
        <h3>Plans</h3>
      </div>

      <div className="plans-container">
        <div className="plan-card">
          <h3>Free</h3>
          <div className="for_fans">
            <p>For fans who want to try ai power.</p>
          </div>
          <div className="price-forever">
            <div className="price">
              <p>$0</p>
            </div>
            <div className="forever">
              <p>/ Forever</p>
            </div>
          </div>
          <button>Subscribed</button>
          <div className="for_fans">
            <p>What's included</p>
          </div>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          
        </div>

        <div className="plan-card">
          <h3>Starter</h3>
          <div className="for_fans">
            <p>For starters who want to explore more features.</p>
          </div>
          <div className="price-forever">
            <div className="price">
              <p>$20</p>
            </div>
            <div className="forever">
              <p>/ Month</p>
            </div>
          </div>
          <button>Subscribed</button>
          <div className="for_fans">
            <p>What's included</p>
          </div>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
         
        </div>

        

        <div className="plan-card">
          <h3>Creator</h3>
          <div className="for_fans">
            <p>For enterprises with high demands and support needs.</p>
          </div>
          <div className="price-forever">
            <div className="price">
              <p >$50</p>
            </div>
            <div className="forever">
              <p>/ Month</p>
            </div>
          </div>
          <button>Subscribed</button>
          <div className="for_fans">
            <p>What's included</p>
          </div>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          
        </div>
      </div>
    </main>
  );
}

export default Subscription;
