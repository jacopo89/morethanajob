import {MainButton, SecondaryButton} from "../styledComponents/CustomComponents";
import React,{useState} from "react";

import {Modal} from "rsuite";

export default function DeleteButton({onClickHandler}){


    const [show, setShow] = useState(false);


    return (<>
        <SecondaryButton onClick={()=>setShow(true)} >Delete</SecondaryButton>
        <Modal show={show} onHide={()=>setShow(false)}>
            <Modal.Header>
            </Modal.Header>
            <Modal.Body>
                Are you sure?
            </Modal.Body>
            <Modal.Footer>
                <MainButton onClick={onClickHandler} appearance="primary">
                    Ok
                </MainButton>
                <SecondaryButton onClick={()=>setShow(false)} appearance="subtle">
                    Cancel
                </SecondaryButton>
            </Modal.Footer>
        </Modal>
        </>)
}