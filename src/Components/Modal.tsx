import { useEffect, useState } from "react";
import Button from "./Button";
import jobData, { JobDataProps } from "./jobData";
import RecordingProperty from "./RecordingProperty";

interface ModalProps {
  showModal: number | null;
  setShowModal: React.Dispatch<React.SetStateAction<number | null>>;
}

const Modal = ({ showModal, setShowModal }: ModalProps) => {
  const [info, setInfo] = useState<JobDataProps>();
  useEffect(() => {
    setInfo(jobData.filter((job) => job.id === showModal)[0]);
  }, [showModal]);

  return (
    <div className="absolute bottom-0 top-0 left-0 right-0 bg-opacity-45 bg-black z-10 p-8">
      <div className="flex flex-col bg-slate-50 w-full gap-4 px-4 py-8 rounded-lg">
        <h2 className="font-semibold">{info?.name}</h2>
        <h4>{info?.date}</h4>
        {info ? (
          <>
            <RecordingProperty label="Duration" value={info?.totalTime} />
            <RecordingProperty
              label="Spraying Duration"
              value={info?.sprayingTime}
            />
            <RecordingProperty
              label="Chemical Volume"
              value={String(info?.volumeSprayed)}
            />
            <RecordingProperty
              label="Average Flow Rate"
              value={String(info?.avgFlowRate)}
            />
          </>
        ) : null}
        <div>
          <h4>Notes:</h4>
          <p className="text-xs p-2 bg-gray-300 rounded-md">
            On-site inspection completed, identified evidence of rodent activity
            in kitchen area. Placed bait stations and sealed entry points.
            Recommended sanitation measures to prevent future infestations.
            Follow-up visit scheduled in two weeks for monitoring and further
            treatment if necessary
          </p>
        </div>
        <Button onClick={() => setShowModal(null)} text="Close" />
      </div>
    </div>
  );
};

export default Modal;
