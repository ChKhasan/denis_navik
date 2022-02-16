import React from 'react';
import "./style.css"
const Aboutme = () => {
    return (
        <>
            <div className='container-fluid about_me  mt-5' >
                <div className='container-xxl ptt'>
                <div className='row '>
                    <div className='col-12 d-flex flex-column align-items-center'>
                        <h1>About me</h1>
                        <p>Hi, I'm Denis – UX/UI designer from Minsk. </p>
                        <p>
                        I'm interested in design and everything connected with it.

                        </p>
                        <p className='mt-4'>
                          I'm studying at courses "Web and mobile design </p>
                          <p>
                            interfaces" in IT-Academy.  
                        </p>
                        <p className='mt-4'>
Ready to implement excellent projects
                        </p><p>
                            with wonderful people.
                            </p>


                    </div>
                </div>
                </div>
            </div>
        </>
    );
};


export default Aboutme;