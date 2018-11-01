import React, { Component } from 'react'
import { TextInput } from '@coveainsurance/ui-input-text/dist/TextInput';

class CustomerDetailsForm extends Component {
    state = { 
        customer: {
            id: "12345",
            name: "Chris Moran",
            telephone: "07756162611",
            email: "chris.moran@coveainsurance.com",
            existing: true
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id)
        if (id) {
            const customer = {...this.state.customer};
            customer.id = id;
            console.log(customer)
            this.setState({ customer });
        }
    };

    getCustomer = () => {
        // get the customer
    };

    render() { 

        const { id, name, telephone, email, existing } = this.state.customer;
        
        return ( 
            <React.Fragment>
                <div className="wrapper" style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}>
                    <form>
                        <TextInput
                            label="ID"
                            name="id"
                            value={id}
                            readOnly={existing}
                        />
                        <TextInput
                            label="Name"
                            name="name"
                            value={name}
                            readOnly={existing}
                        />
                        <TextInput
                            label="Telephone"
                            name="telephone"
                            value={telephone}
                            readOnly={existing}
                        />
                        <TextInput
                            label="Email"
                            name="email"
                            value={email}
                            readOnly={existing}
                        />
                    </form>
                </div>
            </React.Fragment>
         );
    }
}
 
export default CustomerDetailsForm;