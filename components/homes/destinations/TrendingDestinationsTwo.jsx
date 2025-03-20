import { destinationsEight } from "@/data/destinations";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TrendingDestinationsTwo() {
  return (
    <section className="bg-dark-1 layout-pb-xl layout-pt-xl">
      <div className="container">
        <div className="row justify-between items-end y-gap-10">
          <div className="col-auto">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="text-30 text-white md:text-24"
            >
              Trending Products
            </h2>
          </div>

          {/* <div className="col-auto">
            <Link
              href={"/tour-list-1"}
              data-aos="fade-left"
              data-aos-delay=""
              className="d-flex text-white buttonArrow items-center"
            >
              <span>See all</span>
              <i className="text-16 icon-arrow-top-right ml-10"></i>
            </Link>
          </div> */}
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay=""
          className="row justify-between pt-40 sm:pt-20 y-gap-30"
        >
          {destinationsEight.map((elm, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <Link
                href={`/tour-single-1/${i}`}
                className="-hover-image-scale -type-4 featureCard"
              >
                <div className="rounded-12 -hover-image-scale__image featureCard__image ratio ratio-3:4">
                  <Image
                    width={450}
                    height={600}
                    src={elm.imgSrc}
                    alt="image"
                    className="img-ratio"
                  />
                </div>

                <div className="text-center featureCard__content">
                  <h4 className="text-20 text-white fw-500">{elm.name}</h4>
                  <div className="text-14 text-white lh-14">
                    {elm.tourCount}+ Purchases
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
