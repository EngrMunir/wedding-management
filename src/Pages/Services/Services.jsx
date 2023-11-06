import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
    const [services, setServices]=useState([])
    console.log(services)

    useEffect(()=>{
        fetch('/data.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                 services.map(service=> <Service key={service.id} service={service}></Service> )
            }
        </div>
    );
};

export default Services;