import {Schema} from "rsuite";

const { StringType, NumberType } = Schema.Types;

export const projectModel = Schema.Model({
    title: StringType().isRequired("This field is required"),
    shortDescription:StringType().isRequired("This field is required")

});

export const collaborationModel = Schema.Model({
    title: StringType().isRequired('This field is required.'),
    shortDescription: StringType().isRequired('This field is required.').maxLength(500),
    description: StringType().isRequired('This field is required.').maxLength(500),
    category: NumberType().isRequired('This field is required.'),
    country: StringType().isRequired('This field is required.'),
    language: StringType().isRequired('This field is required.'),
    contacts: StringType().isEmail().isRequired('This field is required.')
});


export const furnitureModel = {};