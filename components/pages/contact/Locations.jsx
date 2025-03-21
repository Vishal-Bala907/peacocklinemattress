const locations = [
  {
    id: 1,
    title: "Address",
    address: "G 298 ,ipia Bhamashamandi,Kota, Rajasthan",
    contact: "",
  },
  {
    id: 2,
    title: "Contact ",
    address: "+91 7014003729",
    // contact: "+91 7014003729",
  },
  {
    id: 3,
    title: "Mail",
    address: "Shivanksolanki@gmail.com",
    // contact: "33-800-987-654 europe@tourz.com",
  },
  // {
  //   id: 4,
  //   title: "Asia",
  //   address: "Tokyo, Japan",
  //   contact: "81-800-567-890 asia@tourz.com",
  // },
];

export default function Locations() {
  return (
    <section className="layout-pt-lg">
      <div className="container">
        <div className="row y-gap-30">
          {locations.map((elm, i) => (
            <div key={i} className="col-lg-3 col-sm-6">
              <div className="px-30 text-center">
                <h3 className="text-30 md:text-24 fw-700">{elm.title}</h3>

                <div className="mt-20 md:mt-10">
                  {elm.address}
                  <br />
                  <br />
                  {elm.contact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
