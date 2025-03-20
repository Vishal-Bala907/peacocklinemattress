import React from "react";
import Stars from "../common/Stars";

export default function MainInformation({ tour }) {
  return (
    <>
      <div className="row justify-between items-end y-gap-20">
        <div className="col-auto">
          <div className="row items-center x-gap-10 y-gap-10">
            {/* <div className="col-auto">
              <button className="bg-accent-1-05 rounded-200 text-14 text-accent-1 -accent-1 button px-15 py-5">
                Bestseller
              </button>
            </div>
            <div className="col-auto">
              <button className="bg-light-1 rounded-200 text-14 -accent-1 button px-15 py-5">
                Free cancellation
              </button>
            </div> */}
          </div>

          <h2 className="text-40 lh-14 mt-20 sm:text-30">
            {tour?.title.split(" ").slice(0, 7).join(" ")}

            <br />
            {tour?.title.split(" ").slice(7).join(" ")}
          </h2>

          {/* <div className="row items-center pt-20 x-gap-20 y-gap-20">
            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="d-flex pr-10 x-gap-5">
                  <Stars star={tour?.rating} font={12} />
                </div>
                {tour?.rating} ({tour.ratingCount})
              </div>
            </div>

            <div className="col-auto">
              <div className="d-flex items-center">
                <i className="text-16 icon-pin mr-5"></i>
                {tour?.location}
              </div>
            </div>

            <div className="col-auto">
              <div className="d-flex items-center">
                <i className="text-16 icon-reservation mr-5"></i>
                30K+ booked
              </div>
            </div>
          </div> */}
        </div>

        {/* <div className="col-auto">
          <div className="d-flex x-gap-30 y-gap-10">
            <a href="#" className="d-flex items-center">
              <i className="flex-center text-16 icon-share mr-10"></i>
              Share
            </a>

            <a href="#" className="d-flex items-center">
              <i className="flex-center text-16 icon-heart mr-10"></i>
              Wishlist
            </a>
          </div>
        </div> */}
      </div>
    </>
  );
}
