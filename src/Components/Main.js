import React from 'react'
import {ArrowBarLeft, ArrowBarRight, Bell} from 'react-bootstrap-icons'
function Main() {
  const pictures = new URL("./money2.png",import.meta.url)
  const Pictures = new URL("./money3.png",import.meta.url)


  return (
    <div>
    <div className='all-content'>
        <div className='main-content'>
        <h6>Learn how to optimize your webpages and ad creative at our upcoming workshop 👀 <a href='#'>Register Now <ArrowBarLeft /></a></h6>
        <div className='d-flex'>
          <div>
        <h1 className='head'>Smaller budgets need smarter dollars</h1>
    <h1>smarter dollars</h1>
    <p>Create, manage, and analyze your display, Facebook,
         Instagram, Pinterest, TikTok, and email campaigns from a single platform. AdRoll helps marketers do more with less.</p>
         <div className='m-4'>
          <button className='btn btn-primary' style={{padding:'20px',borderRadius:'10px'}}>Get Started</button>
          <button className='btn btn-success mx-3' style={{padding:'20px',borderRadius:'10px'}}>Get in Touch</button>

         </div>
         </div>
         <div>
         <img src={pictures} alt="pic" width={800} style={{borderTopLeftRadius:'40%',borderBottomLeftRadius:'40%',borderStartStartRadius:'50%'}}/> </div> 
         </div>
        
        </div>
        <div>
        </div>
    </div>
    <div className='d-flex' style={{marginLeft:'100px'}}>
      <div className='classss' style={{margin:'50px'}}>
      <h2>AdRoll works for the</h2>
      <h2><b>E-commerce owner</b></h2>
      <p width={400}>Our industry-first automation builder gives you full control of campaigns across display, social, and email — all from one place.</p>
      <a href="#" className=''>Explore Automatic muilder<ArrowBarRight/></a>
      </div>
      <div style={{marginLeft:'100px', marginTop:'20px'}}>
        <img src={Pictures} alt=""  width={400}/>
      </div>
    </div>
    <div className='d-flex area' style={{alignItems:'center', marginLeft:'150px'}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgmqZXLdebOaAWPTUCoznWgeIAL5W4hylGmg&usqp=CAU" alt="" width={150}/>
      <img src="https://cdn.shopify.com/s/files/1/0277/0693/files/Topo-Designs-Horizontal-Logo-Checkout_copy.jpg?height=628&pad_color=ffffff&v=1614752456&width=1200"
       alt="" width={150}/>
       <img src="https://www.payton.jewelry/cdn/shop/files/Payton_Logo_on_White-2.png?height=115&v=1667276195" alt="" width={150}/>
       <img src="https://cdn.shopify.com/s/files/1/0350/5401/files/checkout.png?height=628&pad_color=fff&v=1613162132&width=1200" alt="" 
       width={150}/>
       <img src="https://legendary-digital-network-assets.s3.amazonaws.com/geekandsundry/wp-content/uploads/2015/09/ExplodingKittensCover1.png" 
       width={150} alt="" />
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5IKA_LaYKYHnT94mmd7UKQYdWBrBqDtLwN5c9UETBqZmfq7L1tmY5LgkImomqR4ezJQ&usqp=CAU"
       width={150} alt="" />
    </div>
    </div>
  )
}

export default Main