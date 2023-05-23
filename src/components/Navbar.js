 /* the code for the Navigation Bar component on every page */
function Navbar(){
    return(
        <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Doctor's Portal</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
    <li><a className="bg-doctor-black text-[#d4d9e3]">Home</a></li>
      <li><a>About</a></li>
      <li><a>Appointment</a></li>
      <li><a>Cancel Appointment</a></li>
      <li><a>Contact Us</a></li>
      <li><a>Login</a></li>
      
    </ul>
  </div>
</div>



    )
}
    export default Navbar;