import React from 'react';

const Portfolio = () => {
    return (
        <>
            <div className='container-fluid about_me'>
                <div className='container-xxl ptt'>
                    <div className='row flex-column align-items-center'>
                      <div className='mt-5' className='col-12 d-flex justify-content-center'><h1>Portfolio</h1></div>  
                        <div className='col-12 mt-5 d-flex flex-column align-items-center port'>
                            <img className='w-100' src="./Images/sloy.png" alt="" />
                            <a className='mt-4' href="#">Online fashion store - Homepage</a>
                        </div>

                        <div className='col-12 mt-5 d-flex flex-column align-items-center port'>
                            <img className='mt-5 w-100' src="./Images/reebok_web.png" alt="" />
                            <a className='mt-4' href="#">Reebok Store - Concept</a>
                        </div>

                        <div className='col-12 mt-5 d-flex flex-column align-items-center port'>
                            <img className='mt-5 w-100' src="./Images/reebok_web (1).png" alt="" />
                            <a className='mt-4' href="#">Braun Landing Page - Concept</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Portfolio;