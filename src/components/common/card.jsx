import React, { Component } from 'react';
import TextInput from '@coveainsurance/ui-input-text/dist/TextInput';

class Card extends Component {
    state = {  }
    render() { 
        const { label, type } = this.props;
        const cardType = `card border-${type} mb-3`;
        const { firstName, surname, telephone, email, label } = this.props;
        return (
        <div className={cardType}>
            <div className="card-header">
                <h3>{label}</h3>
            </div>
            <div className="card-body">
                <form>
                    <TextInput
                        label="First Name"
                        name="firstName"
                        defaultValue={firstName}
                    />
                    <TextInput
                        label="Surname"
                        name="surname"
                        defaultValue={surname}
                    />
                    <TextInput
                        label="Telephone"
                        name="telephone"
                        defaultValue={telephone}
                        readOnly={true}
                    />
                    <TextInput
                        label="Email"
                        name="email"
                        defaultValue={email}
                    />
                    <button className="btn btn-primary" onClick={this.updateCustomer}>Update</button>
                </form>
            </div>
        </div>
        );
    }
}
 
export default Card;