import React from 'react';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import logo from './Images/Chemilea_Logo.svg';
import chemicalimage from './Images/Brainbg.png'
import fullname from './Images/Full_name_icon.svg'
import email from './Images/Email_Icon.svg'
import sendplane from './Images/paper_plane.svg'
import notification from './Images/New_Notification_icon.svg'
import otp from './Images/OTP_Icon.svg'
import linked from './Images/linkedin.svg'
import facebook from './Images/facebook.svg'
import twitter from "./Images/twitter.svg";
import Search from "./Images/Search_Icon.svg";
import properties from './Images/Properties_Icon.svg';

function Desktop(props) {
    return (
        <div>
            <header className="chemilea-body">
            <div className='chemilea-logo'><img src={logo} className='chemilea-img' /></div>
            <div className='container-fluid'>
              <div className="row">
                <div className='col-7'>
    
                <div className='row'>
    
                  <div className='col-8'>
                  <h1 className='one-search-for-all'>one search for all<br /><span style={{textTransform:'lowercase',fontWeight:'300'}}>chemical properties</span></h1>
                  <div className='chemical-img-brain'>
                  <img src={chemicalimage} />
                  </div>
                  </div>
    
                  <div className="col-4">
                <div>
                <div className='coming-soon'>is coming soon</div>
                <div className='comingsoon-hr'></div>
                </div>
                  </div>
                  </div>    
    
                </div>
                <div className="col-5">
                <h1 className='one-search-for-all'>get exclusive invite<br /><span style={{textTransform:'lowercase',fontWeight:'300'}}>for free access</span></h1>
                
                <div className='notification'>
                <img src={notification} className="notification-img" />
                
                <div className='form-background'>
                  <form>
                  <div style={{display:'flex',flexWrap:'wrap',flexDirection:'row'}}>  
                  <div><img src={fullname} className='fullnameimg' /></div>
                  <div className='fullnamecontainer col-10'><input type="text" placeholder='Full Name…' className='fullnameinput form-control'/></div>
                  </div>
                  <div style={{display:'flex',flexWrap:'wrap',flexDirection:'row'}}>  
                  <div><img src={email} className='fullnameimg' /></div>
                  <div className='fullnamecontainer col-10'><input type="text" placeholder='Enter Email…' className='fullnameinput form-control'/><button className='verify'>Verify</button></div>
                  </div>
                  <div className='' style={{display:'flex'}}>  
    
                  <div className=''><img src={otp} className='otpimg' /></div>
                  
                  <div className='OTPContainer  mr-lg-5' style={{display:'flex'}}>
                    <div className='col-2'><input type="text" placeholder='0' maxLength='1' className='OTP-Input form-control'/></div>
                    <div className='col-2'><input type="text" placeholder='0' maxLength='1' className='OTP-Input form-control'/></div>
                    <div className='col-2'><input type="text" placeholder='0' maxLength='1' className='OTP-Input form-control'/></div>
                    <div className='col-2'><input type="text" placeholder='0' maxLength='1' className='OTP-Input form-control'/></div>
                    <div className='col-2'><input type="text" placeholder='0' maxLength='1' className='OTP-Input form-control'/></div>
                    <div className='col-2'><input type="text" placeholder='0' maxLength='1' className='OTP-Input-Last form-control'/></div>
                  </div>
    
                  </div>
                  <div className="ima">i'm a</div>
                  <div style={{display:'flex',marginLeft:'70px',marginBottom:'30px'}}>  
                  <div><input type='radio' name='account-type' /><span className='label-radiobtn'>Working Professional</span></div>
                  <div style={{marginLeft:'30px'}}><input type='radio' name='account-type' /><span className='label-radiobtn'>Student</span></div>
                  </div>
                  <div className='send text-center'>
                    <img src={sendplane} className='send-img' />
                  </div>
                  </form>
                </div>
                
                <div className='social-block'>
                  <div><h4 className='text-center stay-updated'>Stay Updated</h4></div>
                  <div className='social-icons-div'>
                    <div className='left-hr'></div>
                    <div className="social-icons">
                    <a href="#" className="linked-in"><img src={linked} /></a>
                    <a href="#" className="face-book"><img src={facebook} /></a>
                    <a href="#" className="twitter-icon"><img src={twitter} /></a>
                    </div>
                    <div className="right-hr"></div>
                  </div>
                </div>     
    
                </div>
                </div>
              </div>
    
        <div className="row">
          <div className="col-6">
              <div className='search-block'>
                <div style={{placeSelf:'center',marginLeft:'30px'}}>
                <img src={properties} className="search-icon"></img>
                </div>
                <div className="search-text">
                Find physical and chemical properties, safety information, toxicity levels, biological activities and much more
                </div>
            </div>
          </div>
        <div className="col-6">
          <div className='search-block'>
                <div style={{placeSelf:'center'}}>
                <img src={Search} className="search-icon"></img>
                </div>
                <div className="search-text">
                Search for a chemical property using CAS No. or Chemical Name or SMILES Code or InChl
                </div>
          </div>
        </div>
      </div>
      <div>
        <hr className='bottom-hr' />
      </div>
      <div className='footer-text'>
      An initiative of Carbanio.com – India’s largest B2B Chemicals Marketplace
      </div>
    
            </div>
          </header> 
        </div>
    );
}

export default Desktop;