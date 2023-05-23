
 /* the front-end page for the Cancel appointment Page */
function Cancel()
{
    return(
        
        <div className="hero min-h-screen" style={{ backgroundImage: `url("/images/bg-blue-1.svg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-doctor-white">Cancel Appointment</h1>
      <p className="mb-5">Cancel Appointment</p>
      <button className="btn btn-primary bg-gradient-to-r from-doctor-green to-doctor-blue">Get Started</button>
    </div>
  </div>
</div>
    )
}
export default Cancel;