import Navigation from './Navigation.js'
import Hero from './Hero.js'
import Mask from './Mask.js'
import Phone from './Phone.js'
import Footer from './Footer.js'
import Info from './Info.js'
import { useState } from 'react';

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const phones = [
    {
      id: 1,
      name: 'Galaxy Z Fold4',
      price: 98990,
      src: 'https://images.samsung.com/is/image/samsung/assets/ph/mobile/galaxygifts/general-gifting/august-2022/whats-new/Resizing_Galaxy_GiftPage_Whatisnew_Z-Fold4_PC.png?$FB_TYPE_J_S_PNG$',
      text: 'From ₱4,124.58/mo. or ₱98,990 SRP Plus, ₱12,000 discount with trade-in',
      info: 'OS	Android 12, upgradable to Android 13, One UI 5 Chipset	Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm) CPU	Octa-core (1x3.19 GHz Cortex-X2 & 3x2.75 GHz Cortex-A710 & 4x1.80 GHz Cortex-A510) GPU	Adreno 730'
    },
    {
      id: 2,
      name: 'Galaxy Z Flip4',
      price: 58990,
      src: 'https://images.samsung.com/is/image/samsung/assets/ph/mobile/galaxygifts/general-gifting/august-2022/whats-new/Resizing_Galaxy_GiftPage_Whatisnew_Z-Flip4_PC.png?$FB_TYPE_J_S_PNG$',
      text: 'From ₱2,457.92/mo. or ₱58,990 SRP Plus, ₱10,000 discount with trade-in',
      
    },
    {
      id: 3,
      name: 'Galaxy S22 Ultra',
      price: 68990,
      src: 'https://images.samsung.com/is/image/samsung/assets/ph/mobile/galaxygifts/general-gifting/august-2022/whats-new/Whatisnew_S22ultra_PC.png?$FB_TYPE_J_S_PNG$',
      text: 'From ₱5,749.17/mo. or ₱68,990 SRP Plus, ₱8,000 discount with trade-in',
    },
    {
      id: 4,
      name: 'Galaxy Tab S8 Series',
      price: 35692,
      src: 'https://images.samsung.com/is/image/samsung/assets/ph/mobile/galaxygifts/general-gifting/august-2022/whats-new/Whatisnew_Tabs8series_PC.png?$FB_TYPE_J_S_PNG$',
      text: 'From ₱2,974.33/mo. or or ₱35,692 SRP Plus, ₱15,000 discount with trade-in',
    }]
  const phones2 = [{
    id: 5,
    name: 'Galaxy A04s (4GB)',
    price: 9490,
    src: 'https://images.samsung.com/is/image/samsung/assets/ph/mobile/galaxygifts/general-gifting/august-2022/by-price/localized/galaxy-a04s-pc.jpg?$FB_TYPE_J_S_JPG$',
    text: '',
  },
  {
    id: 6,
    name: 'Galaxy A13',
    price: 10490,
    src: 'https://images.samsung.com/is/image/samsung/assets/ph/mobile/galaxygifts/general-gifting/august-2022/by-price/localized/galaxy-a13-pc.jpg?$FB_TYPE_J_S_JPG$',
    text: '',
  },
  {
    id: 7,
    name: 'Galaxy A23 LTE',
    price: 12990,
    src: 'https://images.samsung.com/is/image/samsung/assets/ph/mobile/galaxygifts/general-gifting/august-2022/by-price/localized/galaxy-a23-lte-pc.jpg?$FB_TYPE_J_S_JPG$',
    text: '',
  },
  {
    id: 8,
    name: 'Galaxy A13 5G',
    price: 14990,
    src: 'https://images.samsung.com/is/image/samsung/assets/ph/mobile/galaxygifts/general-gifting/august-2022/by-price/localized/galaxy-a13-5g-pc.jpg?$FB_TYPE_J_S_JPG$',
    text: '',
  }]
  const [info, setInfo] = useState({

  })
  const selected = (id) =>{
    const select = phones.find(x => x.id === id)
    setInfo(select)
  }
  return (
    <div> 
        <Navigation/>
        <Hero/>
        <Mask h1='The latest gift, greatest love' h5='Gift the latest Galaxy and fill them with joy.'/>
        <Phone phones={phones} handleClick={handleShow} handleInfo = {selected}/>
        <Info show={show} onHide={handleClose} info={info}/>
        <Mask h1='The right gift, right price' h5='Find just the right gift for your budget'></Mask>
        <Phone phones={phones2}/>
        <Footer/>
    </div>
  )
}

export default Home