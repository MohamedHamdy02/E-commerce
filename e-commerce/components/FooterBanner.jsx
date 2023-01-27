import React from 'react'
import { urlFor } from 'e-commerce/lib/client'
import Link from 'next/link'

function FooterBanner({ FooterBanner: { footerDiscount, footerLargeText1, footerLargeText2, footerSaleTime, footerSmallText, footerMidText, footerDesc, footerProduct, footerButtonText, footerImage } }) {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <p>{footerDiscount}</p>
          <h3>{footerLargeText1}</h3>
          <h3>{footerLargeText2}</h3>
          <p>{footerSaleTime}</p>
        </div>
        <div className='right'>
          <p>{footerSmallText}</p>
          <h3>{footerMidText}</h3>
          <p>{footerDesc}</p>
          <Link href={`/product/${footerProduct}`}>
            <button type='button'>
              {footerButtonText}
            </button>
          </Link>
        </div>
          <img src={urlFor(footerImage)} className='footer-banner-image' alt="footer-image" />
      </div>
    </div>
  )
}

export default FooterBanner