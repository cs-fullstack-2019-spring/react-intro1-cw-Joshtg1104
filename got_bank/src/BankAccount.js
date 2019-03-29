import React, { Component } from 'react';

class BankAccount extends Component{
    render(){
        return(
            <div>
                {/*Uses properties to call the customer name when returning the sentence*/}
                <h2>Welcome {this.props.customerName}</h2>
                {/*Uses properties to call the balance when returning the sentence*/}
                <h3>Your account balance is {this.props.balance}</h3>
            </div>
        );
    }
}

export default BankAccount;