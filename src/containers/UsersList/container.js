import React from 'react';
import { removeAllUsers } from '../../state/actions/usersActions';
import { connect } from 'react-redux';
import Title from '../../components/texts/Title';
import UserCard from '../UserCard/container'
import Button from '../../components/buttons/Button';

class UsersList extends React.Component {

    render() {
        const { users, removeAllUsers } = this.props
        return (
            users.length ?
                <div className="container">
                    <div>
                        <Title text={'Registered users'} />
                        {
                            users.map((user, i) => {
                                return (
                                    <UserCard
                                        keyId={i}
                                        user={user}
                                    />
                                )
                            })
                        }

                        <Button
                            label={'Delete Users'}
                            style={{ background: 'red' }}
                            onPress={() => removeAllUsers()}
                        />
                    </div>
                </div>
                :
                <div></div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { removeAllUsers })(UsersList)