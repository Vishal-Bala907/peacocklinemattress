import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import PageHeader from "@/components/tourSingle/PageHeader";
import TourSlider from "@/components/tourSingle/TourSlider";
import SingleThree from "@/components/tourSingle/pages/SingleThree";
import SingleTwo from "@/components/tourSingle/pages/SingleTwo";
import { allTour } from "@/data/tours";

import React from "react";

export const metadata = {
  title: "Peacockline mattress",
  description: "Peacockline mattress",
};

export default function page({ params }) {
  const id = params.id;
  const tour = allTour.find((item) => item.id == id) || allTour[0];

  return (
    <>
      <main>
        <Header1 />
        <PageHeader />

        <SingleThree tour={tour} />
        <TourSlider />
        <FooterOne />
      </main>
    </>
  );
}
