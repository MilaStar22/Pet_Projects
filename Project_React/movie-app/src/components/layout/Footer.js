import sprite from "../img/sprites.svg";
import NavWithImg from "../nav/NavWithImg";
import instagram from "../img/instagram-icon.png";
import facebook from "../img/facebook-icon.png";
import logo from "../img/logo.png";

const links = {
  class: 'social',
  links: [
    {
      link: "instagram",
      path: "/",
      img: instagram
    },
  {
    link: "facebook",
    path: "/movies",
    img: facebook
  },
  ]
}
const email = {
  mail: 'hello@faimemedia.com',
  description: 'Response within 24hrs'
};
const phone = {
  phone: '+91 555 0303 420',
  description: 'Mon - Fri / 9 am - 5:30 pm'
}
function Footer() {
  return (
    <footer>
      <div className={'footer-top container'}>
        <div className={'mail'}>
          <a href="mailto: email.mail">{email.mail}</a>
          <span>{email.description}</span>
        </div>
        <div className={'phone'}>
          <a href="tel: phone.phone">{phone.phone}</a>
          <span>{phone.description}</span>
        </div>
      </div>
      <img src={logo} alt="logo" />
      <svg>
        <use href={sprite + "#icon-location"} />
      </svg>
      Footer
      <NavWithImg links={links.links}  class={links.class}/>
    </footer>
  );
}

export default Footer;
