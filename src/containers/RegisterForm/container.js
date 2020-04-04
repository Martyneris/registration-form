import React from 'react';
import { addUser } from '../../state/actions/usersActions';
import { connect } from 'react-redux';
import Title from '../../components/texts/Title';
import Button from '../../components/buttons/Button';
// import Popup from './Popup';
import { isFieldValid } from '../../utils/validations';
import LocationAutocomplete from 'location-autocomplete';
import RegularInput from '../../components/inputs/regularInput';
import SmallerInput from '../../components/inputs/smallerInput'

class RegisterForm extends React.Component {


    state = {
        loading: false,
        active: false,
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        country: '',
        city: '',
        postcode: '',
        house: '',
        formValid: false
    };

    handleInput = (e, title) => {
        this.setState({ [title]: e.target.value, formValid: true })
    };

    handleDropdownSelect = (e, title) => {
        const { formatted_address } = e.autocomplete.getPlace()
        isFieldValid(formatted_address, "address") ?
            this.setState({ [title]: formatted_address, formValid: true })
            :
            this.setState({ [title]: formatted_address, formValid: false })
    }

    register = () => {
        const { formValid, firstName, lastName, email, address, country, city, house, postcode } = this.state;
        const { addUser } = this.props;
        if (formValid && firstName && lastName && email && address && country && city && house && postcode) {
            addUser({
                firstName,
                lastName,
                email,
                address,
                country,
                city,
                house,
                postcode
            })
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                address: '',
                country: '',
                city: '',
                house: '',
                postcode: '',
                formValid: false,
                fieldsError: false
            })
        } else {
            this.setState({ fieldsError: true })
        }
    }


    render() {

        const {
            firstName,
            lastName,
            email,
            country,
            city,
            address,
            postcode,
            house,
            fieldsError
        } = this.state;

        const regularInputFields = [
            { title: "firstName", value: firstName, placeholder: 'First name' },
            { title: "lastName", value: lastName, placeholder: 'Last name' },
            { title: "email", value: email, placeholder: 'your@email.com' },
            // { title: "address", value: address, placeholder: 'Address' }
        ]

        const smallerInputFields = [
            { title: "country", value: country, placeholder: 'Country' },
            { title: "city", value: city, placeholder: 'City' },
            { title: "house", value: house, placeholder: 'House' },
            { title: "postcode", value: postcode, placeholder: 'Postcode' }
        ]

        return (
            <div className="container">
                <div>
                    <Title text={'Registration Form'} />
                    <div className="Form">
                        {
                            regularInputFields.map((input, i) => {
                                return (
                                    <RegularInput
                                        value={input.value}
                                        placeholder={input.placeholder}
                                        title={input.title}
                                        key={i}
                                        onChange={(e) => this.handleInput(e, input.title)}
                                    />
                                )
                            })
                        }
                        <LocationAutocomplete
                            name="venue"
                            placeholder="Address"
                            className="input"
                            value={address}
                            googleAPIKey="AIzaSyB2XlJYSmbHgzGQlzAE1hPt_rMKnCX1Ghg"
                            onChange={(e) => this.handleInput(e, "address")}
                            onDropdownSelect={(e) => this.handleDropdownSelect(e, "address")}
                        />
                        <div className="smaller-inputs-container">
                            {
                                smallerInputFields.map((input, i) => {
                                    return (
                                        <SmallerInput
                                            value={input.value}
                                            placeholder={input.placeholder}
                                            title={input.title}
                                            key={i}
                                            onChange={(e) => this.handleInput(e, input.title)}
                                        />
                                    )
                                })
                            }
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                            <p className={fieldsError ? 'error-text-shake' : 'error-text'}>Please fill out all fields</p>
                        </div>
                        <Button label={'Register'} onPress={() => this.register()} />
                    </div>
                </div>
            </div >
        )
    }
};

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { addUser })(RegisterForm)