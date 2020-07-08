import {Icon, IconButton, Input, Table} from "rsuite";
import React, {useEffect, useState} from "react";

const { Column, HeaderCell, Cell, Pagination } = Table;

const renderRowExpandedDefault = rowData => {
    return (
        <div>
            <div
                style={{
                    width: 60,
                    height: 60,
                    float: 'left',
                    marginRight: 10,
                    background: '#eee'
                }}
            >
                <img src={rowData.avartar} style={{ width: 60 }} />
            </div>
            <p>{rowData.email}</p>
            <p>{rowData.date}</p>
        </div>
    );
}

const renderDefaultValue = (data)=> <div> No detail has been specified for this view </div>

export function GenericTable({
                                 expandable = false, sortable = false, resizable = false,
                                 filterable = false, modelData, propData, rowKey, rowClickHandler,
                                 renderRowExpanded = renderDefaultValue }){

    const ExpandCell = ({ rowData, dataKey, expandedRowKeys, onChange, ...props }) => (
        <Cell {...props}>
            <IconButton
                size="xs"
                appearance="subtle"
                onClick={() => {
                    onChange(rowData);
                }}
                icon={
                    <Icon
                        icon={
                            expandedRowKeys.some(key => key === rowData[rowKey])
                                ? 'minus-square-o'
                                : 'plus-square-o'
                        }
                    />
                }
            />
        </Cell>
    );

    useEffect(()=>{setData(propData)},[propData]);

    const initialFilters = modelData.map((model)=> { return {key: model.dataKey, value: "" }});
    const [data, setData] = useState(propData);
    const [properties, setProperties] = useState({expandedRowKeys:[], filters:initialFilters});
    const [loading, setLoading] = useState(false);

    const handleExpanded = (rowData, dataKey)=> {
        const { expandedRowKeys } = properties;
        let open = false;
        const nextExpandedRowKeys = [];
        expandedRowKeys.forEach(key => {
            if (key === rowData[rowKey]) {
                open = true;
            } else {
                nextExpandedRowKeys.push(key);
            }
        });

        if (!open) {
            nextExpandedRowKeys.push(rowData[rowKey]);
        }
        const newProperties = Object.assign({}, properties);
        newProperties.expandedRowKeys = nextExpandedRowKeys;
        setProperties(newProperties);
    }

    const handleFilter = (filterKey, filterValue)=>{

        let newProperties = Object.assign({}, properties);
        newProperties.filters.map((filter)=>{
            if(filter.key === filterKey){
                filter.value = filterValue;
            }
            return filter;
        });

        setProperties(newProperties);

    }

    const getData = ()  =>{
        const {sortColumn, sortType, filters } = properties;

        let newData = Object.assign([], data);

        if (sortColumn && sortType) {
            return newData.sort((a, b) => {
                let x = a[sortColumn];
                let y = b[sortColumn];
                if (typeof x === 'string') {
                    x = x.charCodeAt();
                }
                if (typeof y === 'string') {
                    y = y.charCodeAt();
                }
                if (sortType === 'asc') {
                    return x - y;
                } else {
                    return y - x;
                }
            });
        }

        if (filters){
            newData = newData.filter((item)=>{
                const reducer = (accumulator, currentValue) => accumulator*currentValue;
                const filtersBoolean = filters.map((filter)=>{
                    if(filter.value!==""){
                        return item[filter.key].toLowerCase().includes(filter.value.toLowerCase());
                    }else{
                        return true;
                    }
                });
                return filtersBoolean.reduce(reducer);
            })
        }

        return newData;
    }

    const handleSortColumn = (sortColumn, sortType)=> {
        setLoading(true);

        setTimeout(() => {
            const newProperties = Object.assign({}, properties);
            newProperties.sortColumn = sortColumn;
            newProperties.sortType = sortType;
            setProperties(newProperties);
            setLoading(false);
        }, 500);
    }


    let tableBasicAttributes = {
        height:400,
        affixHeader:true,
        headerHeight:70,
        autoHeight: true,
        data:data,
        rowKey:rowKey,
        onRowClick: data => {if(rowClickHandler){rowClickHandler(data)}}
    }

    modelData = modelData.map(modelElement => {return {...modelElement, width:200}})


    const {expandedRowKeys, sortType, sortColumn} = properties;
    if(expandable) {
        tableBasicAttributes = {
            ...tableBasicAttributes,
            expandedRowKeys: expandedRowKeys,
            renderRowExpanded: renderRowExpanded
        }
    }
    if(sortable){
        tableBasicAttributes = {...tableBasicAttributes,
            sortColumn: sortColumn,
            sortType: sortType,
            onSortColumn:handleSortColumn,
            loading: loading,
            data: getData()
        }
    }
    if(filterable){
        tableBasicAttributes = {...tableBasicAttributes,
            loading: loading,
            data: getData()
        }

        modelData = modelData.map((modelElement)=>{return  {...modelElement, handleFilter: handleFilter}});

    }
    if(resizable){
        modelData = modelData.map((modelElement)=>{return  {...modelElement, resizable:true}});
    }


    const columns = modelData.map((modelElement)=> CustomColumn(modelElement));

    return (
        <Table
            {...tableBasicAttributes}

        >
            { expandable && <Column width={70} align="center">
                <HeaderCell>#</HeaderCell>
                <ExpandCell onChange={handleExpanded} expandedRowKeys={expandedRowKeys} onClick={(event)=>event.stopPropagation()} dataKey="id" />

            </Column>}

            {columns}
        </Table>
    );
}


function CustomColumn({label, dataKey, render, handleFilter, filterable, ...rest }){

    const dataKeyElement = dataKey && <Cell dataKey={dataKey} />
    const renderElement = render && <Cell dataKey={dataKey}>
        {rowData => { return render(rowData)
        }}
    </Cell>

    const cell = dataKeyElement || renderElement;

    return (<Column key={dataKey} {...rest}>
        <HeaderCell>{filterable&& <Input type="text" onChange={(value)=> handleFilter(dataKey, value)} onClick={(e)=>{e.stopPropagation()}} />}<span>{label}</span></HeaderCell>
        {cell}


    </Column>)

}

