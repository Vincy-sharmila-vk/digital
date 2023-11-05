import React from 'react'
import { Facebook, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons'

function Footer() {
    return (
        <div className='adroll' style={{marginTop:'50px'}}>
            <div className='footer d-flex'>
                <div className='coloumn'>
                    <ul>
                        <li><b>why Adroll</b></li>
                        <li>overview</li>
                        <li>Pricing</li>
                        <br />
                        <li><b>For ecommmerce stores</b></li>
                        <li>AdRoll for ecommerce</li>
                        <li>Shopify</li>
                        <li>Shopify</li>
                        <li>BigCommerce</li>
                        <li>WooCommerce</li>
                        <li>Magento</li>
                    </ul>

                </div>
                <div className='coloumn'>
                    <ul>
                        <li><b>Marketing Platform</b></li>
                        <li>One platform, every need</li>
                        <li>Build profitable relationships</li>
                        <li>Track and improve results</li>
                        <li>Protect customer data</li>
                        <br />
                        <li><b>Marketing Recipes</b></li>
                        <li>What are marketing recipes?</li>
                        <li>Abandoned cart recovery</li>
                        <li>Customer loyalty</li>
                        <li>Retargeting</li>
                        <li>Brand awareness</li>

                    </ul>

                </div>
                <div className='coloumn'>
                    <ul>
                        <li><b>Resources</b></li>
                        <li>Resource library</li>
                        <li>Blog</li>
                        <li>Community</li>
                        <li>Events</li>
                        <li>Help Center</li>
                        <li>Third-Party Cookies</li>
                        <li>AdRoll UTM Link Builder</li>
                        <li>Digital Marketing Newsletter</li>


                    </ul>

                </div>
                <div className='coloumn'>
                    <ul>
                        <li><b>Partners</b></li>
                        <li>Overview</li>
                        <li>Agencies</li>
                        <li>Agency Directory</li>
                        <li>Partner Directory</li>
                        <li>Referral Program</li>
                        <li>API docs</li>



                    </ul>

                </div>
                <div className='coloumn'>
                    <ul>
                        <li><b>Company</b></li>
                        <li>About</li>
                        <li>News</li>
                        <li>Careers</li>
                        <li>NextRoll Engineering</li>
                        <li>iab Member</li>
                        <li>NAI Member</li>
                        <li>TAG</li>

                    </ul>

                </div>
                <div className='coloumn'>
                <div className='d-flex area'>
                    <span><Facebook /></span>
                    <span><Linkedin/></span>
                    <span><Instagram /></span>
                    <span><Twitter /></span>
                </div>
                <div className='company d-flex' style={{marginLeft:'50px',marginTop:'20px'}}>
                    <img src="https://iabspain.es/wp-content/uploads/job-manager-uploads/company_logo/2022/05/logo-iab-spain.png" alt="" width={30}/>
                <img src="https://images.squarespace-cdn.com/content/v1/5de717c1f197bd5bcd6aad99/1617996375456-TN1V6C14TLSHVYV8GGT2/NAILogo.png" 
                alt="" width={30}/>
                <img src="https://www.tagtrust.net/hubfs/(Demo)%20Logos/TAG_Logo_Primary_RGB-01.png" alt="" width={30}/>
                </div>
                </div>

            </div>
        </div>
    )
}

export default Footer