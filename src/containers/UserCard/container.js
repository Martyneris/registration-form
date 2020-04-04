import React from 'react';
import { updateUser, removeUser } from '../../state/actions/usersActions';
import { connect } from 'react-redux';
import Title from '../../components/texts/Title';
import Button from '../../components/buttons/Button';
import { isFieldValid } from '../../utils/validations';
import LocationAutocomplete from 'location-autocomplete';
import RegularInput from '../../components/inputs/regularInput';
import SmallerInput from '../../components/inputs/smallerInput'

class UserCard extends React.Component {

    state = this.props.user;


    handleInput = (e, title) => {
        this.setState({ [title]: e.target.value })
    };

    handleDropdownSelect = (e, title) => {
        const { formatted_address } = e.autocomplete.getPlace()
        isFieldValid(formatted_address, "address") ?
            this.setState({ [title]: formatted_address })
            :
            this.setState({ [title]: formatted_address })
    }

    saveChanges = (key) => {
        const { firstName, lastName, email, address, country, city, house, postcode } = this.state;
        const { updateUser } = this.props;
        updateUser(
            {
                firstName,
                lastName,
                email,
                address,
                country,
                city,
                house,
                postcode
            },
            key
        )
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            country: '',
            city: '',
            house: '',
            postcode: ''
        })
    }


    render() {

        const { user, removeUser, keyId } = this.props

        const {
            firstName,
            lastName,
            email,
            country,
            city,
            address,
            postcode,
            house,
            drawerOpen
        } = this.state;

        const regularInputFields = [
            { title: "firstName", value: firstName ? firstName : user.firstName, placeholder: 'First name' },
            { title: "lastName", value: lastName ? lastName : user.lastName, placeholder: 'Last name' },
            { title: "email", value: email ? email : user.email, placeholder: 'your@email.com' },
        ]

        const smallerInputFields = [
            { title: "country", value: country ? country : user.country, placeholder: 'Country' },
            { title: "city", value: city ? city : user.city, placeholder: 'City' },
            { title: "house", value: house ? house : user.house, placeholder: 'House' },
            { title: "postcode", value: postcode ? postcode : user.postcode, placeholder: 'Postcode' }
        ]

        return (
            <div className="container"
                style={{ display: 'flex', flexDirection: 'column', border: '1px solid #EDECFD', minWidth: '462px' }}
            >
                <Title
                    text={user.firstName + " " + user.lastName}
                    onClick={() => this.setState({ drawerOpen: !drawerOpen })}
                />
                {
                    drawerOpen ?
                        <div className="Form" >
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <span
                                    onClick={() => removeUser(keyId)}
                                    style={{ color: 'red', fontWeight: 'bold', fontSize: '20px', cursor: 'pointer' }}
                                >X</span>
                            </div>
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
                                value={address ? address : user.address}
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
                            <Button
                                label={'Save changes'}
                                onPress={() => this.saveChanges(keyId)}
                            />
                        </div>
                        :
                        <div></div>
                }

            </div >
        )
    }
};

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { updateUser, removeUser })(UserCard)