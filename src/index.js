import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import img1 from './assets/cube.png';
import img2 from './assets/hero.png';
import img3 from './assets/bussiness-man.png';
import img4 from './assets/rating.png';
import img5 from './assets/handshake.svg';
import img6 from './assets/notebook.svg';
import img7 from './assets/pentagon.svg';
import img8 from './assets/circle.svg';
import img9 from './assets/features-image.png';
import img10 from './assets/integration-icon-01.svg';
import img11 from './assets/integration-icon-02.svg';
import img12 from './assets/integration-icon-03.svg';
import img13 from './assets/integration-icon-04.svg';
import img14 from './assets/integration-icon-05.svg';
import img15 from './assets/integration-icon-06.svg';




function App() {
  return (
    <div>

      {/* Navbar Section */}
      <div className='navbar'>
        <img className='cube-image' src={img1} alt="Cube Image" />
        <button className='btn-1'>Get Started &#8594;</button>
        <button className='btn-2'>Sign in</button>
      </div>

      {/* Heading Section */}
      <div className='heading-one'>
        <h1 className='heading-1'>A powerful suite of</h1>
        <h1 className='heading-1'>user-centric products</h1>
        <p className='para-1'>Our landing page template works on all devices, so you only have to set it up once,</p>
        <p className='para-1'>and get beautiful results forever.</p>
        <button className='btn-3'>Get Started Free &#8594;</button>
        <button className='btn-4'>Read Docs</button>
      </div>

      {/* Image Section */}
      <div>
        <img className='hero-image' src={img2} alt="Hero Image" />
      </div>

      {/* {Rating section} */}
      <div className='rating-one'>
        <img className='user-image' src={img3} alt="User Image" />
        <img className='rating-image' src={img4} alt="Rating Image" />
        <p className='para-2'>"The only tool that has the technology to</p>
        <p className='para-2'>meet our unique and complex needs."</p>
        <a className='rated' href='#'>Trustpilot</a>
        <p className='rates'> - 4.9/5</p>


      </div>

      <div className='rating-two'>
        <img className='user-image' src={img3} alt="User Image" />
        <img className='rating-image' src={img4} alt="Rating Image" />
        <p className='para-3'>"The only tool that has the technology to</p>
        <p className='para-3'>meet our unique and complex needs."</p>
        <a className='rated' href='#'>Capterra</a>
        <p className='rates'> - 4.7/5</p>

      </div>

      <div className='rating-three'>
        <img className='user-image' src={img3} alt="User Image" />
        <img className='rating-image' src={img4} alt="Rating Image" />
        <p className='para-4'>"The only tool that has the technology to</p>
        <p className='para-4'>meet our unique and complex needs."</p>
        <a className='rated' href='#'>G2</a>
        <p className='rates'> - 4.9/5</p>
      </div>
      <div className='borderLine'> </div>

      <div className='heading-two'>
        <h1 className='heading-1'>Many tools to express your</h1>
        <h1 className='heading-1'>creativity</h1>
        <p className='para-1'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
        <p className='para-1'>deserunt mollit anim id est.</p>

      </div>


    <div class="container">
        <div class="slide-section">
            <div class="slide-bar">
                <div class="slide">
                <img className='slide-image' src={img5} alt="Experience Image" />
                    <div class="slide-content">
                        <h4 class="heading-four">Collaboration</h4>
                        <p class="para-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <a class="learn-more" href="#">Learn More &#8594;</a>
                    </div>
                </div>
                <div class="slide">
                <img className='slide-image' src={img6} alt="Experience Image" />
                    <div class="slide-content">
                        <h4 class="heading-four">Experiences</h4>
                        <p class="para-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <a class="learn-more" href="#">Learn More &#8594;</a>
                    </div>
                </div>
                <div class="slide">
                <img className='slide-image' src={img7} alt="Experience Image" />
                    <div class="slide-content">
                        <h4 class="heading-four">Animation</h4>
                        <p class="para-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <a class="learn-more" href="#">Learn More &#8594;</a>
                    </div>
                </div>
                <div class="slide" id="modeling">
                <img className='slide-image' src={img8} alt="Experience Image" />
                    <div class="slide-content">
                        <h4 class="heading-four">Modeling</h4>
                        <p class="para-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <a class="learn-more" href="#">Learn More &#8594;</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


      <div className='borderLine-1'> </div>

      <div className='heading-five'>
        <h2 className='heading-2'>Features to help you create</h2>
        <h2 className='heading-2'>your best designs</h2>
      </div>

      <div className='feature-box'>
        <div className='right-box'>
          <div className='button-5'>
            <button className='btn-5'>Everyone</button>
            <button id='btn--5' >Freelancers</button>
            <button id='btn--5' >Organizations</button>
          </div>
          <h5 className='heading-six'>Kickstart your project with these tools</h5>
          <h5 className='heading-six'>these tools</h5>
          <p className='para-6'>Duis aute irure dolor in reprehenderit in voluptate velit</p>
          <p className='para-6'>esse cillum dolore eu fugiat nulla pariatur, excepteur sint</p>
          <p className='para-6'>occaecat cupidatat non proident, sunt in culpa qui</p>
          <p className='para-6'>officia deserunt laborum.</p>
        </div>
        <img className='feature-image' src={img9} alt="Feature Image" />
      </div>

      <div className='borderLine-2'> </div>

      <h2 className='heading-2'>An ecosystem of</h2>
      <h2 className='heading-2'>integrations</h2>

      <img className='integration-image' src={img10} alt="FeatuInteration Image" />
      <img className='integration-image' src={img11} alt="FeatuInteration Image" />
      <img className='integration-image' src={img12} alt="FeatuInteration Image" />
      <img className='integration-image' src={img13} alt="FeatuInteration Image" />
      <img className='integration-image' src={img14} alt="FeatuInteration Image" />
      <img className='integration-image' src={img15} alt="FeatuInteration Image" />

      <h2 className='heading-2'>Let's find the right plan for</h2>
      <h2 className='heading-2'>you business</h2>
      <p className='para-7'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
      <p className='para-7'>mollit anim id est.</p>

      <table>
        <thead>
          <tr>
            <th id='left-column'>Monthly</th>
            <th class="center">Starter <br></br> $29 </th>
            <th class="center">Agency <br></br> $49</th>
            <th id='no-bdr' class="center">Team <br></br> $79 </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td id='left-column' class="usage">USAGE</td>
            <td class="usage"></td>
            <td class="usage"></td>
            <td id='no-bdr' class="usage"></td>
          </tr>

          <tr>
            <td id='left-column'>Admins & Members</td>
            <td class="center">4</td>
            <td class="center">12</td>
            <td id='no-bdr' class="center">Unlimited</td>
          </tr>
          <tr>
            <td id='left-column' class="even">File Storage</td>
            <td class="center even">10GB</td>
            <td class="center even">50GB</td>
            <td id='no-bdr' class="center even">Unlimited</td>
          </tr>

          <tr>
            <td id='left-column'>Active Users</td>
            <td class="center">500</td>
            <td class="center">1500</td>
            <td id='no-bdr' class="center">Unlimited</td>
          </tr>

          <tr>
            <td id='left-column' class="usage">FEATURES</td>
            <td class="usage"></td>
            <td class="usage"></td>
            <td id='no-bdr' class="usage"></td>
          </tr>

          <tr>
            <td id='left-column'>Unlimited Activities</td>
            <td class="center">&#10003;</td>
            <td class="center">&#10003;</td>
            <td id='no-bdr' class="center">&#10003;</td>
          </tr>

          <tr>
            <td id='left-column' class="even">Data Export</td>
            <td class="center even">&mdash;</td>
            <td class="center even">&#10003;</td>
            <td id='no-bdr' class="center even">&#10003;</td>
          </tr>

          <tr>
            <td id='left-column'>Adjust Group Sizes</td>
            <td class="center">&mdash;</td>
            <td class="center">&#10003;</td>
            <td id='no-bdr' class="center">&#10003;</td>
          </tr>


          <tr>
            <td id='left-column' class="even"></td>
            <td class="center even"><button id='lastbtn-3three' className='btn-3three'>Free Trial &#8594;</button> </td>
            <td class="center even"><button id='lastbtn-3three' className='btn-3three'>Free Trial &#8594;</button></td>
            <td id='no-bdr' class="center even"><button id='lastbtn-3three' className='btn-3three'>Free Trial &#8594;</button></td>
          </tr>

        </tbody>
      </table>

      <div className='rating-one-1'>
        <img className='user-imageOne' src={img3} alt="User Image" />
        <p className='para-2-one'>"I had to work 8 hours a day on one app. With Cube, I only need one or two hours. I just</p>
        <p className='para-2-one'>need to work on creatives, because everything else is automated."</p>
        <p className='ratesOne'>Mirta Jiang </p>
        <a className='ratedOne' href='#'> - Paid Apps </a>
        


      </div>


      <div className='faqs'>
        <h2 className='fa'>FAQs</h2>
        <div className='column-1'>
          <p className='para-8'>What is the difference between the Free and Paid versions?</p>
          <p className='para-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
          <p className='para-9'>eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.</p>

          <p className='para-8'>Do you have student or non-profit discounts?</p>
          <p className='para-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
          <p className='para-9'>eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.</p>

          <p className='para-8'>How is the price determined?</p>
          <p className='para-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
          <p className='para-9'>eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.</p>

        </div>
        <div className='column-2'>

          <p className='para-8'>Do I need coding knowledge to use this product?</p>
          <p className='para-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
          <p className='para-9'>eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.</p>

          <p className='para-8'>Is there a way to become an Affiliate reseller?</p>
          <p className='para-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
          <p className='para-9'>eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.</p>

          <p className='para-8'>What forms of payment do you accept?</p>
          <p className='para-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
          <p className='para-9'>eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.</p>



        </div >
      </div>

      <div className='borderLine-1'> </div>

      <div className='heading-one'>
        <h1 id='lastHeading' className='heading-1'>Join the most flexible</h1>
        <h1 id='lastHeading' className='heading-1'>user-centric platform</h1>
        <h1 id='lastHeading' className='heading-1'>for teams</h1>
        <button id='lastbtn-3' className='btn-3'>Get Started Free &#8594;</button>
        <button id='lastbtn-4' className='btn-4'>Read Docs</button>
      </div>


      <div id='borderLast' className='borderLine-2'> </div>

      <div className='footLinks'>
        <div className='list'><img id='cubeLast' className='cube-image' src={img1} alt="Cube Image" /> </div>

        <div className='list'>
          <p className='list-head'>Products</p>
          <p><a className='hov' href='#'>Cube Manage</a></p>
          <p><a className='hov' href='#'>Cube Analyze</a></p>
          <p><a className='hov' href='#'>Cube lunch</a></p>
          <p><a className='hov' href='#'>Experimentation</a></p>
        </div>

        <div className='list'>
          <p className='list-head'>Resources</p>
          <p><a className='hov' href='#'>Blogs</a></p>
          <p><a className='hov' href='#'>Cheat Sheet</a></p>
          <p><a className='hov' href='#'>Chanel Partners</a></p>
          <p><a className='hov' href='#'>Affiliate Program</a></p>
        </div>

        <div className='list'>
          <p className='list-head'>Projects</p>
          <p><a className='hov' href='#'>Session Recording</a></p>
          <p><a className='hov' href='#'>Features Flags</a></p>
          <p><a className='hov' href='#'>Heatmaps</a></p>
          <p><a className='hov' href='#'>Correlation Analyze</a></p>
        </div>

        <div className='list'>
          <p className='list-head'>Company</p>
          <p><a className='hov' href='#'>About Us</a></p>
          <p><a className='hov' href='#'>Our Story</a></p>
          <p><a className='hov' href='#'>Work With Us</a></p>
        </div>


      </div>

      <div className='Left'>
        <a className='copyRight' href='#'>Terms</a>
        <a className='copyRight' href='#'>Privacy Policy</a>

      </div>





    </div>
  );
}














const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
