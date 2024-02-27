import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const Popup = ({ isOpen, toggleModal, componentName, componentData, propName }) => {
    const Component = componentName;
    console.log("Component = ", componentName);
    console.log("Data = ", componentData);

    const propsObject = { [propName]: componentData };

    return (
        <>
            <Modal isOpen={isOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Component Details</ModalHeader>
                <ModalBody>
                    {componentData && <Component {...propsObject} />}
                </ModalBody>
            </Modal>
        </>
    );
};

export default Popup;