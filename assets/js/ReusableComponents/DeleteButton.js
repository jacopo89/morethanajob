import {MainButton, SecondaryButton} from "../styledComponents/CustomComponents";
import React,{useState} from "react";

import {Modal} from "rsuite";
import {useTranslation} from "react-i18next";

export default function DeleteButton({onClickHandler}){


    const [show, setShow] = useState(false);
    const {t} = useTranslation();

    return (<>
        <SecondaryButton onClick={()=>setShow(true)} >{t('Delete')}</SecondaryButton>
        <Modal show={show} onHide={()=>setShow(false)}>
            <Modal.Header>
            </Modal.Header>
            <Modal.Body>
                {t('Are you sure')}
            </Modal.Body>
            <Modal.Footer>
                <MainButton onClick={onClickHandler} appearance="primary">
                    Ok
                </MainButton>
                <SecondaryButton onClick={()=>setShow(false)} appearance="subtle">
                    {t('Go back')}
                </SecondaryButton>
            </Modal.Footer>
        </Modal>
        </>)
}