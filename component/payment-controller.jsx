import React, { useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';
const PaymentController = () => {

    let [radio, setRadio] = useState(new Array(3).fill(false))
    function handleRadio(index) {
        let radioState = new Array(3).fill(false)
        radioState[index] = !radioState[index]
        setRadio([...radioState])
        x()
    }
    function handleToken(token) {
        console.log(token);
        fetch(`${url}/payment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token,
                product: carted
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }



    return (
        <div>
            <p style={{ fontSize: '2rem', fontWeight: '500', marginTop: '1%', marginLeft: '1%' }}>Select Payment Methods</p>

            <div style={{ fontSize: '2rem', marginTop: '1%', marginLeft: '1%', width: '500px', padding: '17px', fontWeight: '500' }}>
                <div class="form-check">
                    <input class="form-check-input" type="radio" onClick={() => handleRadio(0)} checked={radio[0]} />
                    <label class="form-check-label" >
                        Pay With Cards
                    </label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="radio" onClick={() => handleRadio(1)} checked={radio[1]} />
                    <label class="form-check-label" >
                        Bkash
                    </label>
                </div>

                < StripeCheckout
                    token={handleToken}
                    panelLabel="Give Money" // prepended to the amount in the bottom pay button
                    amount='100000'
                    currency="USD"
                    billingAddress={true}
                    stripeKey='pk_test_51J4rHMFpIjqeQSow0hRReErJ6IjCcDrKBAqUeZbG4gBq0EAejjbE4zoIU8IkZg9xRsjT7vYSw2GSXmRpOcAjRNN600zR45r8tP'
                >

                    <button style={{ display: 'none' }} id='pay-btn'></button>
                </StripeCheckout >

                <div class="form-check">
                    <input class="form-check-input" type="radio" onClick={() => handleRadio(2)} checked={radio[2]} />
                    <label class="form-check-label" >
                        Nagad
                    </label>
                </div>
            </div>
        </div>
    )
}

export default PaymentController
