"use client";
import Calender from "@/components/common/dropdownSearch/Calender";
import Location from "@/components/common/dropdownSearch/Location";
import TourType from "@/components/common/dropdownSearch/TourType";
import { FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Hero4() {
  const router = useRouter();
  const [currentActiveDD, setCurrentActiveDD] = useState("");
  const [location, setLocation] = useState("");
  const [calender, setCalender] = useState("");
  const [tourType, setTourType] = useState("");
  useEffect(() => {
    setCurrentActiveDD("");
  }, [location, calender, tourType, setCurrentActiveDD]);
  const dropDownContainer = useRef();
  useEffect(() => {
    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setCurrentActiveDD("");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <section className="-type-4 hero">
      <div className="hero__bg">
        <Image
          width={1920}
          height={860}
          src="/img/new/hero.gif"
          alt="background"
        />
      </div>

      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-lg-9 col-xl-8">
            <h1 data-aos="fade-up" data-aos-delay="100" className="hero__title">
              Bharat&apos;s Trusted Cushion
              <br className="md:d-none" />
              Manufracturing Brand
            </h1>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="hero__filter mt-30"
            >
              <div
                ref={dropDownContainer}
                className="d-flex flex-row align-items-center justify-content-center rounded-5 shadow-1 -type-1 background-white px-3 py-3"
                style={{ backgroundColor: "white", borderRadius: "20px" }}
              >
                <div
                  className="d-flex flex-row align-items-center justify-content-between rounded-5 gap-3"
                  style={{ gap: "30px" }}
                >
                  <div
                    className="btn btn-primary rounded-5 text-white"
                    style={{
                      backgroundColor: "#007eff ! important",
                      width: "fit-content ! important",
                      padding: "10px 20px",
                      borderRadius: "10px",
                    }}
                  >
                    Mattress
                  </div>

                  <div className="js-calendar js-form-dd js-select-control searchFormItem">
                    {/* <div
                      className="searchFormItem__button"
                      onClick={() =>
                        setCurrentActiveDD((pre) =>
                          pre == "calender" ? "" : "calender"
                        )
                      }
                    >
                      <div className="flex-center bg-accent-1-05 rounded-full searchFormItem__icon size-50">
                        <i className="text-20 icon-calendar"></i>
                      </div>
                      <div className="searchFormItem__content">
                        <h5>When</h5>
                        <div>
                          <span className="js-first-date">
                            <Calender active={currentActiveDD === "calender"} />
                          </span>
                          <span className="js-last-date"></span>
                        </div>
                      </div>
                    </div> */}
                    <div
                      className="btn btn-primary rounded-5 text-white"
                      style={{
                        backgroundColor: "#007eff ! important",
                        width: "fit-content ! important",
                        padding: "10px 20px",
                        borderRadius: "10px",
                      }}
                    >
                      Pillows
                    </div>
                  </div>

                  <div className="js-calendar js-form-dd js-select-control searchFormItem">
                    <div
                      className="btn btn-primary rounded-5 text-white"
                      style={{
                        backgroundColor: "#007eff ! important",
                        width: "fit-content ! important",
                        padding: "10px 20px",
                        borderRadius: "10px",
                      }}
                    >
                      Bedsheets and Cushions
                    </div>
                  </div>
                </div>

                {/* <div className="searchForm__button">
                  <FaWhatsapp
                    className="text-success fs-4"
                    style={{ fontSize: "40px", color: "#0eff0e" }}
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
