import { useState } from 'react'
import sec1img1 from './assets/meritt-thomas-u-Hb93V6IWI-unsplash 1.png'
import sec1img2 from './assets/meritt-thomas-u-Hb93V6IWI-unsplash 2.png'
import sec1img3 from './assets/meritt-thomas-u-Hb93V6IWI-unsplash 3.png'
import sec2img1 from './assets/image 13.png'
import sec2img2 from './assets/image 21.png'
import sec2img3 from './assets/image 18.png'
import sec3img1 from './assets/image 11.png'
import sec3img2 from './assets/image 10.png'
import sec3img3 from './assets/ian-keefe-OgcJIKRnRC8-unsplash 1.png'
import sec4img1 from './assets/Arrow - Down 2.png'
import sec4img2 from './assets/Arrow - Down 3.png'
import sec5img1 from './assets/Ellipse 1.png'
import sec5img2 from './assets/Group 8.png'
import sec6img1 from './assets/twitter.png'
import sec6img2 from './assets/instagram-logo.png'
import sec6img3 from './assets/facebook.png'

import './App.css'



function App() {

  return (
   < >
    <div className="navbar">
      <h1>Cootels</h1>
      <div className="navbartext">
        <p>Rooms</p>
        <p>Reservation</p>
        <p>Contacs</p>
      </div>
      <button className="navbarbutton">Get Stardet</button>
     
    </div>

    <div className="sec1">
    <div className="divitext1">
   <h1>Nature, Warmth, and Beauty in One Space</h1>
   <p>One place to release all the stress, bring back happines, and get back to nature. We provide the best room and nature for you. Come visit us anytime you want.</p>
   <button>Reservation</button>
    </div>
       <div className="divicon1">
        <img src={sec1img1} />
        <img src={sec1img2} />
        <img src={sec1img3} />
       </div>
    </div>

    <div className="sec2">
          <img src={sec2img1} />
          <div className="sec2text1">
            <h1>Cozy and Down to Earth Cootage Hotel in Norway.</h1>
            <p>Our Cootage Hotel is an intimate hideway concieved for dicerning travelers. It faces directly the unique and spectacular panorama of the Hallerbos Jungle.</p>
            <p>Cootels extends along a private, quiet, and beautiful nature. Stay away from crowd and enjoy the cozy and beauty with us.</p>
            <button>Learn More</button>
          </div>
    </div>

    <div className="sec2" id='sec22'>
          <div className="sec2text1" id='sec2text2'>
            <h1>Cabin Activities</h1>
            <p>Don’t worry to get bored easily in our cabin. We have so many cabin activities for you to do it alone or with group. Maybe this is the best chance for you to make new friends or even a lover.</p>
          </div>
          <img src={sec2img2} />
    </div>

    <div className="sec2">
          <img src={sec2img3} />
          <div className="sec2text1" id='sec2text3'>
            <h1>Cabin Activities</h1>
            <p>Don’t worry to get bored easily in our cabin. We have so many cabin activities for you to do it alone or with group. Maybe this is the best chance for you to make new friends or even a lover.</p>
          </div>
    </div>

    <div className="sec3">
      <div className="sec3text1">
        <h1>Many Rooms to Choose</h1>
        <p>There is a room for every needs. We have room for individuals until family size, we also have a cabin for more private experience</p>
        <button>Explore more</button>
      </div>
      <div className="sec3text2">
        <div className="sec3icon1">
          <img src={sec3img1} />
          <h1>Single Room</h1>
          <p>Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others.</p>
          <button>Learn More</button>
        </div>
        <div className="sec3icon1">
          <img src={sec3img2} />
          <h1>Double Room</h1>
          <p>Best for couple, seek happiness in intimacy without worry of being disturbed. Feel the whole world just for you two</p>
          <button>Learn More</button>
        </div><div className="sec3icon1">
          <img src={sec3img3} />
          <h1>Cootage </h1>
          <p>Best for family or group. One cootage can fit up to 5 people. Made stronger bond with your family or friends</p>
          <button>Learn More</button>
        </div>
      </div>
    </div>

    <div className="sec4">
   <div className="sec4text">
    <h2>Start your journey!</h2>
    <h1>How to Get My Room?</h1>
    <p>You can contact us by phone or email us. Easily tap the contact button below and it will take you to our contact point</p>
    <button>Contact us</button>
    <button>Explore more room</button>
   </div>
   <div className="sec4icon1">
    <div className="sec4icon1icon1">
      <h1>1.Choose a room and date</h1>
      <img src={sec4img1}className='img1'  />
    </div>
    <div className="sec44">
    <div className="sec4icon1icon12">
<div className="sec4icon11">
<h1>2. Check for room availability</h1>
      <img src={sec4img1} className='img' />
</div>
    <p>Contact us via phone or email, ask for availability of you choice of room. We might offer you something exciting.</p>
    </div>
    </div>
    <div className="sec4icon1icon1">
      <h1>3. Enjoy your room</h1>
      <img src={sec4img1}className='img2'  />
    </div>
   </div>

    </div>

    <div className="sec5">
      <h1>Hear From Our Happy Customers</h1>
      <img src={sec5img1} />
      <p>“Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self.  5 out of 5! the waffle is great!”</p>
       <h2>Kirana Dunham</h2>
       <img src={sec5img2} className='img222' />
    </div>

    <div className="sec6">
      <div className="link1">
        <h1>Cootels</h1>
        <p>Your Best Private</p>
        <p>Hideway From Crowd.</p>
        <p>Back to Nature.</p>
        <img src={sec6img1} />
        <img src={sec6img2} />
        <img src={sec6img3} />
      </div>
      <div className="link2">
        <h1>Rooms</h1>
        <p>Single Room</p>
        <p>Double Room</p>
        <p>Cabin</p>
        <p>Custom Room</p>
      </div>
      <div className="link3">
        <h1>Reservation</h1>
        <p>See the Steps</p>
        <p>Best Time</p>
      </div>
      <div className="link4">
        <h1>Contact</h1>
        <p>Our Number</p>
        <p>Our Email</p>
        <p>Our Location</p>
      </div>
    </div>

    </>

  )
}

export default App
