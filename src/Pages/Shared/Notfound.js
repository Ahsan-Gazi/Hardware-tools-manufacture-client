
import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import notfound from '../../images/pageNotFound.jpg';

const Notfound = () => {
  return (
    <div className="not-found-container container">
      <PageTitle title={'404'}></PageTitle>
      <div className="w-100">
        <img
          style={{ width: '100%', height: '100vh' }}
          className=" img-fluid"
           src={notfound}
          alt=""
        />
      </div>
    </div>
  );
};

export default Notfound;