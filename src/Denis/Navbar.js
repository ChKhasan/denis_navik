import React from 'react';
import "./style.css"
import "./Images/BSPP2266.png"

const Navbar = () => {
    return (
        <>
           <div className='container-fluid '>
           <div className='container-xxl ptt'>
           <div className='row'>
                 <div className='col-12'>
                     <div id='nav' className='d-none d-md-flex w-100 justify-content-between align-items-center '>
                       
                             <a href='#'>Home</a>
                        
                             <a href='#'>About me</a>
                        
                             <a href='#'>Skills</a>
                       
                             <a href='#'>Portfolio</a>
                      
                             <a href='#'>Contacts</a>
                         
                     </div>
                 </div>
             </div>
             <div className='row d-none d-md-flex'>
                 <div className='nav_hr'></div>
             </div>
             <div className='row mt-4 pt-4 pb-4'>
                 <div className='col-md-6 col-12 denis_norik d-flex justify-content-between'>
                     
                     <div>
                     <h1>Denis</h1>
                     <h1>Novik</h1>
                     </div>
                     <div className='d-flex d-md-none'>
                     <button class="btn menu " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><img src='./Images/Group 3.png'></img></button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header d-flex justify-content-end">

    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <div id='nav' className='w-100 d-flex flex-column justify-content-between '>
                       
                       <a className='mt-3' href='#'>Home</a>
                  
                       <a className='mt-3' href='#'>About me</a>
                  
                       <a className='mt-3' href='#'>Skills</a>
                 
                       <a className='mt-3' href='#'>Portfolio</a>
                
                       <a className='mt-3' href='#'>Contacts</a>
                   
               </div>
  </div>
</div>
                     </div>
                 </div>
                 <div className='col-md-6 col-12 d-flex flex-column justify-content-end'>
                     <h6>UX | UI designer</h6>
                     <h6>24 years old, Minsk</h6>
                 </div>
             </div>
             <div className='row'>
                 <div className='d-none d-md-block col-12'>
                   <img className='w-100' src='./Images/BSPP2266.png'></img>

                 </div>
                 <div className=' d-md-none col-12'>
                   <img className='w-100' src='./Images/BSPP2266 (1).png'></img>

                 </div>
             </div>
           </div>
           </div> 
        </>
    );
};


export default Navbar;