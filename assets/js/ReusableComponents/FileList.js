
import React from "react";
import {FlexboxGrid, List} from "rsuite";

export default function FileList({data}){

    const styleCenter = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60px'
    };
    const slimText = {
        fontSize: '0.666em',
        color: '#97969B',
        fontWeight: 'lighter',
        paddingBottom: 5
    };

    const titleStyle = {
        paddingBottom: 5,
        whiteSpace: 'nowrap',
        fontWeight: 500
    };

    const dataStyle = {
        fontSize: '1.2em',
        fontWeight: 500
    };

    return <>
        <List hover>
            {data.map((item,index)=>
                <List.Item key={item['filename']} index={index}>
                    <FlexboxGrid>
                        <FlexboxGrid.Item colspan={6} style={{
                            ...styleCenter,
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            overflow: 'hidden'
                        }}>
                            <div style={titleStyle}>{item['filename']}</div>
                        </FlexboxGrid.Item>

                        <FlexboxGrid.Item colspan={4} style={{
                            ...styleCenter
                        }}>
                            <a target="__blank"  href={item["url"]}>View</a>
                            <span style={{ padding: 5 }}>|</span>
                            <a href={item["url"]} download>Download</a>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </List.Item>
            )}
        </List>
        </>


}
