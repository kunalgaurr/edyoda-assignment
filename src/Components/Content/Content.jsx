import { BsCurrencyRupee, BsBook, BsClock } from 'react-icons/bs';
import { BiTv } from 'react-icons/bi';
import { SiGooglescholar } from 'react-icons/si';
import { RiAdvertisementLine } from 'react-icons/ri';
import './Content.css';
import { Form } from '../Form/Form';

export const Content = () => {
  return (
    <div id="content-container">
      <div id="content-left">
        <div id="main-lockup">
          <div id="header-container">
            <span className="header">Access curated courses worth </span>
            <span className="header">
              <BsCurrencyRupee />
              <span>
                18,500<div id="header-cut"></div>
              </span>
              &nbsp;at just
              <span style={{ color: 'var(--primary-1)' }}>
                <BsCurrencyRupee /> 99&nbsp;
              </span>
              per year!
            </span>
          </div>
          <div className="pointer">
            <BsBook className="icon" />
            <span className="pointer-text">
              <span>100+&nbsp;</span> Job relevant courses.
            </span>
          </div>
          <div className="pointer">
            <BsClock className="icon" />{' '}
            <span className="pointer-text">
              <span>20,000+&nbsp;</span> Hours of content
            </span>
          </div>
          <div className="pointer">
            <BiTv className="icon" />{' '}
            <span className="pointer-text">
              <span>Exclusive&nbsp;</span> webinar access
            </span>
          </div>
          <div className="pointer">
            <SiGooglescholar className="icon" />{' '}
            <span className="pointer-text">
              Scholarship worth{' '}
              <span>
                <BsCurrencyRupee />
                94,500
              </span>
            </span>
          </div>
          <div className="pointer">
            <RiAdvertisementLine className="icon" />{' '}
            <span className="pointer-text">
              <span>Ad Free&nbsp;</span> learning experience.
            </span>
          </div>
        </div>
      </div>
      <div id="form">
        <Form />
      </div>
    </div>
  );
};
