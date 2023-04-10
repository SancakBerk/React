import React from 'react'
import Image from "../images/banneryeni.jpg"
import "../styles/about.css"
import Footer from './footer'
function about() {
  return (
    <div className="aboutdiv">
      <img src={Image} alt="" className='ımage' />
      <h2 className='header'>Hakkımızda</h2>
      <p className='info'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat consequuntur saepe eaque assumenda, voluptatem dolorum, sapiente facilis voluptas laboriosam facere temporibus delectus possimus nulla unde. Similique sapiente soluta rem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, eligendi excepturi! Sint ipsam nemo quasi velit aspernatur officiis, impedit veritatis cupiditate temporibus accusantium nisi. Dignissimos dolore inventore aspernatur voluptate non? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, optio quidem modi architecto dignissimos veritatis. Iste veritatis, recusandae impedit voluptate temporibus error ad voluptatum dolorum nostrum nam totam optio quo.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat consequuntur saepe eaque assumenda, voluptatem dolorum, sapiente facilis voluptas laboriosam facere temporibus delectus possimus nulla unde. Similique sapiente soluta rem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, eligendi excepturi! Sint ipsam nemo quasi velit aspernatur officiis, impedit veritatis cupiditate temporibus accusantium nisi. Dignissimos dolore inventore aspernatur voluptate non? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, optio quidem modi architecto dignissimos veritatis. Iste veritatis, recusandae impedit voluptate temporibus error ad voluptatum dolorum nostrum nam totam optio quo.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis quaerat consequuntur saepe eaque assumenda, voluptatem dolorum, sapiente facilis voluptas laboriosam facere temporibus delectus possimus nulla unde. Similique sapiente soluta rem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, eligendi excepturi! Sint ipsam nemo quasi velit aspernatur officiis, impedit veritatis cupiditate temporibus accusantium nisi. Dignissimos dolore inventore aspernatur voluptate non? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, optio quidem modi architecto dignissimos veritatis. Iste veritatis, recusandae impedit voluptate temporibus error ad voluptatum dolorum nostrum nam totam optio quo.</p>
      <Footer/>
    </div>
  )
}

export default about