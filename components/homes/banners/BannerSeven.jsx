import Image from "next/image";
import React from "react";

export default function BannerSeven() {
  return (
    <section className="-type-3 cta">
      <div className="cta__bg">
        <Image src="/img/cta/6/bg.jpg" width={1920} height={500} alt="image" />
      </div>

      <div className="container">
        <div className="row justify-between">
          <div className="col-lg-6 col-xl-5">
            <div className="cta__content">
              <h2
                data-aos="fade-up"
                data-aos-delay=""
                className="text-40 text-white lh-13 md:text-24"
              >
                Get 10% off your 1st
                <br className="lg:d-none" />
                Order
              </h2>

              <p
                data-aos="fade-right"
                data-aos-delay=""
                className="text-white mt-10"
              >
                Booking's better on the app. Use promo code
                <br className="lg:d-none" />
              </p>

              {/* <div
                data-aos="fade-up"
                data-aos-delay=""
                className="text-18 text-white md:mt-20 mt-40"
              >
                Get a magic link sent to your email
              </div> */}

              <div data-aos="fade-up" data-aos-delay="" className="mt-10">
                <div className="row -type-2 singleInput x-gap-10 y-gap-10">
                  <div className="col-12 col-md-auto">
                    <input type="email" placeholder="Email" className="" />
                  </div>
                  <div className="col-12 col-md-auto">
                    <button className="col-12 bg-white text-accent-2 -dark-1 -md button">
                      Send
                      <i className="text-16 icon-arrow-top-right ml-10"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div data-aos="fade-up" data-aos-delay="" className="cta__image">
              <Image
                width={667}
                height={500}
                src="/img/cta/1/1.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
