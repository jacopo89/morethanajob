import {Form, Schema, SelectPicker} from "rsuite";
import TextField from "../../Login/Components/TextField";
import {dataLanguage} from "../../selectData";
import React from "react";

const { StringType, NumberType, DateType } = Schema.Types;

export const projectModel = Schema.Model({
    title: StringType().isRequired("This field is required"),
    language: StringType().isRequired("This field is required"),
    shortDescription:StringType().isRequired("This field is required")

});

export const collaborationModel = Schema.Model({
    title: StringType().isRequired('This field is required.'),
    shortDescription: StringType().isRequired('This field is required.').maxLength(500,"No more than 500 characters"),
    description: StringType().isRequired('This field is required.').maxLength(500, "No more than 500 characters"),
    category: NumberType().isRequired('This field is required.'),
    country: StringType().isRequired('This field is required.'),
    language: StringType().isRequired('This field is required.'),
    contacts: StringType().isEmail().isRequired('This field is required.'),
});


export const messageLoggedModel = Schema.Model({
    message:StringType().isRequired()
})

export const messageAnonymousModel = Schema.Model({
    message:StringType().isRequired(),
    firstname:StringType().isRequired(),
    lastname:StringType().isRequired(),
    email:StringType().isEmail().isRequired()
})


export const furnitureModel = {};


export const projectEmptyModel = {
    title:"",
    localTitle:"",
    localShortDescription:"",
    shortDescription:"",
    longDescription:"",
    localLongDescription:"",
    links:[],
    contacts:[],
    positions:[],
    projectPartnersRelations:[],
    collaborations:[]
}


