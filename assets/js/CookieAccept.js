import {ButtonToolbar, Notification} from "rsuite";
import useCookies from "./Backend/useCookies";
import React from 'react';
import {MainButton, SecondaryButton} from "./styledComponents/CustomComponents";
import {cookiesOptions} from "./Redux/actions";
import Cookies from "universal-cookie";
import {useHistory} from "react-router-dom";
import * as Routes from "./routes";


export default function CookieAccept(){
    const cookies = new Cookies();
    const {cookie} = useCookies();
    const history = useHistory();
    if(cookie){
        return <div/>
    }else{
        Notification.open({
            title: 'Message',
            placement:"bottomEnd",
            duration: 1000000,
            description: (
                <div>
                    <p>By visiting this website you agree that we are using cookies. Learn more about your rights and how to disable cookies by clicking the more info </p>
                    <ButtonToolbar>
                        <MainButton
                            onClick={() => {
                                cookies.set('acceptCookie', JSON.stringify(false), cookiesOptions);
                                Notification.close();
                            }}
                        >
                            Accept
                        </MainButton>
                        <MainButton
                            onClick={() => {
                                Notification.close();
                            }}
                        >
                            Reject
                        </MainButton>
                        <SecondaryButton
                            onClick={() => {
                                Notification.close();
                                history.push(Routes.privacy);
                            }}
                        >
                            More info
                        </SecondaryButton>
                    </ButtonToolbar>
                </div>
            )
        });
        return <div></div>
    }


}