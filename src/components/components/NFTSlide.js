import React, { Fragment, useState} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import $ from 'jquery';
import NFTVideo1 from '../../assets/img/MAIN_001.mp4'
import NFTVideo2 from '../../assets/img/MAIN_008.mp4'
import NFTVideo3 from '../../assets/img/MAIN_017.mp4'
import NFTVideo4 from '../../assets/img/MAIN_023.mp4'

const NFTSlide = () => {
  const [NFTCont, setNFTCont] = useState([
    {
      'header': '2021 SPACE PODS',
      'content1': 'Your space to customise and upgrade, to show off you NFT’s and hang out with your clone frens, in space.',
      'content2': 'Powered by OnCyber, exclusive to Clone X owners. ',
      'content3': ''
    },
    {
      'header': '2022 3D VAULT',
      'content1': 'Live 3D file updates for your clone to use on the Metaverse and across different platforms. ',
      'content2': 'Available to download in : ',
      'content3': '.blend .obj .fbx .MA, glb, Unreal Engine, Daz3D.'
    },
    {
      'header': '2022 Forging Event 1',
      'content1': 'Merge worlds and forge exclusive physical collectibles from your Clone.',
      'content2': '',
      'content3': ''
    },
    {
      'header': '2022 Wearables Marketplace',
      'content1': 'A place to customise your clone, get new wearables and drops, and trade with Clone frens.',
      'content2': '',
      'content3': ''
    }
  ]);

  const settings_team = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    afterChange: () => {
      let current_index;

      for (let i = 0; i < $('#ddd').children().children().children().children().length; i++) {
        if ($($('#ddd').children().children().children().children()[i]).hasClass('slick-current')) {
          current_index = i;
          break;
        }
      }

      if (current_index < 4) {
        $("#header").html(NFTCont[current_index].header);
        $("#content1").html(NFTCont[current_index].content1);
        $("#content2").html(NFTCont[current_index].content2);
        $("#content3").html(NFTCont[current_index].content3);
      }

    },
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1207,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: false
        }
      },
    ]
  };
  return (
    <Fragment>
      <div style={{ marginTop: '50px' }}>
        <div className="col-md-12">
          <div className="dash_ox_team_box">
            <div id="ddd" className="dash_ox_team_slider" >
              <Slider {...settings_team} className="slider-images" style={{ margin: 'auto', textAlign: 'center' }}>
                <div>
                  <div style={{ textAlign: 'center' }}>
                    <video muted src={NFTVideo1} className="NFT-image" autoPlay loop preload="auto">
                      <source src={NFTVideo1} type="video/mp4" />
                    </video>
                    <p className="description" style={{ marginTop: '10px' }}>Gold Piece</p>
                  </div>
                </div>
                <div>
                  <div style={{ textAlign: 'center' }}>
                    <video muted src={NFTVideo2} className="NFT-image" autoPlay loop preload="auto">
                      <source src={NFTVideo2} type="video/mp4" />
                    </video>
                    <p className="description" style={{ marginTop: '10px' }}>Silver Piece</p>
                  </div>
                </div>
                <div>
                  <div style={{ textAlign: 'center' }}>
                    <video muted src={NFTVideo3} className="NFT-image" autoPlay loop preload="auto">
                      <source src={NFTVideo3} type="video/mp4" />
                    </video>
                    <p className="description" style={{ marginTop: '10px' }}>Platinium Piece</p>
                  </div>
                </div>
                <div>
                  <div style={{ textAlign: 'center' }}>
                    <video muted src={NFTVideo4} className="NFT-image" autoPlay loop preload="auto">
                      <source src={NFTVideo4} type="video/mp4" />
                    </video>
                    <p className="description" style={{ marginTop: '10px' }}>Diamond Piece</p>
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

export default NFTSlide;