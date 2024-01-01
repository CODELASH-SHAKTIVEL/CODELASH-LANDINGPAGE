import React from 'react'
import {
AiFillGoogleCircle,
AiFillAmazonCircle,
AiFillAppstore,
AiFillAmazonSquare
} from 'react-icons/ai'

import img2 from '../assets/2.webp'


const Home = () => {
  return (
    <>
    <div className="home1" id='home'>
      <main>
      <h1>CODELASH</h1>
        <p>Solution to all your problems</p>
      </main>
    </div>

    <div className="home2" id='about'>
      <img src={img2} alt="item2" />
      <div>
      <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
      </div>
      </div>
          
        <div className="home3" id='about'>
          <div>
          <h1>WHO WE ARE ????</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aperiam facilis eos modi velit quod ipsum sint exercitationem aut suscipit fugiat dignissimos blanditiis, iusto eaque deserunt pariatur iure, voluptas hic nobis ab ex dolore? Deserunt, perferendis nostrum! A animi nobis id? Molestiae beatae cumque minus quae omnis, quam </p>
        </div>
          </div>

          <div className="home4" id='brands'>
       <div>
        <h1>BRANDS</h1>
        <article>
          <div style={{
                animationDelay: "0.1s",
              }}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>
          <div
          style={{
            animationDelay: "0.7s",
          }}>
            <AiFillAmazonCircle/>
            <p>AMAZON</p>
          </div>
          <div
          style={{
            animationDelay: "1s",
          }}>
            <AiFillAppstore/>
            <p>APPSTORE</p>
          </div>
          <div
          style={{
            animationDelay: "1.3s",
          }}>
            <AiFillAmazonSquare/>
            <p>AMAZON</p>
          </div>
        </article>
       </div>
          </div>
         
    </>
    
   
  )
}

export default Home
