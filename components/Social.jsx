import Link from "next/link"
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa'
const socials = [
  {icon: <FaFacebook/>, path:''},
  {icon: <FaInstagram/>, path:''},
  {icon: <FaYoutube/>, path:''},
  {icon: <FaTwitter/>, path:''},
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