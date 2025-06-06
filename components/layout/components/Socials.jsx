const socialMediaLinks = [
  {
    id: 1,
    class: "icon-facebook",
    href: "https://www.facebook.com/p/Peacock-Line-Mattress-100085836735592/",
  },
  // { id: 2, class: "icon-twitter", href: "#" },
  {
    id: 3,
    class: "icon-instagram",
    href: "https://www.instagram.com/peacockline_mattress/",
  },
  // { id: 4, class: "icon-linkedin", href: "#" },
];

export default function Socials() {
  return (
    <>
      {socialMediaLinks.map((elm, i) => (
        <a key={i} href={elm.href} className={elm.class}></a>
      ))}
    </>
  );
}
