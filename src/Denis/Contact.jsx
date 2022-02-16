import React from 'react';

const Contact = () => {
    return (
        <>
           <div className='container-fluid skills  mt-5' >
                <div className='container-xxl ptt'>
                <div className='row '>
                <div className='col-12 d-flex flex-column align-items-center contact'>
                      <h1>Contacts</h1>
                      <p className='mt-5'>Want to know more or just chat? </p>
                      <p>You are welcome!</p>
                      <button className='btn btn2 mt-5'>Send message</button>
                      <div className='mt-6 w-100 w-md-50 contact-icons d-flex justify-content-between'>
                          <img src="./Images/Group 2 (2).png" alt="" />
                          <img src="./Images/Group 8.png" alt="" />
                          <img src="./Images/Group 9.png" alt="" />
                          <img src="./Images/Group 10.png" alt="" />
                      </div>

                      <p className='footer'>Like me on <br></br>
LinkedIn, Instagram, Behance, Dribble</p>
                    </div>
                </div>
               
                </div>
            </div> 
        </>
    );
};


export default Contact;