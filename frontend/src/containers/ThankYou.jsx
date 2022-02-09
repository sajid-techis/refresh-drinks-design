import React from 'react';

function ThankYou() {
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
                    <button>BACK TO HOME</button>
                </div>
            </section>
        </div>
    );
}

export default ThankYou;
