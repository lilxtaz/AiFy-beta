import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from './CustomForm';

const MailchimpFormContainer = props => {

    const postUrl = "https://gmail.us21.list-manage.com/subscribe/post?u=87dcc51595580ee185c8026a1&id=94835de5dc";


    return (
        <div className="mc__form-container">
            <MailchimpSubscribe 

                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}

            />
        </div>
    );
};

export default MailchimpFormContainer;