import React , { Fragment , useState} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import $ from 'jquery';
import slide2 from '../../assets/img/slide2.png';
import slide1 from '../../assets/img/slide1.png';

const SlideCon = () => {
  const [NFTCont, setNFTCont] = useState([
    {
      'header':'2021 SPACE PODS',
      'content1':'Your space to customise and upgrade, to show off you NFT’s and hang out with your clone frens, in space.',
      'content2':'Powered by OnCyber, exclusive to Clone X owners. ',
      'content3':''
    },
    {
      'header':'2022 3D VAULT',
      'content1':'Live 3D file updates for your clone to use on the Metaverse and across different platforms. ',
      'content2':'Available to download in : ',
      'content3':'.blend .obj .fbx .MA, glb, Unreal Engine, Daz3D.'
    },
    {
      'header':'2022 Forging Event 1',
      'content1':'Merge worlds and forge exclusive physical collectibles from your Clone.',
      'content2':'',
      'content3':''
    },
    {
      'header':'2022 Wearables Marketplace',
      'content1':'A place to customise your clone, get new wearables and drops, and trade with Clone frens.',
      'content2':'',
      'content3':''
    }
  ]);

  const settings_team = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    afterChange: () => {
      let current_index;

      for(let i = 0;i < $('#ddd').children().children().children().children().length; i++) {
        if ($($('#ddd').children().children().children().children()[i]).hasClass('slick-current')) {
          current_index = i;
          break;
        }
      }

      if(current_index < 4){
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
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 500,
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
      <div style={{marginTop:'50px'}}>
        <div className="col-md-12">
            <div className="dash_ox_team_box">
              <div id="ddd" className="dash_ox_team_slider" >
                <Slider {...settings_team}  className= "slider-images" style={{margin:'auto'}}>
                  <div classsName="crypto_partner_img">
                      <img className="crypto_partner_img " src={slide2}  alt=""  width="225px" height="225px"/>
                      <p className="slide-description slide-font1">Our tokens will be used for entering the tournament and the funds are used 80% for the prize funds to be devide by the winners and 20% goes towards the token liquidity pool to gain more value in the coin to distribute between the NFT Holders based on rank. </p>
                  </div>
                  <div>
                      <img className="crypto_partner_img " src={slide1}  alt=""  width="225px" height="225px"/>
                      <p className="slide-description slide-font2">NFTs are categorised in 4 sectors, 1500 Gold Diamond Pieces, 2500 Platinum Pieces, 3500 Gold Pieces, 4500 Silver Pieces. Gold Diamond NFTs earn you 3 Elite Chess Coins a day, Platinum NFTs earn 2 Elite Chess Coins a day, Gold NFTs earn 1 Elite Chess Coins a day, Silver NFTs earn 0.5 Elite Chess Coins a day. </p>
                  </div>
                  <div>
                      <img className="crypto_partner_img " src={slide2}  alt=""  width="225px" height="225px"/>
                      <p className="slide-description slide-font3">Our token will have a low circulation and is designed to regain your initial mint investment over 60 days over the lifetime so that's consistent rewards for holding on to your NFT.
                      Due to the consideration that the coin will increase in value as we charge fees to audience and Non NFT Holders on the metaverse for entry.</p>
                  </div>
                  <div>
                      <img className="crypto_partner_img " src={slide1}  alt=""  width="225px" height="225px"/>
                      <p className="slide-description slide-font4">20% of all the profit is designed to increase the value of the coin and distribute it amongst the NFT Holders. Thus making it a more crucial part of the tournament. You will need a 10 ECC Entry fee for small tournaments if you are not an NFT holder. The initial minter are able to acquire more profits.</p>
                  </div>
                  <div classsName="crypto_partner_img">
                      <img className="crypto_partner_img " src={slide2}  alt=""  width="225px" height="225px"/>
                      <p className="slide-description slide-font1">Our tokens will be used for entering the tournament and the funds are used 80% for the prize funds to be devide by the winners and 20% goes towards the token liquidity pool to gain more value in the coin to distribute between the NFT Holders based on rank. </p>
                  </div>
                  <div>
                      <img className="crypto_partner_img " src={slide1}  alt=""  width="225px" height="225px"/>
                      <p className="slide-description slide-font2">NFTs are categorised in 4 sectors, 1500 Gold Diamond Pieces, 2500 Platinum Pieces, 3500 Gold Pieces, 4500 Silver Pieces. Gold Diamond NFTs earn you 3 Elite Chess Coins a day, Platinum NFTs earn 2 Elite Chess Coins a day, Gold NFTs earn 1 Elite Chess Coins a day, Silver NFTs earn 0.5 Elite Chess Coins a day. </p>
                  </div>
                  <div>
                      <img className="crypto_partner_img " src={slide2}  alt=""  width="225px" height="225px"/>
                      <p className="slide-description slide-font3">Our token will have a low circulation and is designed to regain your initial mint investment over 60 days over the lifetime so that's consistent rewards for holding on to your NFT.
                      Due to the consideration that the coin will increase in value as we charge fees to audience and Non NFT Holders on the metaverse for entry.</p>
                  </div>
                  <div>
                      <img className="crypto_partner_img " src={slide1}  alt=""  width="225px" height="225px"/>
                      <p className="slide-description slide-font4">20% of all the profit is designed to increase the value of the coin and distribute it amongst the NFT Holders. Thus making it a more crucial part of the tournament. You will need a 10 ECC Entry fee for small tournaments if you are not an NFT holder. The initial minter are able to acquire more profits.</p>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  )
}

export default SlideCon;