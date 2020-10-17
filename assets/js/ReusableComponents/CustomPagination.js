import React, {useState} from "react";
import {Pagination, Toggle} from "rsuite";

export default function CustomPagination() {


    const [state, setState] = useState({
        prev: true,
        next: true,
        first: true,
        last: true,
        ellipsis: true,
        boundaryLinks: true,
        activePage:1
    })

    const handleSelect = (eventKey) => {
        setState({...state, activePage: eventKey});
    }

    const handleSetProp = (key, value)=> {
        setState({...state, [key]: value });
    }


    return (
        <div>
            <Pagination
                {...state}
                pages={30}
                maxButtons={5}
                activePage={state.activePage}
                onSelect={handleSelect}
            />
        </div>
    );

}

