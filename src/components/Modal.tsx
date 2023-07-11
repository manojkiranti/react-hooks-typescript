import React, { } from "react";
import ReactDOM from "react-dom";

const MODAL_STYLE: React.CSSProperties = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "50px",
    zIndex: "1000"
}

const OVERLAY_STYLE: React.CSSProperties = {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "rgba(0,0,0, 0.7)",
    zIndex: 1000
}

type ModalType = {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
}
const Modal = ({ open, onClose, children }: ModalType) => {
    if (!open) return null;
    return ReactDOM.createPortal(
        <>
            
            <div style={OVERLAY_STYLE}>
                <div style={MODAL_STYLE}>
                    <div className="card mt-2 mb-2">
                        <div className="card-body">
                            <div>
                                <button className="btn btn-primary mt-2 mb-2" onClick={onClose}>Close</button>
                            </div>

                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>,
        document.getElementById("portal")!
    )
}

export default Modal;