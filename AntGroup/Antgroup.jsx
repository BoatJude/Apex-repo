import React from 'react';
import Payment from '../assets/dig.jpeg'
import Connectivity from '../assets/connect.avif'
import financial from '../assets/finan.jpg'
import Logo from '../assets/logo.png'
import backgroundVideo from '../assets/backgroundVideo.mp4';
import technologies from '../assets/tech.jpg'
import globalization from '../assets/global.jpg'
import Linkedin from '../assets/linkedin.png'
import Instagram from '../assets/instagram.png'
import Tiktok from '../assets/tiktok.png'
import Twitter from '../assets/twitter.png'
import Facebook from '../assets/facebook.png'
import Youtube from '../assets/youtube.png'
import './Antgroup.css';
import HistoryTimeLine from '../History/history.jsx'

const AntGroup = () => {
  return (
    <div className="box">
      <div className="landing-container">
        <nav className="nav-bar">
          <div className="logo">
            <img src={Logo} alt="Company Logo" className='logo-image'/>
          </div>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Business Development</a></li>
            <li><a href="#">Technological Innovation</a></li>
            <li><a href="#">ESG</a></li>
            <li><a href="#">News & Media</a></li>
            <li><a href="#">Join Us</a></li>
            <li><a href="#">EN</a></li>
          </ul>
        </nav>

        <main className="main-box">
          <video autoPlay muted loop playsInline className="background-video">
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="main-content">
            <h1>Develop digital technology to serve the real economy</h1>
            <button className="play-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.81l8.14-5.18c.67-.46.67-1.54 0-2l-8.14-5.18c-.67-.46-1.54.02-1.54.81z" fill="white" />
              </svg>
            </button>
          </div>
        </main>
      </div>

      <div className="mission-vision-container">
        <nav className="navigation">
          <ul>
            <li><a href="#">Our mission and vision</a></li>
            <li><a href="#">Company profile</a></li>
            <li><a href="#">History</a></li>
            <li><a href="#">Join Us</a></li>
          </ul>
        </nav>

        <main className="main-content">
          <section className="mission-vision-section">
            <div className="content-box">
              <h2>Our mission</h2>
              <p>We aim to simplify and enhance the way businesses operate, making commerce accessible to everyone, anywhere.</p>

              <h2>Our vision</h2>
              <p className="vision-text">
              Our goal is to build innovative, future-ready digital infrastructure that transforms the service industry.<br></br>
              Through small yet impactful innovations, we aspire to make a meaningful difference in the world.<br></br>
              We are committed to sustainable and high-quality growth, with a vision that extends for at least 102 years.
              </p>

              <h2>Our Aspirations</h2>
              <p>
              To ensure that everyone can access inclusive and eco-friendly financial services.<br></br>
              To empower small and micro businesses with equal opportunities for growth.<br></br>
              To create an open, collaborative ecosystem where digital services are easily accessible to all.<br></br>
              </p>
            </div>
          </section>

          <section className="company-profile-section">
            <h1>Company profile</h1>
            <p>
            Founded in 2004 with the launch of Alipay, our journey began with a mission to build trust between online buyers and sellers.Over time, we have evolved into<br></br> one of the world’s leading open internet platforms.
            </p>
            <p>
            Driven by technological innovation, we empower our partners to offer seamless, inclusive digital financial services and everyday digital solutions to consumers<br></br>
             and small businesses. Beyond financial services, we continue to introduce cutting-edge technologies to accelerate digital transformation across industries<br></br> and foster collaboration.
             Together with our global partners, we enable businesses and individuals to send, receive, and manage payments effortlessly—anytime, <br></br>anywhere.
            </p>
          </section>

          <section className="digital-payment-section">
            <div className='image-container'>
              <img src={Payment} alt="Digital Payment" className="digital-payment-image" />
            </div>
            <div className="text-section">
              <h2>Digital Payment</h2>
              <p>
              We are dedicated to building and advancing an open digital payment platform. Our
               innovations, including Quick Pay, barcode payment, smile-to-pay, and QR code payment, 
               leverage computers, mobile devices, and IoT smart technology to provide seamless payment 
               solutions. These technologies cater to a wide range of use cases, empowering businesses and 
               consumers with secure, efficient, and convenient digital transactions.








              </p>
              <div className="more-link">
                <button>More </button>
              </div>
            </div>
          </section>


          <section className="connectivity-section">
            <div className="text-content">
              <h2>Digital Connectivity</h2>
              <div className='text-box'>
              <p>
              We are dedicated to supporting independent software 
              vendors (ISVs) and merchants in their digital transformation
              journey, helping businesses lower costs, improve efficiency,
              and achieve sustainable growth.By offering a
              suite of digital products, APIs, and platform
              resources, we enable businesses to seamlessly
              integrate technology into their operations. Through strategic
              collaboration with 12,000 ISVs, we empower millions of 
              businesses to digitize their services and enhance 
              customer experiences.Leveraging tools such as
              Alipay mini-programs, operational tools, and digital channels,
              we help businesses connect with hundreds of
              millions of consumers, making everyday services more accessible,
              efficient, and convenient. 
              </p>
              </div>
              
              <div className="more-link">
                <button>More </button>
              </div>
            </div>
            <div className="image-container">
              <img src={Connectivity} alt="Laptop" className="connectivity-image" />
            </div>
          </section>

          <section className="finance-section">
            <div className="image-container">
              <img src={financial} alt="Digital Finance" className="finance-image" />
            </div>
            <div className="text-content">
              <h2>Digital Finance</h2>
              <div className='text-box'>
              <p>
              With our expertise in technology and data analytics, we empower over 2,000 
              financial institutions across China to deliver inclusive financial services
              tailored to both consumers and small businesses.Our solutions span a wide range
              of financial needs, including consumer finance, wealth management, and insurance.  
              To further support financial accessibility, we have introduced platforms such as
              Ant Insurance and Ant Fortune, along with credit-based services like Huaibei and
              Jiebei, enabling seamless credit purchases and loans.By leveraging innovation, we
              continue to enhance financial inclusion, making secure and efficient financial
              services available to more people and businesses.
              </p>
              </div>
              
              <div className="more-link">
                <button>More </button>
              </div>
            </div>
          </section>
          <section className='technologies-section'>
            <div className='text-content'>
              <h2>Digital technologies</h2>
              <div className='text-box'>
              <p>
              We are dedicated to driving the evolution and adoption of digital technology, leveraging
              our expertise in blockchain, privacy computing, security technology, and distributed
              databases to develop industry-leading solutions.Our innovations include AntChain, 
              OceanBase, Zoloz, SOFAStack, and mPaaS, designed to enhance efficiency, security, and 
              scalability across industries.Through collaboration with partners across various sectors, 
              we support small and medium-sized financial institutions in their digital transformation. 
              Additionally, we empower SMEs in the service industry to embrace digital operations and foster 
              seamless cross-industry collaboration in the digital era.
              </p>

              </div>
             
              <div className="more-link">
                <button>More </button>
              </div>
            </div>

            <div className='image-container'>
              <img src={technologies} alt='Digital Technology' className='technologies-image'></img>
            </div>
          </section>

          <section className='globalization-section'>
            <div className='image-container'>
              <img src={globalization} alt='Globalization' className='globalization-image'></img>
            </div>

            <div className='text-content'>
              <h2>
                Globalization
              </h2>
              <div className='text-box'>
              <p>
              Through strong partnerships worldwide, we have fostered an open and mutually beneficial global digital 
              ecosystem. By sharing our cutting-edge mobile payment technology, we have enhanced cross-border payment 
              experiences for Chinese consumers and helped travelers across Asia overcome payment challenges abroad.
              Our solutions have also empowered Chinese merchants to expand internationally with greater speed and 
              efficiency. At the same time, we have enabled global businesses to integrate multiple digital payment methods, 
              connecting them with consumers worldwide through a seamless, one-time integration.
              </p>

              </div>
              
              <div className="more-link">
                <button>More </button>
              </div>
            </div>
          </section>
        </main>
      </div>
      <HistoryTimeLine />

      <section className="ant-group-hero">
        <div className="hero-content">
          <h1>BRING SMALL AND BEAUTIFUL CHANGES TO THE WORLD</h1>
          <button className="join-button">Join Us </button>
        </div>
      </section>

      <footer className="ant-group-footer">
        <div className="footer-section">
          <h3>Head office address</h3>
          <p>Ayeduase District, Kumasi, Ghana</p>
          <p>Ant A Space, No.569 Xixi Road</p>
          <p>Phone: (+233) 530 380123</p>
          <p>Fax: (+86) 571-8713-9656</p>
          <a href="#" className="view-all-offices">View all office locations &gt;&gt;</a>
        </div>
        <div className="footer-section">
          <h3>Contact us</h3>
          <p>Hotline: (+233) 242 101010</p>
          <p>Service hours: 8:00 - 24:00 (GMT+8)</p>
          <div className="social-icons">
    
            <img src={Linkedin} alt='Linked' className="social-icon"/>
            <img src={Instagram} alt='Instagram' className="social-icon"/>
            <img src={Tiktok} alt='Tiktok' className="social-icon"/>
            <img src={Twitter} alt='Twitter' className="social-icon"/>
            <img src={Facebook} alt='Facebook' className="social-icon"/>
            <img src={Youtube} alt='Youtube' className="social-icon"/>
    
          </div>
        </div>
        <div className="footer-section">
          <h3>Key Reports</h3>
          <p>Sustainability Reports</p>
          <p>Consumer Protection Reports</p>
        </div>
        <div className="footer-section">
          <h3>Affiliated Platforms</h3>
          <p>Ant Foundation</p>
        </div>
        
        <div className="footer-bottom">
          <p className="privacy-policy">Privacy Policy</p>
          <p className="customer-protection">Our Commitment to Customer Protection</p>
          <p className="announcement">Announcement</p>
          <p className="copyright">&copy; Ant Group Co., Ltd.</p>
        </div>
      </footer>
    </div>
  );
};

export default AntGroup;