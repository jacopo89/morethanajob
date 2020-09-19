import {Schema} from "rsuite";

const { StringType, NumberType } = Schema.Types;

export const projectModel = {};
export const collaborationModel = Schema.Model({
    title: StringType().isRequired('This field is required.'),
    shortDescription: StringType().isRequired('This field is required.').maxLength(500),
    description: StringType().maxLength(500),
    category: NumberType().isRequired('This field is required.'),
    country: StringType().isRequired('This field is required.'),
    language: StringType().isRequired('This field is required.'),
    contacts: StringType().isEmail()
});


export const furnitureModel = {};