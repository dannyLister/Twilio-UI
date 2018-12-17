import React, { Component } from 'react'
import { getCustomerByTelephone, getHubspotContactByEmail } from '../services/aws.service';
import { TextInput } from '@coveainsurance/ui-input-text/dist/TextInput';
import '../styles/customerDetailsForm.css';


class CustomerDetailsForm extends Component {
    state = {
        customer: null,
        contact: null,
        error: null
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id;
        let customer, contact;
        try {
            if (id !== undefined) {
                const result = await getCustomerByTelephone(id);
                customer = result.data;
                const hubspotResult = await getHubspotContactByEmail(customer.email);
                const data = JSON.parse(hubspotResult.data);
                contact = data.properties;

                this.setState({ customer, contact });
            }
        } catch ({ response }) {
            console.log(response);
            const error = response.data;
            this.setState({ error })
        }
    };

    createCustomer = async () => {
        
    };

    updateCustomer = (e) => {
        e.preventDefault();
        
        const customer = {
            firstName: e.target.firstName.value,
            surname: e.target.surname.value,
            email: e.target.email.value,
            telephone: e.target.telephone.value
        }

        console.log(customer)

    };

    render() { 
        if (!this.state.customer && !this.state.error) {
            return (
                <React.Fragment>
                    <div className="alert alert-primary customer-wait">
                        <h1 className="saving">Waiting for next customer<span>.</span><span>.</span><span>.</span></h1>
                    </div>
                </React.Fragment>
            )
        } 
        if (this.state.error && this.state.error.status === 404) {
            return (
                <React.Fragment>
                    <div className="alert alert-primary customer-wait">
                        <h1>Customer does not exist!</h1>
                    </div>
                    <div className="row" style={{ padding: "20px"}}>
                        <div className="col">
                            <div className="card border-primary mb-3">
                                <div className="card-header">
                                    <h3>Create new customer</h3>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <TextInput
                                            label="First Name"
                                            name="firstName"
                                        />
                                        <TextInput
                                            label="Surname"
                                            name="surname"
                                        />
                                        <TextInput
                                            label="Telephone"
                                            name="telephone"
                                            defaultValue={this.props.match.params.id}
                                            readOnly={true}
                                        />
                                        <TextInput
                                            label="Email"
                                            name="email"
                                        />
                                        <button className="btn btn-primary" onClick={this.createCustomer}>Create</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
        else {
            const { telephone, email, firstName, surname } = this.state.customer;
            const { firstname: hubspotFistName, email: hubspotEmail, lastname: hubspotSurname, phone: hubspotTelephone } = this.state.contact;
            return ( 
                <React.Fragment>
                    <div className="alert alert-primary customer-wait">
                        <h1>Customer Details Found</h1>
                    </div>
                    <div className="row" style={{ padding: "20px"}}>
                        <div className="col-md-6">
                            <div className="card border-primary mb-3">
                                <div className="card-header">
                                    <h3>Dynamo DB Entry</h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.updateCustomer}>
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
                                        <input type="submit" className="btn btn-primary" value="Update"/>
                                    </form>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card border-warning mb-3">
                                    <div className="card-header">
                                        <h3>Hubspot Entry</h3>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <TextInput
                                                label="First Name"
                                                name="hubspotFirstName"
                                                defaultValue={hubspotFistName.value}
                                                readOnly={true}
                                            />
                                            <TextInput
                                                label="Surname"
                                                name="hubspotSurname"
                                                defaultValue={hubspotSurname.value}
                                                readOnly={true}
                                            />
                                            <TextInput
                                                label="Telephone"
                                                name="hubspotTelephone"
                                                defaultValue={hubspotTelephone.value}
                                                readOnly={true}
                                            />
                                            <TextInput
                                                label="Email"
                                                name="hubspotEmail"
                                                defaultValue={hubspotEmail.value}
                                                readOnly={true}
                                            />
                                        </form>
                                    </div>
                                </div>
                            </div>
                    </div>
                </React.Fragment>
             );
        }



    }
}
 
export default CustomerDetailsForm;