import React, {useEffect, useState} from "react";
import { Button, ButtonToolbar, Drawer} from "rsuite";
import {GenericTable} from "./GenericTable";


export function TablePanelDetail({rowKey ='id', modelData, data, panelDetail, renderRowExpanded}){

    const [show, setShow] = useState(false);
    const [drawerData, setDrawerData] = useState(null);
    const close= ()=> {
        setDrawerData(null);
        setShow(false)

    }
    const toggleDrawer=(data)=> {
        setDrawerData(data);
        setShow(true);
    }

    const form = panelDetail(drawerData);

    return (<>
        <GenericTable renderRowExpanded={renderRowExpanded}  rowClickHandler={toggleDrawer} propData={data} modelData={modelData} resizable={true} expandable={true} rowKey={rowKey}/>
        <DrawerPanel show={show} close={close} body={form} />
    </>);

}


function DrawerPanel({show, close, body}){



    return (
        <div>
            <Drawer
                show={show}
                onHide={close}
            >
                <Drawer.Header>
                    <Drawer.Title>Drawer Title</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                    {body}
                </Drawer.Body>
                <Drawer.Footer>
                </Drawer.Footer>
            </Drawer>
        </div>
    );

}
