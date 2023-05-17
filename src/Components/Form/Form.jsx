import { useState } from 'react';
import './Form.css';
import { BsCurrencyRupee } from 'react-icons/bs';

export const Form = () => {
  const [active, setActive] = useState('179');
  const [checkedTwelve, setCheckedTwelve] = useState(false);
  const [checkedSix, setCheckedSix] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);

  const inputTwelve = {
    border: checkedTwelve ? '2px solid #47ba68' : '2px solid grey',
    backgroundColor: checkedTwelve ? '#47ba686f' : '#ffffff',
  };
  const inputSix = {
    border: checkedSix ? '2px solid #47ba68' : '2px solid grey',
    backgroundColor: checkedSix ? '#47ba686f' : '#ffffff',
  };
  const inputThree = {
    border: checkedThree ? '2px solid #47ba68' : '2px solid grey',
    backgroundColor: checkedThree ? '#47ba686f' : '#ffffff',
  };
  return (
    <div id="form-container">
      <div id="progress-bar">
        <div className="progress-bar-item">
          <span className="progress-bar-number">1</span>
          <span className="progress-bar-name">Sign up</span>
        </div>
        <div className="progress-bar-item">
          <span className="progress-bar-number">2</span>
          <span className="progress-bar-name">Subscribe</span>
        </div>
      </div>
      <div id="form-header">
        <span id="form-heading">Select your subscription plan</span>
      </div>
      <div id="input-container">
        <label
          htmlFor="subscription"
          style={{
            backgroundColor: 'var(--disabled)',
            color: 'var(--text-3',
            cursor: 'not-allowed',
          }}
        >
          <input
            type="radio"
            name="subscription"
            id=""
            disabled={true}
            style={{
              backgroundColor: 'var(--disabled)',
              color: 'var(--text-3',
              cursor: 'not-allowed',
            }}
          />
          <span className="input-name">
            12 months subscription{' '}
            <div id="subscription-costs">
              <span className="actual-cost">
                Total{' '}
                <span>
                  <BsCurrencyRupee />
                  99
                </span>
              </span>
              <span className="discount">8 /month</span>
            </div>
          </span>
          <span id="expiry-message">Offer Expired</span>
        </label>
        <label htmlFor="subscription" style={inputTwelve}>
          <input
            type="radio"
            name="subscription"
            id=""
            onChange={(event) => {
              setCheckedTwelve(event.target.checked);
              setCheckedThree(false);
              setCheckedSix(false);
            }}
            onClick={() => setActive(179)}
          />
          <span className="input-name">
            12 months subscription
            <div id="subscription-costs">
              <span className="actual-cost">
                Total{' '}
                <span>
                  <BsCurrencyRupee />
                  179
                </span>
              </span>
              <span className="discount">
                <span>
                  <BsCurrencyRupee />
                  15
                </span>{' '}
                /month
              </span>
            </div>
          </span>
          <span id="recommendation-message">Recommended</span>
        </label>
        <label htmlFor="subscription" style={inputSix}>
          <input
            type="radio"
            name="subscription"
            id=""
            onChange={(event) => {
              setCheckedSix(event.target.checked);
              setCheckedThree(false);
              setCheckedTwelve(false);
            }}
            onClick={() => setActive(149)}
          />
          <span className="input-name">
            6 months subscription
            <div id="subscription-costs">
              <span className="actual-cost">
                Total{' '}
                <span>
                  <BsCurrencyRupee />
                  149
                </span>
              </span>
              <span className="discount">
                <span>
                  <BsCurrencyRupee />
                  25
                </span>{' '}
                /month
              </span>
            </div>
          </span>
        </label>
        <label htmlFor="subscription" style={inputThree}>
          <input
            type="radio"
            name="subscription"
            id=""
            onChange={(event) => {
              setCheckedThree(event.target.checked);
              setCheckedSix(false);
              setCheckedTwelve(false);
            }}
            onClick={() => setActive(99)}
          />
          <span className="input-name">
            3 months subscription
            <div id="subscription-costs">
              <span className="actual-cost">
                Total{' '}
                <span>
                  <BsCurrencyRupee />
                  99
                </span>
              </span>
              <span className="discount">
                <span>
                  {' '}
                  <BsCurrencyRupee />
                  33
                </span>{' '}
                /month
              </span>
            </div>
          </span>
        </label>
      </div>
      <div id="summary-container">
        <div className="text-container">
          <span className="text">Subscription Fee</span>
          <span className="text" style={{ fontWeight: 500 }}>
            <BsCurrencyRupee />
            18,500
          </span>
        </div>
        <div id="alert">
          <div id="alert-left">
            <span id="alert-heading">Limited time offer</span>
            <span id="alert-body">Offer valid till 25th march 2023</span>
          </div>
          <div id="alert-right" style={{ fontWeight: 500 }}>
            <BsCurrencyRupee />
            18,{500 - active}
          </div>
        </div>
        <div className="text-container">
          <span className="text">
            <span>Total </span> {'(Incl. of 18% GST)'}
          </span>
          <span className="text" style={{ fontWeight: 500, fontSize: '18px' }}>
            <BsCurrencyRupee />
            {active}
          </span>
        </div>
      </div>
      <div id="button-container">
        <button id="cancel-button">Cancel</button>
        <button id="proceed-button">Proceed to pay</button>
      </div>
      <div id="icon-container">
        <img
          referrerpolicy="origin"
          src="https://badges.razorpay.com/badge-dark.png "
          style={{ height: '45px', width: '113px' }}
          alt="Razorpay | Payment Gateway | Neobank"
        />
      </div>
    </div>
  );
};
