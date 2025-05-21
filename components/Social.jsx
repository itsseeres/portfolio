import Link from "next/link"
import {FaFacebook, FaInstagram, FaYoutube, FaWhatsapp} from 'react-icons/fa'
const socials = [
  {icon: <FaFacebook/>, path:'https://www.facebook.com/itsseeres'},
  {icon: <FaInstagram/>, path:'https://www.instagram.com/seeres_ay?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='},
  {icon: <FaYoutube/>, path:''},
  {icon: <FaWhatsapp/>, path:'https://wa.me/qr/FMFMCO5THAB3H1'},
]
const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index)=>{
        return (
          <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
        )
      })}
    </div>
  )
}

export default Social