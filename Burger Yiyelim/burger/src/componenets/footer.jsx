import React from 'react'
import "../styles/footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
function footer() {
  return (
    <div className="footerdiv">
        <div className="icons">
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
        </div>
        <div className="info">
            <p>Tüm Haklar Saklıdır | Burger Yiyelim</p>
        </div>
    </div>
  )
}

export default footer