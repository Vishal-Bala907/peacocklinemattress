import React from "react";
import MainInformation from "../MainInformation";
import OthersInformation from "../OthersInformation";
import Overview from "../Overview";
import Included from "../Included";
import Map from "@/components/tours/Map";
import Faq from "../Faq";
import Rating from "../Rating";
import Reviews from "../Reviews";
import TourSingleSidebar from "../TourSingleSidebar";
import Gallery1 from "../Galleries/Gallery1";
import DateCalender from "../DateCalender";
import RoadMap2 from "../Roadmap2";
import CommentBox from "../CommentBox";
import TrendingDestinationsTwo from "@/components/homes/destinations/TrendingDestinationsTwo";
import TestimonialsThree from "@/components/homes/testimonials/TestimonialsThree";
import { FaWhatsapp } from "react-icons/fa";
import { green } from "@mui/material/colors";

export default function SingleOne({ tour, id }) {
  return (
    <>
      <section className="">
        <div className="container">
          <MainInformation tour={tour} />
          <Gallery1 id={id} />
          <a
            href="https://wa.me/917014003729"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex justify-content-end mt-4"
            style={{ cursor: "pointer" }}
          >
            <button
              className="flex flex-row btn btn-secondary text-white gap-4"
              style={{
                backgroundColor: "#2c5300 ! important",
                width: "fit-content ! important",
                padding: "10px 20px",
                borderRadius: "10px",
                gap: "20px",
              }}
            >
              Send Query
              <FaWhatsapp
                style={{
                  fontSize: "25px",
                  color: "limegreen",
                }}
                className="ms-2"
              />
            </button>
          </a>
        </div>
      </section>

      <section className="js-pin-container layout-pt-md">
        <div className="container">
          <div className="row justify-between y-gap-30">
            <div className="col-lg-8">
              <div className="row justify-between items-center layout-pb-md y-gap-20">
                {/* <OthersInformation /> */}
              </div>

              <Overview id={id} />

              <div className="line mb-60 mt-60"></div>

              <h2 className="text-30">What's included</h2>

              <Included />

              <div className="line mb-60 mt-60"></div>

              {/* <h2 className="text-30">Itinerary</h2>

              <RoadMap2 /> */}
              {/* 
              <h2 className="text-30 mb-30 mt-60">Tour Map</h2>
              <div className="mapTourSingle">
                <Map />
              </div> */}

              {/* <div className="line mb-60 mt-60"></div>

              <h2 className="text-30">Availability Calendar</h2>
              <DateCalender /> */}

              <div className="line mb-60 mt-60"></div>

              <h2 className="text-30">FAQ</h2>

              <div className="row -simple accordion js-accordion mt-30 y-gap-20">
                <Faq />
              </div>

              <div className="line mb-60 mt-60"></div>

              <h2 className="text-30">Customer Reviews</h2>

              <div className="mt-30">{/* <Rating /> */}</div>

              {/* <Reviews /> */}
              {/* <div className="mt-50">
                <TrendingDestinationsTwo />
              </div> */}

              {/* <button className="text-accent-1 -md -outline-accent-1 button mt-30">
                See more reviews
                <i className="text-16 icon-arrow-top-right ml-10"></i>
              </button>
              <CommentBox /> */}
            </div>

            <div className="col-lg-4">
              <div className="d-flex justify-end js-pin-content">
                {/* <TourSingleSidebar /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <TestimonialsThree />
    </>
  );
}
