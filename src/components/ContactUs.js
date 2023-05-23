 /* the code for the 'Contact Us' component on the landing page */
function ContactUs()
{
    return(
      <div>
         
         <div className="hero min-h-screen my-40" style={{ backgroundImage: `url("images/bg-blue-1.svg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl text-doctor-white my-3">Stay Connected</h1>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-doctor-white">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <button className="btn btn-primary  bg-gradient-to-r from-doctor-green to-doctor-blue ">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
</div>
        </div>
     
    )
}
export default ContactUs;