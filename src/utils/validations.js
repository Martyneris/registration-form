export function isFieldValid(value, title) {
    let fieldValid = true;

    if (!value) {
        fieldValid = false;
    } else {
        // declare validations here
        switch (title) {
            case 'email':
                fieldValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(value);
                break;
            case 'address':
                fieldValid = value.length > 6;
                break;
            case 'firstName':
                fieldValid = value.length >= 3;
                break;
            case 'lastName':
                fieldValid = value.length >= 3;
                break;
            case 'country':
                fieldValid = value.length >= 2;
                break;
            case 'city':
                fieldValid = value.length >= 2;
                break;
            case 'house':
                fieldValid = value.length >= 2;
                break;
            case 'postcode':
                fieldValid = value.length >= 2;
                break;
            default:
                break;
        }
    }
    return fieldValid;
}