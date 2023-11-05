import React from 'react'

function Footer1() {
  return (
    <div className='color' style={{backgroundColor:'lightgray'}}>
        <div>
            <img src="https://edaa.eu/wp-content/uploads/nextroll.png"
            width={150} alt="" style={{marginLeft:'700px'}}/>
            <div className='d-flex' style={{marginLeft:'600px'}}>
                <img src="https://www.adroll.com/assets/img/adroll-logo-black.png" alt="" width={150}/>
                <img src="https://www.nextroll.com/assets/img/rollworks-logo-2x.png"
                width={150} alt="" style={{marginLeft:'50px'}}/>

            </div>
<div style={{marginLeft:'400px',marginTop:'30px'}}>
    <p style={{marginLeft:'200px'}}>NextRoll is as an equal opportunity employer.</p>
    <p style={{marginLeft:'150px'}}>We stand alongside organizations that support our Rollers and Community.</p>
</div>
<div className='add'style={{marginLeft:'40px'}}>
<a href="#">Careers</a>
<a href="#">Trust Center</a>
<a href="#">Terms of Service</a>
<a href="#">Website Terms of Use</a>
<a href="#">Privacy Notice</a>
<a href="#">Infringement Policy</a>
<a href="#">Ad Opt Out</a>
<a href="#">CCPA Notice at Collection</a>
<a href="#">AdChoices</a>
</div>
<div className="para" style={{marginLeft:'50px'}}>
    <p>© 2006-2023, NextRoll, Inc. All rights reserved. AdRoll is a division of NextRoll. To learn more please visit nextroll.com.</p>
</div>
<div>
    <button className='btn btn-primary' style={{marginLeft:'600px'}}>Do not sell or share my personal information</button>
</div>
        </div>
    </div>
  )
}

export default Footer1