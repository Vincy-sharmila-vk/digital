import React from 'react'

function Menu() {
  return (
    <div><nav class="navbar navbar-expand-lg navbar-light p-3 bg-white">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="https://www.adroll.com/assets/img/adroll-logo-black.png" alt="logo" width={100}/>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" 
            style={{color:'black'}}>
              Why AddRoll
            </a>
            <ul className='dropdown-menu' aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#"><b>Why AddRoll</b></a></li>
                <li><a class="dropdown-item" href="#">Managed service</a></li>
                <li><a class="dropdown-item" href="#">Case Studies</a></li>
              </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
            style={{color:'black'}}>
              Marketting Platform
            </a>
              <ul className='dropdown-menu' aria-labelledby="navbarDropdown" style={{width:'1500px'}}>
              <li className='d-flex'>
                <li><a class="dropdown-item" href="#"><b>Marketing platform</b></a>
              
              <a class="dropdown-item" href="#">Audience & segmentation</a>
              <a class="dropdown-item" href="#">marketing Automation</a>
              <a class="dropdown-item" href="#">Customer privacy production</a>
</li>
              <li><a class="dropdown-item" href="#"><b>Campaigns</b></a>
              
              <a class="dropdown-item" href="#">Retargeting Ads</a>
              <a class="dropdown-item" href="#">Brand Awareness Ads</a></li>
              <li><a class="dropdown-item" href="#"><b>Marketing Channels</b></a>
              
              <a class="dropdown-item" href="#">Display Advertising</a>
              <a class="dropdown-item" href="#">video Advertising</a>
              <a class="dropdown-item" href="#">Native Advertising</a>

              <a class="dropdown-item" href="#">Email marketing</a></li>
              <li><a class="dropdown-item" href="#"><b>Connected Channels</b></a>
              
              <a class="dropdown-item" href="#">Facebook advertising</a>
              <a class="dropdown-item" href="#">Instagram advertising</a>
              <a class="dropdown-item" href="#">Tiktok advertising</a>
              <a class="dropdown-item" href="#">Pinterest advertising</a>
              <a class="dropdown-item" href="#">google advertising</a>

              </li></li>
              
         </ul></li>
         <li class="nav-item">
            <a class="nav-link" href="#" style={{color:'black'}}>pricing</a>
          </li>
         <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
            style={{color:'black'}}>
              For E-commernce
            </a>
              <ul className='dropdown-menu' aria-labelledby="navbarDropdown">
            
                <li><a class="dropdown-item" href="#"><b>AdRoll E-commerence</b></a></li>
              
             <li> <a class="dropdown-item" href="#">Shopify</a></li>
             <li> <a class="dropdown-item" href="#">Shopify bus</a></li>
             <li> <a class="dropdown-item" href="#">Woo Commerence</a>
</li>
<li> <a class="dropdown-item" href="#">wix</a></li>
<li> <a class="dropdown-item" href="#">Big commerence</a></li>             
         </ul></li>
         <li class="nav-item">
            <a class="nav-link" href="#" style={{color:'black'}}>price</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
            style={{color:'black'}}>
             Resources
            </a>
              <ul className='dropdown-menu' aria-labelledby="navbarDropdown" style={{width:'1000px'}}>
              <li className='d-flex'>
                <li><a class="dropdown-item" href="#"><b>Marketing Resource</b></a>
              
              <a class="dropdown-item" href="#">Resource Library</a>
              <a class="dropdown-item" href="#">AdRoll blogs</a>
              <a class="dropdown-item" href="#">Holiday marketing resource</a>

              
              <a class="dropdown-item" href="#">marketing Grossery</a>
              <a class="dropdown-item" href="#">State of digital marketing report</a></li>
              <li><a class="dropdown-item" href="#"><b>Free tools</b></a>
              
              <a class="dropdown-item" href="#">Retourn on Ad Spend Calculator</a>
              <a class="dropdown-item" href="#">AdRoll UTM link Builder</a>
              <a class="dropdown-item" href="#">Discount Profit Margin calculator</a>

              </li>
              <li><a class="dropdown-item" href="#"><b>Community</b></a>
              
              <a class="dropdown-item" href="#">Growth guerilla collective</a>
              <a class="dropdown-item" href="#">Small business shopping list</a>
              <a class="dropdown-item" href="#">Events</a><br />
              <a class="dropdown-item" href="#"><b>Customer suppor</b></a>
              <a class="dropdown-item" href="#">Getting started</a>
              <a class="dropdown-item" href="#">Help center</a>
              <a class="dropdown-item" href="#">Research panel</a>


              </li></li>
              
         </ul></li>
         
         
        </ul>
        <a href="#" style={{marginRight:'20px',textDecoration:'none',color:'black'}}>Login in</a>
        <button className='btn' style={{backgroundColor:'#A127E2'}}>Get started</button>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Menu