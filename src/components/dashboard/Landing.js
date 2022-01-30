import React, { } from 'react';
import '../../assets/css/dashboard/Landing.css'
import SlideCon from '../components/Slide';
import RoadmapSlide from '../components/roadmapSlide';
import NFTSlide from '../components/NFTSlide';

import menuIcon from '../../assets/img/menu-icon.png'
import headerButton1 from '../../assets/img/header-icon1.png'
import headerButton2 from '../../assets/img/header-icon2.png'
import firstImg from '../../assets/img/first-img.png'
import arrowButton from '../../assets/img/arrow-button.png'
import link3 from '../../assets/img/link3.png'
import link2 from '../../assets/img/link2.png'
import link1 from '../../assets/img/link1.png'
import NFTCalendar from '../../assets/img/nft-calendar.png'


class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'navbarFlag': false,
      'walletAddress': '',
      'minumAddress': '',
      'connected': false,
      'disconnectFlag': false,
      'modalFlag': false,
      'mail': '',
      'mailError': '',
      'text': '',
      'textError': ''
    }
    this.toggle = this.toggle.bind(this);
    this.handleConnectClick = this.handleConnectClick.bind(this);
    this.showDisconnect = this.showDisconnect.bind(this);
    this.hideDisconnect = this.hideDisconnect.bind(this);
    this.disconnectWallet = this.disconnectWallet.bind(this);
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.mailChange = this.mailChange.bind(this);
    this.textChange = this.textChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    if (typeof window.ethereum === "undefined") {
      console.log("install metamask")
    } else {
      this.setState({ 'walletAddress': window.ethereum.selectedAddress })
      this.setState({ 'minumAddress': this.minum(window.ethereum.selectedAddress) })
    }
    if (localStorage.getItem('connected')) {
      this.setState({ 'connected': localStorage.getItem('connected') == 'true' ? true : false })
    }
    if (typeof window.ethereum === "undefined") {
      console.log("install metamask")
    } else {
      if (String(window.ethereum.selectedAddress).length < 10) {
        this.setState({ 'connected': false })
      }
    }

    console.log(this.state.connected);
  }

  minum(address) {
    var minumAddress = ''
    if (address == null) {
      minumAddress = '';
    } else {
      const temp = String(address);
      minumAddress = temp.slice(0, 5) + "..." + temp.slice(38, 42);
    }
    return minumAddress;
  }


  async handleConnectClick() {
    // console.log("Chain Id: ", window.ethereum.chainId);

    if (typeof window.ethereum === "undefined") {
      console.log("Please install MetaMask!");
      return;
    }

    if (window.ethereum.selectedAddress === null) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        localStorage.setItem('connected', true);
        this.setState({ 'walletAddress': window.ethereum.selectedAddress });
        var minumAddress = this.minum(window.ethereum.selectedAddress);
        this.setState({ 'minumAddress': minumAddress });
        this.setState({ 'connected': true });
        // dispatch(setAddress(window.ethereum.selectedAddress));
      } catch (err) {
        console.log("Error : ", err);
      }
    }

    if (window.ethereum.chainId !== "0x38") {
      console.log("Please choose the BSC mainnet!");
      return;
    }

    if (window.ethereum.selectedAddress !== null) {
      // dispatch(setAddress(window.ethereum.selectedAddress));
      localStorage.setItem('connected', true);
      this.setState({ 'walletAddress': window.ethereum.selectedAddress });
      var minumAddress = this.minum(window.ethereum.selectedAddress);
      this.setState({ 'minumAddress': minumAddress });
      this.setState({ 'connected': true });
      return;
    }

  };

  disconnectWallet() {
    this.setState({ 'connected': false });
    localStorage.setItem('connected', false);
  }

  showDisconnect() {
    this.setState({ 'disconnectFlag': true });
  }

  hideDisconnect() {
    this.setState({ 'disconnectFlag': false });
  }

  toggle() {
    this.setState({ navbarFlag: !this.state.navbarFlag });
  }

  showModal() {
    if (this.emailValidation()) {
      this.setState({ 'modalFlag': true })
      this.setState({ 'textError': '' })
      this.setState({ 'text': '' })
    } else {
      this.setState({
        mailError: "Email is not valid"
      });
    }
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({ 'modalFlag': false })
  }

  submit(e) {
    e.preventDefault();
    // if (this.state.text == '') {
    //   this.setState({ 'textError': 'Input your messages' })
    // } else {
    //   axios.create({
    //     headers: {
    //       baseURL: '/api',
    //       'Content-Type': 'application/json'
    //     }
    //   });

    //   const sendData = {
    //     gmail: this.state.mail,
    //     text: this.state.text
    //   }

    //   axios.post('/api/artworks/', sendData)
    //     .then(res => {
          
    //     })
    //     .catch(err => console.log(err));
    this.setState({ 'modalFlag': false });
    this.setState({ 'mail': '' });
    this.setState({ 'mailError': '' });


      // var bodyFormData = new FormData();
      // bodyFormData.append('gmail', this.state.mail);
      // bodyFormData.append('text', this.state.text);

      // axios({
      //   method: "post",
      //   url: "/api/artworks/",
      //   data: bodyFormData,
      //   headers: { "Content-Type": "multipart/form-data" },
      // })
      //   .then(function (response) {
      //     //handle success
      //     console.log(response);
      //   })
      //   .catch(function (response) {
      //     //handle error
      //     console.log(response);
      //   });




    // }
    // get form data out of state
    // const { first_name, last_name, password, email, phone } = this.state;

    // fetch('/api/artworks/' , {
    //   method: "POST",
    //   headers: {
    //     'Content-type': 'application/json'
    //   }
    //   .then((result) => {
    //     console.log(result)
    //   })
    // })




  }

  mailChange(e) {
    this.setState({ 'mail': e.target.value });
  }

  textChange(e) {
    this.setState({ 'text': e.target.value });
  }

  emailValidation() {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!this.state.mail || regex.test(this.state.mail) === false) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className='main-content-bg'>
        <div className="modal-part" style={{ display: this.state.modalFlag ? 'block' : 'none' }}>
          <div className="modal-con">
            <form>
              <input name="mail" value={this.state.mail} type="hidden" />
              <textarea name="content" className="input-field" value={this.state.text} onChange={this.textChange} />
              <p className="text-error" >{this.state.textError}</p>
              <br />
              <div>
                <button type="button" onClick={this.submit} className="button-explore modal-btn">Send</button>
                <button className="button-join modal-btn" onClick={this.closeModal}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
        <div className="header-image">
          <div className="nav-bar">
            <div className="row">
              <div className="col-lg-7 row">
                <div className="col-lg-5" style={{ textAlign: 'center', zIndex: '1' }}>
                  <span className="header-title">Elite Chess Club</span>
                  <img className="mobile-menu" onClick={this.toggle} src={menuIcon} />
                </div>
                <div className="col-lg-7 header-search-part">
                </div>
              </div>
              <div className="col-lg-5 row link-part" style={{ paddingLeft: '100px', zIndex: '1' }}>
                <a href="https://opensea.io/collection/elitechessclub">
                  <span className="header-link">OpenSea</span>
                </a>
                <a href="http://discord.gg/elitechessclub">
                  <span className="header-link">Discord</span>
                </a>
                <a href="https://www.twitter.com/elitechesshouse">
                  <span className="header-link">Twitter</span>
                </a>
                <img className="header-button" src={headerButton1} />{this.state.connected}
                {this.state.connected ?
                  <div onMouseOver={this.showDisconnect} onMouseOut={this.hideDisconnect} style={{ marginLeft: '10px' }}>
                    <span className="walletBtn">{this.state.minumAddress}</span>
                    <div className="disconnect-part" style={this.state.disconnectFlag ? { display: 'block' } : { display: 'none' }} onClick={this.disconnectWallet}>
                      <p className="mobile-link" style={{ marginBottom: '5px' }}>disconnect</p>
                    </div>
                  </div>
                  :
                  <img className="header-button" src={headerButton2} onClick={this.handleConnectClick} />}
              </div>
            </div>
          </div>
          <div className="mobile-nav-part" style={this.state.navbarFlag ? { display: 'block' } : { display: 'none' }}>
            <div>
              <a href="https://opensea.io/collection/elitechessclub">
                <p className="mobile-link">OpenSea</p>
              </a>
            </div>
            <div>
              <a href="http://discord.gg/elitechessclub">
                <p className="mobile-link">Discord</p>
              </a>
            </div>
            <div>
              <a href="https://www.twitter.com/elitechesshouse">
                <p className="mobile-link">Twitter</p>
              </a>
            </div>
          </div>

          <div className="top-content">
            <div className="row">
              <div className="col-lg-7 first-content-description">
                <p className="title">Welcome to the Elite Chess Club</p>
                <br />
                <p className="description" style={{ nargubTop: '30px' }}>A limited NFT collection where the token itself doubles in value with your membership as you earn daily rewards from our governance token the ECC coin to an Elite Chess Club for Punks and Apes. The club is open! Join in the Elite Chess Club with us and get on the list.</p>
                <p className="description" style={{ nargubTop: '30px' }}>We are committed to achieving our goal map to build a foundation that will thrive and benefit our community.
                  ECC is a collection of 11,000 Luxury Chess Piece Avatar NFTs—unique digital collectibles living on the Ethereum blockchain.</p>
                <p className="description" style={{ nargubTop: '30px' }}>Your Elite Chess Club Avatar grants you access to members-only benefits, the first of which is access to THE ELITE CHESS LOUNGE. We are also releasing Chess Metaverse Lounge on decentraland, where fellow avatars get early game access and lounge access where they can communicate together in our exclusive Chess Metaverse Lounge and get paid with our Play to Earn And Player Vs Player sessions.</p>
              </div>
              <div className="col-lg-5">
                <img className="first-image" src={firstImg} />
              </div>
            </div>
            <div className="col-lg-7 learn-part" style={{ marginTop: '20px' }}>
              <div className="first-btn-content">
                <a href="https://opensea.io/collection/elitechessclub">
                  <button className="button-explore">OpenSea</button>
                </a>
                <a href="http://discord.gg/elitechessclub">
                  <button className="button-join">Join</button>
                </a>
              </div>
              <div className="learn-descript" style={{ display: 'flex', marginTop: '30px' }}>
                <img src={arrowButton} className="arrow-button" />
                <span className="description yellow-letter" style={{ marginLeft: '10px' }} >Learn more about Elite Chess Club</span>
              </div>
            </div>
          </div>
          <div className="drop-part1">
            <div className="feature-part">
              <p className="title">Features</p>
              <SlideCon />
            </div>
            <div>
              <p className="title" style={{ textAlign: 'center', marginTop: '50px' }}>Play and win the ultimate prize</p>
            </div>
            <div className="row lorem-part">
              <div className="col-lg-4 lorem-detail-part">
                <p className="title yellow-letter prize-title" style={{ marginTop: '30px' }}>Play to Earn</p>
                <p className="description prize-description">We have introduced a mechanism for users to earn rewards on my governance token to play and enter friendly matches against other opponents.</p>
              </div>
              <div className="col-lg-4 lorem-detail-part">
                <p className="title yellow-letter prize-title" style={{ marginTop: '30px' }}>NFT Staking</p>
                <p className="description prize-description">Staking Platform coming in place to stake NFT for ECC rewards. Rewards are distributed through the ECC governance coin ecosystem. Rewarding you for holding your NFT and bringing value to art.</p>
              </div>
              <div className="col-lg-4 lorem-detail-part">
                <p className="title yellow-letter prize-title" style={{ marginTop: '30px' }}>Merchandise</p>
                <p className="description prize-description">NFT Holders get Exclusive access to Elite Chess Clubs Metaverse Lounge and merchandise released on the metaverse aswell as real life exclusive merchandise.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="NFTPart">
          <div className="drop-part2">
            <div className="feature-part">
              <p className="title">Features</p>
              <SlideCon />
            </div>
            <div>
              <p className="title" style={{ textAlign: 'center', marginTop: '50px' }}>Play and win the ultimate prize</p>
            </div>
            <div className="row lorem-part">
              <div className="col-lg-4 lorem-detail-part">
                <p className="title yellow-letter prize-title" style={{ marginTop: '30px' }}>Play to Earn</p>
                <p className="description prize-description">We have introduced a mechanism for users to earn rewards on my governance token to play and enter friendly matches against other opponents.</p>
              </div>
              <div className="col-lg-4 lorem-detail-part">
                <p className="title yellow-letter prize-title" style={{ marginTop: '30px' }}>NFT Staking</p>
                <p className="description prize-description">Staking Platform coming in place to stake NFT for ECC rewards. Rewards are distributed through the ECC governance coin ecosystem. Rewarding you for holding your NFT and bringing value to art.</p>
              </div>
              <div className="col-lg-4 lorem-detail-part">
                <p className="title yellow-letter prize-title" style={{ marginTop: '30px' }}>Merchandise</p>
                <p className="description prize-description">NFT Holders get Exclusive access to Elite Chess Clubs Metaverse Lounge and merchandise released on the metaverse aswell as real life exclusive merchandise.</p>
              </div>
            </div>
          </div>
          <div>
            <NFTSlide />
          </div>
          <div style={{ textAlign: 'center', marginTop: '0px' }}>
            <p className="title map-title">Development Map</p>
            <p className="description" style={{ marginTop: '50px' }}>We’re in this for the long haul.
              We’ve set up some goalposts for ourselves.<br /> Once we hit a target sell-through percentage, we will begin to work on bringing the stated goal to the community.<br />
              Launch collection on OpenSea at Live mint day.</p>
          </div>
          <div style={{ marginTop: '40px' }} >
            <RoadmapSlide />
          </div>
        </div>
        <div className="end-part">
          <div className="shadow-part"></div>
        </div>
        <div className='footer-part'>
          <div className="row main-part">
            <div className="col-lg-6">
              <p className="title">Stay in touch</p>
              <p className="description">Why don't you register your email for exclusive chances to win art and get live updates on mint date.</p>
              <div className="sign-part" style={{ display: "flex" }}>
                <div style={{ width: '70%' }}>
                  <input className="email-input" placeholder="Your email address" value={this.state.mail} onChange={this.mailChange} ></input>
                  <br />
                  <p className="error-msg" >{this.state.mailError}</p>
                </div>
                <button className="signup-button" onClick={this.showModal}>Sign Up</button>
              </div>
            </div>
            <div className="col-lg-6 link-part1">
              <p className="title" style={{ textAlign: 'center' }}>Join the community</p>
              <div className="row" style={{ marginTop: '50px' }}>
                <a href="https://twitter.com/elitechesshouse" style={{ margin: 'auto' }}>
                  <img className="link-image" src={link3} />
                </a>
                <a href="https://t.me/elitechessclub" style={{ margin: 'auto' }}>
                  <img className="link-image" src={link2} />
                </a>
                <a href="http://discord.gg/elitechessclub" style={{ margin: 'auto' }}>
                  <img className="link-image" src={link1} />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="row footer-link">
              <div className="col-lg-6">
                <div className="first-link-part" style={{ padding: '0', display: 'flex' }}>
                  <div className="border-left-first" style={{ margin: 'auto' }}>
                    <a href="https://opensea.io/collection/elitechessclub">
                      <p className="title link-word" style={{ fontWeight: 'normal', fontSize: '42px' }}>OpenSea</p>
                    </a>
                  </div>
                  <div className="border-left">
                    <a href="https://t.me/elitechessclub">
                      <p className="title link-word contact-title" style={{ fontWeight: 'normal', fontSize: '42px' }}>Telegram</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="second-link-part" style={{ padding: '0', display: 'flex' }}>
                  <div className="border-left-third" style={{ margin: 'auto' }}>
                    <a href="http://discord.gg/elitechessclub">
                      <p className="title link-word" style={{ fontWeight: 'normal', fontSize: '42px' }}>Discord &nbsp;</p>
                    </a>
                  </div>
                  <div className="border-left">
                    <a href="https://twitter.com/elitechesshouse">
                      <p className="title link-word" style={{ fontWeight: 'normal', fontSize: '42px' }}>Twitter</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="calendar-part">
            <p className="description calendar-prefix">As seen on </p>
            <a href="https://nftcalendar.io/event/the-elite-chess-club/">
              <img src={NFTCalendar} className="calendar-img" />
            </a>
          </div>
          <p style={{ textAlign: 'center', marginBottom: '0px', color: 'white', fontSize: '20px', fontFamily: 'Poppins', marginTop: '50px', paddingBottom: '20px' }}>© 2022 Elite Chess Club. All rights reserved.</p>
        </div>
      </div>
    );
  }
}

export default Landing;