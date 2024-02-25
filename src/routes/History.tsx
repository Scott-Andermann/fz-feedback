import Wrapper from "../Components/Wrapper";
import NavBar from "../Components/NavBar";
import jobData from "../Components/jobData";
import JobCard from "../Components/JobCard";
import { useState } from "react";
import Modal from "../Components/Modal";

const History = () => {
    const [showModal, setShowModal] = useState<number | null>(null);

    console.log(showModal);
    
    
    return ( 
        <Wrapper>  
            <h2>Job History</h2>
                {jobData.map((job) => {
                    return (<JobCard 
                    key={job.id} 
                    id={job.id}   
                    name={job.name}
                    date={job.date}
                    volume={job.volumeSprayed}
                    totalTime={job.totalTime}
                    setShowModal={setShowModal}
                    />
                )})}
            <NavBar />
            {showModal ? 
                <Modal showModal={showModal} setShowModal={setShowModal} />
             : null}
        </Wrapper>
     );
}
 
export default History;