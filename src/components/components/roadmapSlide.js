import React , { Fragment } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import p1 from '../../assets/img/p1.png';
import p2 from '../../assets/img/p2.png';

const RoadmapSlide = () => {

  const settings_team = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          infinite: false,
          dots: false
        }
      },
      {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 599,
          settings: {
            slidesToShow: 1,
            infinite: false,
            dots: false
          }
        },
    ]
  };
  return (
    <Fragment>
      <div style={{marginTop:'50px'}}>
        <div className="col-md-12">
            <div className="dash_ox_team_box">
              <div id="ddd" className="dash_ox_team_slider" >
                <Slider {...settings_team}  className= "slider-images" style={{margin:'auto'}}>
                  <div classsName="crypto_partner_img">
                      <img className="crypto_partner_img " src={p1}  alt=""  width="325px" height="325px"/>
                      <div className="roadmap-font1">
                        <p className="title roadmap-title" style={{color:'black'}}>20%</p>
                        <p className="description roadmap-description" style={{color:'black'}}>Launch ECC Elite Chess Club coin Let the tournaments begin.</p>
                      </div>
                  </div>
                  <div>
                      <img className="crypto_partner_img " src={p2}  alt=""  width="225px" height="225px"/>
                      <div className="roadmap-font1">
                        <p className="title roadmap-title" style={{color:'black'}}>30%</p>
                        <p className="description roadmap-description" style={{color:'black'}}>Launch the new exciting Chess Metaverse Tournament game </p>
                      </div>
                  </div>
                  <div>
                      <img className="crypto_partner_img " src={p1}  alt=""  width="225px" height="225px"/>
                      <div className="roadmap-font2">
                        <p className="title roadmap-title" style={{color:'black'}}>40%</p>
                        <p className="description roadmap-description4" style={{color:'black'}}>Decentraland Elite Chess Club Lounge Launch, Fellow Punks, and Apes can finally meet and play in the clubhouse in VR.</p>
                      </div>
                  </div>
                  <div>
                      <img className="crypto_partner_img " src={p2}  alt=""  width="225px" height="225px"/>
                      <div className="roadmap-font3">
                        <p className="title roadmap-title" style={{color:'black'}}>60%</p>
                        <p className="description roadmap-description" style={{color:'black'}}>Airdrop token system to all NFT Holders. The reward will be based on the rarity of the NFT.</p>
                      </div>
                  </div>
                  <div classsName="crypto_partner_img">
                      <img className="crypto_partner_img " src={p1}  alt=""  width="225px" height="225px"/>
                      <div className="roadmap-font2">
                        <p className="title roadmap-title" style={{color:'black'}}>80%</p>
                        <p className="description roadmap-description5" style={{color:'black'}}>100 ETH tournament prize amongst 50 winners. Play to Earn And Player Vs Player. NFT holder's gain free Entry, non NFT Holders pay entry premium in Elite Chess Club coin to join tournaments to gather legends.</p>
                      </div>
                  </div>
                  <div>
                      <img className="crypto_partner_img " src={p2}  alt=""  width="225px" height="225px"/>
                      <div className="roadmap-font1">
                        <p className="title roadmap-title" style={{color:'black'}}>90%</p>
                        <p className="description roadmap-description" style={{color:'black'}}>All ECC holder's receive daily ECC Coins according to the rarity of the piece.</p>
                      </div>
                  </div>
                  <div>
                      <img className="crypto_partner_img " src={p1}  alt=""  width="225px" height="225px"/>
                      <div className="roadmap-font2">
                        <p className="title roadmap-title" style={{color:'black'}}>100%</p>
                        <p className="description roadmap-description7" style={{color:'black'}}>NFT tournament, a chance to win NFT's in our final giveaway. Everyone that has participated in the tournament will be gifted an Elite Chess Club Wrist band.</p>
                      </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  )
}

export default RoadmapSlide;