import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {

        const [services, setServices]=useState([])
    
        useEffect(()=>{
            fetch('/data.json')
            .then(res => res.json())
            .then(data=>{
                // console.log(data)
                setServices(data)})
            .catch(error => console.error("Error fetching data:", error));
        },[])

        const {id}= useParams();
        const idInt = parseInt(id);
    
        const service = services.find(service => service.id == idInt)
        if (!service) {
            return <div>Loading...</div>;
        }
    
    return (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
        <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white  rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img
            src={service.image}
            alt="img-blur-shadow"
            // layout="fill"
          />
        </div>
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {service.serviceName}
          </h5>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {service.description}
          </p>
        </div>
      </div>
    );
};

export default ServiceDetails;