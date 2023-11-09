import React, { useState } from 'react';
import './FormTab.css'

function FormTab() {
  const [activeTab, setActiveTab] = useState('sales');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (

    <div className='container'>
      <div className="heading-footer">
        <h1 className='heading-content'>LET'S GET IN TOUCH WITH US</h1>
      </div>
      <div className='form'>
        <button className={`sales ${activeTab === 'sales' ? 'active-tab' : 'inactive-tab'}`} onClick={() => handleTabClick('sales')}>Sales</button>
        <button className={`services ${activeTab === 'service' ? 'active-tab' : 'inactive-tab'}`} onClick={() => handleTabClick('service')}>Service</button>
      </div>
      <div className='tabs'>
        {activeTab === 'sales' && (
          <div className='sales-tab'>

            <div className="row sales-row">
              <div className="col">
                <h2 >Sales</h2>
              </div>
              <div className="col-md-12">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="col-md-12">
                <input type="text" placeholder="Your Phone" required />
              </div>
              <div className="col-md-12">
                <input type="email" placeholder="Your Mail" id="" required />
              </div>
              <div className="col-md-12">
                <input type="text" placeholder="Enter Your City" name="" id="" required />
              </div>
              <div className="col-md-12">
                <input type="text" placeholder="Enter Your Company" required />
              </div>
              <div className="col-md-12">
                <textarea placeholder="Your Message" rows="3" name="" id="" required></textarea>
              </div>
              <div className="submit ">
                <input type="button" value="Submit" />
              </div>
            </div>
          </div>
        )}
        {activeTab === 'service' && (
          <div className='services-tab'>

            <div className="row services-row">
              <div className="col">
                <h2 >Service</h2>
              </div>
              <div className="col-md-12">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="col-md-12">
                <input type="text" placeholder="Your Phone" required />
              </div>
              <div className="col-md-12">
                <input type="email" placeholder="Your Mail" id="" required />
              </div>
              <div className="col-md-12">
                <input type="text" placeholder="Your Machine Number" required />
              </div>
              <div className="col-md-12">
                <input type="text" placeholder="Enter Your City" name="" id="" required />
              </div>
              <div className="col-md-12">
                <input type="text" placeholder="Enter Your Company" required />
              </div>
              <div className="col-md-12">
                <textarea placeholder="Your Message" rows="3" name="" id="" required></textarea>
              </div>
              <div className="submit ">
                <input type="button" value="Submit" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FormTab;
