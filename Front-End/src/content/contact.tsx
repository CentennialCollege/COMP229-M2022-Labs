import React, { useEffect } from 'react';

function Contact ()
{
    useEffect(()=>{
        document.title = "Contact Us";
    });

    return(
        <div className="container">
            <h1>Contact Us</h1>
                {/*
                <div id="messageArea" className="alert alert-success"></div>
                */}
                <div className="row justify-content-lg-center g-3">
                <form className="col-lg-6 col-md-10 col-sm-10">

                    <div className="input-group mb-3">
                    <span className="input-group-text">Full Name</span>
                    <input id="fullName" name="fullName" type="text" className="form-control" 
                    aria-label="Full Name" aria-describedby="Full Name Input" required/>
                    </div>

                    <div className="input-group mb-3">
                    <span className="input-group-text">Contact Number</span>
                    <input id="contactNumber" name="contactNumber" type="tel" className="form-control" 
                    aria-label="Contact Number" aria-describedby="Contact Number Input" required/>
                    </div>

                    <div className="input-group mb-3">
                    <span className="input-group-text">Email Address</span>
                    <input id="emailAddress" name="emailAddress" type="email" className="form-control"
                    aria-label="Email Address" aria-describedby="Email Address Input" required/>
                    </div>

                    <div className="input-group mb-3">
                    <span className="input-group-text">Your Message</span>
                    <textarea id="message" name="message" className="form-control" aria-label="Message Area"></textarea>
                    </div>

                    <div className="mb-3 form-check">
                    <input id="subscribeCheckbox" name="subscribeCheckbox" type="checkbox" className="form-check-input" />
                    <label className="form-check-label">Subscribe to our Contact List</label>
                    </div>
                    
                    <button id="sendButton" type="submit" className="btn btn-primary"><i className="fas fa-envelope fa-lg"></i> Send</button>
                    <button id="cancelButton" type="reset" className="btn btn-warning"><i className="fas fa-undo fa-lg"></i> Cancel</button>
                </form>

                </div>
        </div>
    );
}

export default Contact;