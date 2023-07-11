
import React, { useState } from 'react'
import Modal from '../../components/Modal'
const BUTTON_WRAPPER_STYLES: React.CSSProperties = {
    position: 'relative',
    zIndex: 1
}

const OTHER_CONTENT_STYLES: React.CSSProperties = {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'red',
    padding: '10px'
}

const TestPortal = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <>
            <div className="pt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div style={BUTTON_WRAPPER_STYLES}>
                                <div>
                                    <button className="btn btn-primary" onClick={() => setIsOpen(true)}>Open Portal</button>
                                </div>

                                <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                                    Fancy Modal
                                </Modal>
                            </div>
                            <div style={OTHER_CONTENT_STYLES}>
                                Other content
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default TestPortal;