import React from 'react';
import { useHistory } from 'react-router';

function ThankYou() {
    const history = useHistory();
    return (
        <div>
            <section class="thankyou">
                <div class="text">
                    <p>Thank you for Ordering</p>
                </div>
            </section>
            <section class="thankyou-msg">
                <div class="thankyou-text">
                    <p>
                        Thank you for ordering. We received your request. <br />
                        Our staff will be contacting with you to tell next steps.
                    </p>
                    <button onClick={() => history.push('/')}>BACK TO HOME</button>
                </div>
            </section>
        </div>
    );
}

export default ThankYou;
