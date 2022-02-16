import React from 'react';

const Skills = () => {
    return (
        <>
            <div className='container-fluid skills  mt-5' >
                <div className='container-xxl ptt'>
                <div className='row '>
                <div className='col-12 d-flex flex-column align-items-center'>
                        <h1>Skills </h1>

                        <p className='mt-5'>I work in such programs as</p>
                       


                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-md-3 col-12 mt-6 kard d-flex flex-column align-items-center'>
                         <img src="./Images/Group (2).png" alt="" />
                         <p>Adobe</p><p> Photoshop</p>
                         <img src="./Images/Groups.png" alt="" />
                    </div>
                    <div className='col-md-3 col-12 mt-6  kard d-flex flex-column align-items-center'>
                         <img src="./Images/Group 2.png" alt="" />
                         <p>Adobe</p><p> Photoshop</p>
                         <img src="./Images/Groups.png" alt="" />
                    </div>
                    <div className='col-md-3 col-12  mt-6 kard d-flex flex-column align-items-center'>
                         <img src="./Images/Group (3).png" alt="" />
                         <p>Adobe</p><p> Photoshop</p>
                         <img src="./Images/Groups.png" alt="" />
                    </div>
                    <div className='col-md-3 col-12  mt-6 kard d-flex flex-column align-items-center'>
                         <img id='figma-icon' src="./Images/Group (4).png" alt="" />
                         <p>Adobe</p><p> Photoshop</p>
                         <img src="./Images/Groups.png" alt="" />
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};


export default Skills;