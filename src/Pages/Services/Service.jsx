/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Service = ({service}) => {
    const {serviceType, serviceName, id, price, image}=service;
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{serviceType}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <Link to={`/details/${id}`}><button className="btn btn-primary">View details</button></Link>
    </div>
  </div>
</div>
    );
};

export default Service;