import React from 'react'
import { ArrowBarLeft, ArrowBarRight, ArrowRight } from 'react-bootstrap-icons'

function Content() {
  const picture = new URL("./money4.png",import.meta.url)
  const img = new URL("./money5.png",import.meta.url)
  const img2 = new URL("./money6.png",import.meta.url)
  const img3 = new URL("./money7.png",import.meta.url)
  const img4 = new URL("./money8.png",import.meta.url)
  const img5 = new URL("./money9.png",import.meta.url)






  return (
    <div>
    <div className='d-flex over'>
      <div className='img'>
        <img src={picture} alt="" width={300}/>
      </div>
      <div className='con'>
        <h2 style={{marginLeft:'30px'}}>For 15 years, we've been the leader in helping our customers find their best customers</h2>
        <p>The AdRoll platform is powered by 15+ years of data from hundreds of thousands of brands and billions of shoppers. Let our expertise find the right customers for your business.</p>
        <a href="#" style={{color:'lightpink', marginLeft:'30px'}}>learn more<ArrowBarRight/></a>
        </div>
        </div>
        <div className='next d-flex'>
          <div className='next1'>
          <h2>Save time and energy by running all your campaigns across millions of websites and mobile apps — from one place</h2>
          <p>When we say one-stop shop, we mean one-stop. Launch, pause, and edit ad campaigns across all the places you want to advertise, plus use that data to see your campaigns holistically and make improvements.</p>
          <a href="#" style={{marginLeft:'30px',color:'lightpink'}}>Explore social Ads manager<ArrowBarRight /></a>
          </div>
          <div>
            <img src={img} alt="" width={500}/>
          </div>
        </div>
        <div className='next2 d-flex'>
          <div>
            <img src={img2} alt="" width={500}/>

          </div>
          <div className='next21'>
            <h2>Our retargeting and brand awareness ads make billions of correct choices every day</h2>
            <p>Our AI does what even the most savvy marketer alone cannot. Our powerful machine learning makes more predictions per second than the NASDAQ to attract the right customers to your site and get them buying again and again.
              
              </p>
              <a href="#">Explore retargeting Ads<ArrowBarRight/></a><br/>
              <a href="#">Explore brand Awareness Ads<ArrowBarRight/></a>

            
          </div>
        </div>
        <div className='d-flex' style={{marginLeft:'100px'}}>
          
          <div className='new' style={{marginTop:'80px',marginLeft:'40px'}}>
            <h2 style={{marginLeft:'30px'}}>Experts to manage your advertising</h2>
            <p>Want to run effective campaigns but don’t have the bandwidth to manage different platforms? AdRoll managed services can be an extension of your marketing team, providing you with 
              a dedicated platform expert to partner with, helping you and your team achieve your marketing goals and maximize return from your campaigns.</p>
         <a href="#" style={{color:'lightpink',marginLeft:'30px'}}>Get the support you deserve<ArrowRight /></a>
          </div>
          <div style={{marginLeft:'150px'}}>
            <img src={img3} alt="" width={500}/>
          </div>
        </div>
        <div>
          <img src={img4} alt="" width={1200} style={{marginLeft:'200px',marginTop:'30px'}}/>
        </div>
        <div>
          <img src={img5} alt="" width={700} style={{marginLeft:'400px'}}/>
        </div>
        <div style={{backgroundColor:'#FCDCE7',padding:'80px'}}>
          <div style={{marginLeft:'150px'}}>
            <h1>Increase ROI. Learn from your data. Maximize sales.</h1>
          </div>
          <div style={{marginLeft:'500px'}}>
            <button className='btn btn-primary'>Get Started</button>
            <button className='btn' style={{backgroundColor:'#A127E2',marginLeft:'30px',color:'white'}}>Get in touch</button>
          </div>
        </div>
        

        
        </div>
  )
}

export default Content