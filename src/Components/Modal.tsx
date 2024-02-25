import { SetStateAction } from "react";
import Button from "./Button";

interface ModalProps {
    showModal: number | null,
    setShowModal: React.Dispatch<SetStateAction<number | null>>,
};

const Modal = ({ showModal, setShowModal }: ModalProps) => {
    return ( 
        <div className="absolute bottom-0 top-0 left-0 right-0 bg-opacity-45 bg-black z-10">
            <Button onClick={() => setShowModal(null)} text="Close"/>
        </div>
     );
}
 
export default Modal;