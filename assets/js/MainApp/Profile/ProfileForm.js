import {Button, Col, Form, Grid, Row, SelectPicker, Uploader} from "rsuite";
import TextField from "../../Login/Components/TextField";
import {dataCountry} from "../../selectData";
import {bordeaux} from "../../styledComponents/CustomComponents";
import React from "react";

export default function ProfileForm({formValue, setFormValue}) {
    return <Form fluid autoComplete="off" formValue={formValue} onChange={setFormValue}>
        <Grid fluid>
            <Row className="show-grid">
                <Col xs={24}> <TextField name="name" label={t('Society Name')} /></Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <TextField style={{width:"100%"}} name="language" label={t('Language')} accepter={SelectPicker} data={[]} />
                </Col>
                <Col xs={12}>
                    <TextField style={{width:"100%"}} name="country" label={t('Country')} accepter={SelectPicker} data={dataCountry} />
                </Col>
            </Row>
            <Row>
                <Col xs={24}>
                    <TextField  name="description" label={t('Society Description')} componentClass="textarea" />
                </Col>
                <Col xs={24}>
                    <TextField label={t('Local Language description')} name="localDescription" componentClass="textarea" />
                </Col>
            </Row>
            <Row>
                <Col xs={12}> <TextField style={{width:"100%"}} name="website" label={t('Website')} /></Col>
                <Col xs={12}><TextField style={{width:"100%"}} name="address" label={t('Address')} /></Col>
            </Row>
            <Row>
                <Col xs={12} ><TextField style={{width:"100%"}} name="telephone" label={t('Telephone')} /></Col>
                <Col xs={12} ><TextField style={{width:"100%"}} name="email" label={t('Email')} /></Col>
            </Row>
            <Row>
                <Col xs={8} ><TextField style={{width:"100%"}} name="facebook" label={t('Facebook')} /></Col>
                <Col xs={8} > <TextField style={{width:"100%"}} name="linkedin" label={t('Linkedin')} /></Col>
                <Col xs={8} ><TextField style={{width:"100%"}} name="twitter" label={t('Twitter')} /></Col>
            </Row>
            <Row>
                <Col xs={24}>
                    {t('Documents')}
                    <Uploader
                        action="//jsonplaceholder.typicode.com/posts/"
                        onChange={handleFileChange}
                        fileList={fileList}
                        dragable  autoUpload={false} multiple={false}>
                        <div style={{lineHeight:10}}>{t('clickdrag')}</div>
                    </Uploader>
                    <Button onClick={submitFiles}>
                        {t('Start Upload')}
                    </Button>
                </Col>
            </Row>
        </Grid>
        {isOwner && editButton}
        <Button style={{float:"right", backgroundColor:bordeaux, color:"white"}} onClick={()=>saveProfile()}> {t('Save Profile')} </Button>
    </Form>

}
