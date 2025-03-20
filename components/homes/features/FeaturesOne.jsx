import { features } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function FeaturesOne() {
  return (
    <section className="layout-pt-xl">
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <h2 data-aos="fade-up" className="text-30 md:text-24">
              Why Choose Peacock Line Mattress?
            </h2>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="row -w-280 md:x-gap-20 mobile-css-slider pt-40 sm:pt-20"
        >
          {features.map((elm, i) => (
            <div key={i} className="col-lg-3 col-sm-6">
              <div className="-type-1 featureIcon md:pr-0 pr-40">
                <div className="featureIcon__icon">
                  <Image width={60} height={60} src={elm.iconSrc} alt="icon" />
                </div>

                <h3 className="text-18 featureIcon__title fw-500 mt-30">
                  {elm.title}
                </h3>
                <p className="featureIcon__text mt-10">{elm.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
