"use client";

import { homes, pages, tours } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Menu() {
  const pathname = usePathname();
  return (
    <>
      <div className="ml-30 xl:d-none">
        <div className="desktopNav">
          <div className="desktopNav__item">
            <a
              className={
                pathname?.split("/")[1].split("-")[0] == "home"
                  ? "activeMenu"
                  : ""
              }
              href="/"
            >
              Home
            </a>

            {/* <div className="desktopNavSubnav">
              <div className="desktopNavSubnav__content">
                {homes.map((elm, i) => (
                  <div key={i} className="text-dark-1 desktopNavSubnav__item">
                    <Link
                      className={pathname == elm.href ? "activeMenu" : ""}
                      href={elm.href}
                    >
                      {elm.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          {/* <div className="desktopNav__item">
            <a href="#">
              Mattress <i className="icon-chevron-down"></i>
            </a>

            <div className="desktopNavMega">
              <div className="desktopNavMega__container">
                <div className="desktopNavMega__lists">
                  {tours.map((elm, i) => (
                    <div key={i} className="desktopNavMega-list">
                      <div className="desktopNavMega-list__item">
                        <div className="desktopNavMega-list__title">
                          {elm.title}
                        </div>

                        <div className="desktopNavMega-list__list">
                          {elm.links.map((elm2, i2) => (
                            <div key={i2} className="desktopNavMega-list__link">
                              <Link href={elm2.href}>{elm2.title}</Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="desktopNavMega__info">
                  <div className="row specialCardGrid y-gap-30">
                    <div className="col-12">
                      <div className="specialCard">
                        <div className="specialCard__image">
                          <Image
                            width={615}
                            height={300}
                            src="/img/cta/10/1.jpg"
                            alt="image"
                          />
                        </div>

                        <div className="specialCard__content">
                          <div className="specialCard__subtitle">
                            Enjoy Upto
                          </div>
                          <h3 className="specialCard__title">60 % OFF</h3>
                          <div className="specialCard__text">
                            on Your Booking
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="specialCard">
                        <div className="specialCard__image">
                          <Image
                            width={615}
                            height={300}
                            src="/img/cta/10/2.jpg"
                            alt="image"
                          />
                        </div>

                        <div className="specialCard__content">
                          <div className="specialCard__subtitle">
                            80% Discount
                          </div>
                          <h3 className="specialCard__title">
                            Are You Ready
                            <br /> To Turkey Tour
                          </h3>
                          <div className="specialCard__text"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="desktopNav__item">
            <Link href="/tour-single-1/2">Pillows</Link>
          </div>

          <div className="desktopNav__item">
            <Link href="/tour-single-1/4">Bedsheets and Cushions</Link>
          </div>

          <div className="desktopNav__item">
            <a href="#">
              Mattress <i className="icon-chevron-down"></i>
            </a>

            <div className="desktopNavSubnav">
              <div className="desktopNavSubnav__content">
                {pages.map((elm, i) => (
                  <div key={i} className="text-dark-1 desktopNavSubnav__item">
                    {elm.href ? (
                      <Link href={elm.href}>{elm.title}</Link>
                    ) : (
                      <a href="#">
                        {elm.title} <i className="icon-chevron-right"></i>
                      </a>
                    )}

                    {elm.subnav && (
                      <div className="desktopNavSubnav">
                        <div className="desktopNavSubnav__content">
                          {elm.subnav.map((elm2, i2) => (
                            <div key={i2} className="desktopNavSubnav__item">
                              <Link href={elm2.href}>{elm2.title}</Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="desktopNav__item">
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
}
