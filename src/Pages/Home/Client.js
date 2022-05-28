import React from 'react';


import client1 from '../../images/tools/client1.png';
import client2 from '../../images/tools/client2.png';
import client3 from '../../images/tools/client3.png';


const Client = () => {
  return (
    <div>
      <h1 className=" uppercase text-error text-xl pl-5 font-bold">
       Largest client 
      </h1>
      <div className="stats shadow w-full mb-20">
        <div className="stat">
          <div className="stat-figure text-primary">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={client1} alt="" />
              </div>
            </div>
          </div>

          <div className="stat-value text-success">Square</div>
          <div className="stat-desc">15% increase of purchase</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={client2} alt="" />
              </div>
            </div>
          </div>

          <div className="stat-value text-primary">ZIMI</div>
          <div className="stat-desc">30% increase of purchase</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={client3} alt="" />
              </div>
            </div>
          </div>
          <div className="stat-value">NEXT</div>

          <div className="stat-desc text-secondary">
            45% increase of purchase
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
