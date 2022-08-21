import React from "react";
import { Link } from "react-router-dom";
import PackageCard from "../../components/PackageCard/PackageCard";

function MarketplacePage() {

  return (

    

    <div>
      
      <div className="w-full flex items-center justify-center my-12">
        <div className="absolute top-40 lg:top-32 bg-white shadow rounded py-12 lg:px-28 px-8">
          <div className="flex items-center">
          <Link to="/account/profile" className="sub-menu-inactive">
              Profile
            </Link>
            <Link to="/account/api" className="sub-menu-inactive">
              API
            </Link>
            <Link to="/account/billing" className="sub-menu-inactive">
              Billing
            </Link>
            <Link to="/account/marketplace" className="sub-menu-active">
              Marketplace
            </Link>
          </div>


          <div className="flex items-end mt-8">
            <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
              Account
            </p>
            <p className="md:text-2xl text-md leading-7 text-center text-gray-700 ml-1 lg:md-2">
              Marketplace
            </p>
          </div>

          <div className="text-center">
            <PackageCard
              content1="Basic"
              content2="30 days one time plan. "
              content5="Suitable for newly deployed platforms or platforms having testing purposes. "
              content3="$19"
              content4="Per 30 days"
              selected={true}
              status="selected"
            ></PackageCard>

            <PackageCard
              content1="Standard"
              content2="1 year time plan."
              content5="More suitable for stable platforms with short term business strategies. "
              content3="$59"
              content4="Per 1 year"
              selected={false}
              status="Change Plan"
            ></PackageCard>

            <PackageCard
              content1="Premium"
              content2="3 years time plan."
              content5="Suitble for more stable platforms with long term business strategies. "
              content3="$200"
              content4="Per 3 years"
              selected={false}
              status="Change Plan"
            ></PackageCard>
          </div>

        </div>
      </div>
    </div>
  );

}

export default MarketplacePage;