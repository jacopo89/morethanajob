import {Col, Form, Grid, Radio, Schema, SelectPicker} from "rsuite";
import {FlexAroundDiv, FormRow, SaveButton} from "../styledComponents/CustomComponents";
import TextField from "../Login/Components/TextField";
import React, {useState} from "react";
import {dataCountry} from "../selectData";
import {useTranslation} from "react-i18next";
import {usePostQuestionario} from "../Backend/hooks/useCollaborations";
import * as Routes from "../routes";
import {useHistory} from "react-router-dom";

const { StringType, NumberType, DateType } = Schema.Types;

export default function Questionario(){
    const {t} = useTranslation();
    const history = useHistory();

    const [response, postQuestionario] = usePostQuestionario();

    const model = Schema.Model({
        country: StringType().isRequired("This field is required"),
        type:StringType().isRequired("This field is required"),
        q1: NumberType().isRequired("This field is required"),
        q2: NumberType().isRequired("This field is required"),
        q3: NumberType().isRequired("This field is required"),
        q4: NumberType().isRequired("This field is required"),
        q5: NumberType().isRequired("This field is required"),
        q6: NumberType().isRequired("This field is required"),
        q7: NumberType().isRequired("This field is required"),
        q8: NumberType().isRequired("This field is required"),
        q9: NumberType().isRequired("This field is required"),
        q10: NumberType().isRequired("This field is required"),
        q11: NumberType().isRequired("This field is required"),
    });

    const [formValue, setFormValue] = useState({q1:1, q2:1, q3:1, q4:1, q5:1, q6:1, q7:1, q8:1, q9:1, q10:1, q11:1, type:"SSE Actor"})

    const onSubmitHandler = () =>{
        const formData = new FormData();
        Object.keys(formValue).forEach((key)=>  { formData.append(key,JSON.stringify(formValue[key]));});
        postQuestionario(formData, {successCallback: () => history.push(Routes.dashboardPage)} );
    }

    return <Grid fluid>
        <section>
            <Form  fluid model={model} formValue={formValue} onChange={setFormValue} onSubmit={onSubmitHandler}>
                <h3>User data</h3>
                <FormRow>
                    <Col xs={24} md={12}>
                        <TextField label={t("Name")} name="name" type="text" />
                    </Col>
                    <Col xs={24} md={12}>
                        <TextField label={t("Surname")} name="surname" type="text" />
                    </Col>
                </FormRow>
                <FormRow>
                    <Col xs={24}>
                        <TextField width="100%" label={t('Country')} name="country" accepter={SelectPicker} data={dataCountry}/>
                    </Col>
                </FormRow>
                <FormRow>
                    <Col xs={24} md={12}>
                        <h5>{t("Who are you?")}</h5>
                        <Radio onChange={()=>{setFormValue({...formValue, type:"SSE Actor"})}} checked={formValue.type==="SSE Actor"} name="type" value={"SSE Actor"}> {t("SSE Actor")}</Radio>
                        <Radio onChange={()=>{setFormValue({...formValue, type:"Public Administration"})}} checked={formValue.type==="Public Administration"} name="type" value={"Public Administration"}> {t("Public Administration")}</Radio>
                        <Radio onChange={()=>{setFormValue({...formValue, type:"Citizen"})}} checked={formValue.type==="Citizen"} name="type" value={"Citizen"}>{t("Citizen")}</Radio>
                    </Col>
                </FormRow>
                <h3>{t("Portal Evaluation")}</h3>
                <FormRow>
                    <Col xs={24}>
                        <h5>{t("The portal is easy to navigate")}</h5>
                        <FlexAroundDiv style={{width:"100%"}}>
                            <Radio onChange={()=>{setFormValue({...formValue, q1:1})}} checked={formValue.q1===1} name="q1" value={1}> 1 {t("(Very poor)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q1:2})}} checked={formValue.q1===2} name="q1" value={2}> 2 {t("(Poor)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q1:3})}} checked={formValue.q1===3} name="q1" value={3}> 3 {t("(Fair)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q1:4})}} checked={formValue.q1===4} name="q1" value={4}> 4 {t("(Good)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q1:5})}} checked={formValue.q1===5} name="q1" value={5}> 5 {t("(Very good)")}</Radio>
                        </FlexAroundDiv>

                    </Col>
                </FormRow>
                <FormRow>
                    <Col xs={24}>
                        <h5>{t("The portal is easily accessible from mobile devices")}</h5>
                        <FlexAroundDiv style={{width:"100%"}}>
                            <Radio onChange={()=>{setFormValue({...formValue, q2:1})}} checked={formValue.q2===1} name="q2" value={1}> 1 {t("(Very poor)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q2:2})}} checked={formValue.q2===2} name="q2" value={2}> 2 {t("(Poor)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q2:3})}} checked={formValue.q2===3} name="q2" value={3}> 3 {t("(Fair)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q2:4})}} checked={formValue.q2===4} name="q2" value={4}> 4 {t("(Good)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q2:5})}} checked={formValue.q2===5} name="q2" value={5}> 5 {t("(Very good)")}</Radio>
                        </FlexAroundDiv>
                    </Col>
                </FormRow>
                <FormRow>
                    <Col xs={24}>
                        <h5>{t("The portal layout is appealing")}</h5>
                        <FlexAroundDiv style={{width:"100%"}}>
                            <Radio onChange={()=>{setFormValue({...formValue, q3:1})}} checked={formValue.q3===1} name="q3" value={1}> 1 {t("(Very poor)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q3:2})}} checked={formValue.q3===2} name="q3" value={2}> 2 {t("(Poor)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q3:3})}} checked={formValue.q3===3} name="q3" value={3}> 3 {t("(Fair)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q3:4})}} checked={formValue.q3===4} name="q3" value={4}> 4 {t("(Good)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q3:5})}} checked={formValue.q3===5} name="q3" value={5}> 5 {t("(Very good)")}</Radio>
                        </FlexAroundDiv>
                    </Col>
                </FormRow>
                <FormRow>
                    <Col xs={24}>
                        <h5>{t("The categories on the portal are clearly identifiable")}</h5>
                        <FlexAroundDiv style={{width:"100%"}}>
                            <Radio onChange={()=>{setFormValue({...formValue, q4:1})}} checked={formValue.q4===1} name="q4" value={1}> 1 {t("(Very poor)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q4:2})}} checked={formValue.q4===2} name="q4" value={2}> 2 {t("(Poor)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q4:3})}} checked={formValue.q4===3} name="q4" value={3}> 3 {t("(Fair)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q4:4})}} checked={formValue.q4===4} name="q4" value={4}> 4 {t("(Good)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q4:5})}} checked={formValue.q4===5} name="q4" value={5}> 5 {t("(Very good)")}</Radio>
                        </FlexAroundDiv>
                    </Col>
                </FormRow>
                <FormRow>
                    <Col xs={24}>
                        <h5>{t("The different sections of the portal are clearly defined")}</h5>
                        <FlexAroundDiv style={{width:"100%"}}>
                            <Radio onChange={()=>{setFormValue({...formValue, q5:1})}} checked={formValue.q5===1} name="q5" value={1}> 1 {t("(Very poor)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q5:2})}} checked={formValue.q5===2} name="q5" value={2}> 2 {t("(Poor)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q5:3})}} checked={formValue.q5===3} name="q5" value={3}> 3 {t("(Fair)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q5:4})}} checked={formValue.q5===4} name="q5" value={4}> 4 {t("(Good)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q5:5})}} checked={formValue.q5===5} name="q5" value={5}> 5 {t("(Very good)")}</Radio>
                        </FlexAroundDiv>
                    </Col>
                </FormRow>
                <FormRow>
                    <Col xs={24}>
                        <h5>{t("It is easy to search for services and opportunities that I am looking for")}</h5>
                        <FlexAroundDiv style={{width:"100%"}}>
                            <Radio onChange={()=>{setFormValue({...formValue, q6:1})}} checked={formValue.q6===1} name="q6" value={1}> 1 {t("(Very poor)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q6:2})}} checked={formValue.q6===2} name="q6" value={2}> 2 {t("(Poor)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q6:3})}} checked={formValue.q6===3} name="q6" value={3}> 3 {t("(Fair)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q6:4})}} checked={formValue.q6===4} name="q6" value={4}> 4 {t("(Good)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q6:5})}} checked={formValue.q6===5} name="q6" value={5}> 5 {t("(Very good)")}</Radio>
                        </FlexAroundDiv>
                    </Col>
                </FormRow>
                <FormRow>
                    <Col xs={24}>
                        <h5>{t("It is easy to find other organisations I am looking for")}</h5>
                        <FlexAroundDiv style={{width:"100%"}}>
                            <Radio onChange={()=>{setFormValue({...formValue, q7:1})}} checked={formValue.q7===1} name="q7" value={1}> 1 {t("(Very poor)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q7:2})}} checked={formValue.q7===2} name="q7" value={2}> 2 {t("(Poor)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q7:3})}} checked={formValue.q7===3} name="q7" value={3}> 3 {t("(Fair)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q7:4})}} checked={formValue.q7===4} name="q7" value={4}> 4 {t("(Good)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q7:5})}} checked={formValue.q7===5} name="q7" value={5}> 5 {t("(Very good)")}</Radio>
                        </FlexAroundDiv>
                    </Col>
                </FormRow>
                <FormRow>
                    <Col xs={24}>
                        <h5>{t("The content uploaded in the portal is clear and complete")}</h5>
                        <FlexAroundDiv style={{width:"100%"}}>
                            <Radio onChange={()=>{setFormValue({...formValue, q8:1})}} checked={formValue.q8===1} name="q8" value={1}> 1 {t("(Very poor)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q8:2})}} checked={formValue.q8===2} name="q8" value={2}> 2 {t("(Poor)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q8:3})}} checked={formValue.q8===3} name="q8" value={3}> 3 {t("(Fair)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q8:4})}} checked={formValue.q8===4} name="q8" value={4}> 4 {t("(Good)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q8:5})}} checked={formValue.q8===5} name="q8" value={5}> 5 {t("(Very good)")}</Radio>
                        </FlexAroundDiv>
                    </Col>
                </FormRow>
                <FormRow>
                    <Col xs={24}>
                        <h5>{t("The content uploaded is relevant to my needs")}</h5>
                        <FlexAroundDiv style={{width:"100%"}}>
                            <Radio onChange={()=>{setFormValue({...formValue, q9:1})}} checked={formValue.q9===1} name="q9" value={1}> 1 {t("(Very poor)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q9:2})}} checked={formValue.q9===2} name="q9" value={2}> 2 {t("(Poor)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q9:3})}} checked={formValue.q9===3} name="q9" value={3}> 3 {t("(Fair)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q9:4})}} checked={formValue.q9===4} name="q9" value={4}> 4 {t("(Good)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q9:5})}} checked={formValue.q9===5} name="q9" value={5}> 5 {t("(Very good)")}</Radio>
                        </FlexAroundDiv>
                    </Col>
                </FormRow>
                <FormRow>
                    <Col xs={24}>
                        <h5>{t("The portal facilitates the communication with other registered actors")}</h5>
                        <FlexAroundDiv style={{width:"100%"}}>
                            <Radio onChange={()=>{setFormValue({...formValue, q10:1})}} checked={formValue.q10===1} name="q10" value={1}> 1 {t("(Very poor)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q10:2})}} checked={formValue.q10===2} name="q10" value={2}> 2 {t("(Poor)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q10:3})}} checked={formValue.q10===3} name="q10" value={3}> 3 {t("(Fair)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q10:4})}} checked={formValue.q10===4} name="q10" value={4}> 4 {t("(Good)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q10:5})}} checked={formValue.q10===5} name="q10" value={5}> 5 {t("(Very good)")}</Radio>
                        </FlexAroundDiv>
                    </Col>
                </FormRow>
                <FormRow>
                    <Col xs={24}>
                        <h5>{t("I am overall satisfied in the use of the portal")}</h5>
                        <FlexAroundDiv style={{width:"100%"}}>
                            <Radio onChange={()=>{setFormValue({...formValue, q11:1})}} checked={formValue.q11===1} name="q11" value={1}> 1 {t("(Very poor)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q11:2})}} checked={formValue.q11===2} name="q11" value={2}> 2 {t("(Poor)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q11:3})}} checked={formValue.q11===3} name="q11" value={3}> 3 {t("(Fair)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q11:4})}} checked={formValue.q11===4} name="q11" value={4}> 4 {t("(Good)")}</Radio>
                            <Radio onChange={()=>{setFormValue({...formValue, q11:5})}} checked={formValue.q11===5} name="q11" value={5}> 5 {t("(Very good)")}</Radio>
                        </FlexAroundDiv>
                    </Col>
                </FormRow>
                <FormRow>
                    <Col xs={24}>
                        <h5>{t("Please, add here any further comment you might have")}</h5>
                        <TextField name="comments" componentClass="textarea" />
                    </Col>
                </FormRow>
                <FlexAroundDiv style={{width:"100%"}}>
                    <SaveButton type="submit">Send</SaveButton>
                </FlexAroundDiv>

            </Form>
        </section>


    </Grid>
}
