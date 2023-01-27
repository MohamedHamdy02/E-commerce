import React from "react";
import { client } from "e-commerce/lib/client";
import { Product, FooterBanner, HeroBanner } from "../../e-commerce/components";

function Home({ products, bannerData, footerData }) {
  return (
    <div>
      <HeroBanner heroBanner={bannerData?.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner FooterBanner={footerData.length && footerData[0]} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  const footerQuery = '*[_type == "footer"]';
  const footerData = await client.fetch(footerQuery);

  return {
    props: { products, bannerData, footerData },
  };
};

export default Home;
