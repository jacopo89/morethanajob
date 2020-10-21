import {Form, Schema, SelectPicker} from "rsuite";
import TextField from "../../Login/Components/TextField";
import {dataLanguage} from "../../selectData";
import React from "react";

const { StringType, NumberType, DateType } = Schema.Types;

export const projectModel = Schema.Model({
    title: StringType().isRequired("This field is required"),
    language: StringType().isRequired("This field is required"),
    shortDescription:StringType().isRequired("This field is required").maxLength(500,"No more than 500 characters"),
    localShortDescription:StringType().isRequired("This field is required").maxLength(500,"No more than 500 characters"),
    longDescription:StringType().isRequired("This field is required").maxLength(1500,"No more than 1500 characters"),
    localLongDescription:StringType().isRequired("This field is required").maxLength(1500,"No more than 1500 characters"),
    localTitle:StringType().isRequired("This field is required"),

});

export const collaborationModel = Schema.Model({
    title: StringType().isRequired('This field is required.'),
    localLanguageTitle: StringType().isRequired('This field is required.'),
    localLanguageShortDescription: StringType().isRequired('This field is required.').maxLength(500,"No more than 500 characters"),
    localLanguageDescription: StringType().isRequired('This field is required.').maxLength(1500,"No more than 1500 characters"),
    shortDescription: StringType().isRequired('This field is required.').maxLength(500,"No more than 500 characters"),
    description: StringType().isRequired('This field is required.').maxLength(1500, "No more than 1500 characters"),
    category: NumberType().isRequired('This field is required.'),
    country: StringType().isRequired('This field is required.'),
    language: StringType().isRequired('This field is required.'),
    contacts: StringType().isEmail().isRequired('This field is required.'),
});

export const messageAnonymousModel = Schema.Model({
    message:StringType().isRequired('This field is required.'),
    firstname:StringType().isRequired('This field is required.'),
    lastname:StringType().isRequired('This field is required.'),
    email:StringType().isEmail('Insert a valid email.').isRequired('This field is required.')
})

export const categoryModel = Schema.Model({
    value:StringType().isRequired('This field is required.'),
    ar:StringType().isRequired('This field is required.'),
    en:StringType().isRequired('This field is required.'),
    it:StringType().isRequired('This field is required.'),
    gr:StringType().isRequired('This field is required.'),

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


