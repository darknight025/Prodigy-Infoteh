import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"

function Navbar() {
  return (
    <div className="navbar">
      
      <Sidebar/>

      <div className="wrapper">

        <div className="logo">

          <img src="/favicon.ico" alt=""/>
         <span>Nishant Surve</span>

    </div>

  <div className="social">
    <a href="https://twitter.com/NishantS208"><img src="/Twitter.png" alt="" /></a>
    <a href="https://www.instagram.com/nishantsurve57?igshid=YTQwZjQ0NmI0OA=="><img src="/instagram.png" alt="" /></a>
    <a href="https://www.linkedin.com/in/nishant-surve-148973214/"><img src="/LinkedIN.png" alt="" /></a>
    <a href="https://github.com/Nishansurve"><img src="/Github.png" alt="" /></a>
  </div>
      </div>
    </div>
  )
}

export default Navbar