import { SetStateAction } from "react";

interface JobCardProps {
    id: number,
    name: string,
    date: string,
    volume: number,
    totalTime: string,
    setShowModal: React.Dispatch<SetStateAction<number | null>>,
}

const JobCard = ({id, name, date, volume, totalTime, setShowModal}: JobCardProps) => {
    return ( 
        <button onClick={() => setShowModal(id)}className="w-full bg-gray-200 rounded-md p-2">
            <div className="flex flex-row justify-between">
                <h2>{name}</h2>
                <p>{date}</p>
            </div>
            <div className="flex flex-row justify-between">
                <p>{totalTime}</p>
                <p>{volume} gal</p>
            </div>
        </button>
     );
}
 
export default JobCard;