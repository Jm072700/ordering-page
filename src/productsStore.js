const productsArray = [
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
      },
      {
        id: 5,
        name: 'Galaxy A04s (4GB)',
        price: 9490,
        src: 'https://images.samsung.com/is/image/samsung/assets/ph/mobile/galaxygifts/general-gifting/august-2022/by-price/localized/galaxy-a04s-pc.jpg?$FB_TYPE_J_S_JPG$',
        text: 'Maximize your view to the fullest with the newest Galaxy A04s. Get yours today! Discover the latest in electronic & smart appliance technology with Samsung. Flexible Payment Terms. Free Delivery. Exclusive Deals & Bundles. 24/7 Customer Support.',
      },
      {
        id: 6,
        name: 'Galaxy A13',
        price: 10490,
        src: 'https://images.samsung.com/is/image/samsung/assets/ph/mobile/galaxygifts/general-gifting/august-2022/by-price/localized/galaxy-a13-pc.jpg?$FB_TYPE_J_S_JPG$',
        text: 'Get the awesome Galaxy A13 at an even more awesome price of ₱10,490. More display means more room to play with the Galaxy A13. Hurry and get yours now! Infinity-O Display. Quad Camera. Super-Fast Charging. Samsung Knox Security.',
      },
      {
        id: 7,
        name: 'Galaxy A23 LTE',
        price: 12990,
        src: 'https://images.samsung.com/is/image/samsung/assets/ph/mobile/galaxygifts/general-gifting/august-2022/by-price/localized/galaxy-a23-lte-pc.jpg?$FB_TYPE_J_S_JPG$',
        text: 'Get the Galaxy A23 at an awesome price starting at ₱561/mo for 18 months via HomeCredt. Experience awesome on a simple yet absolute smartphone. Time to get yours today! 24/7 Customer Support. Flexible Payment Terms. Free Delivery. Exclusive Deals & Bundles.',
      },
      {
        id: 8,
        name: 'Galaxy A13 5G',
        price: 14990,
        src: 'https://images.samsung.com/is/image/samsung/assets/ph/mobile/galaxygifts/general-gifting/august-2022/by-price/localized/galaxy-a13-5g-pc.jpg?$FB_TYPE_J_S_JPG$',
        text: 'Experience awesome for as low as ₱1,165.80 per month at 0% interest for 12 months. Awesome new phone for awesome you. Time to get the new Galaxy A13 5G now! Trade-in offers available. Trade-in for a new Galaxy.',
      },
      {
        id: 9,
        name: 'Galaxy A53 5G',
        price: 23490,
        src: 'https://images.samsung.com/is/image/samsung/assets/ph/pcd/smartphones/galaxy-a/mx-pcd-galaxy-a53-5g-pc.png?$FB_TYPE_J_S_PNG$',
        text: 'Get free ITFIT IPX7 waterproof Bluetooth speaker when you buy the new Galaxy A53 5G. Exclusive and awesome deals await when you buy today. Get yours now! Free Delivery. 24/7 Customer Support. Flexible Payment Terms.'
      }
]

function getProductData(id){
    let productData = productsArray.find(product => product.id === id);
    if (productData === undefined){
        console.log('Product data does not exist')
        return undefined
    }
    return productData;
}

export {productsArray, getProductData};