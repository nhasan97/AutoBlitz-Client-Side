import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-[rgb(10,10,10)] px-28 py-10">
      <footer className="footer p-10 text-white grid-cols-4 gap-6">
        <div className="">
          <img src={logo} alt="" className="" />
          <p>
            <span className="font-rac text-xl">Auto Blitz.</span>
            <br />
            Providing reliable tech since 1992
          </p>
        </div>
        <div>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>

        <div>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>

        <div className="relative">
          {/* <header className="footer-title"></header> */}
          <div className="bg-white text-black p-3 rounded-lg absolute top-0 left-0 translate-x-[50%] translate-y-[-50%]">
            <h2 className="text-base font-bold">
              Book test drive! <br></br> Contact Us
            </h2>
          </div>
          <form className="p-10 rounded-lg border ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered bg-[rgba(255,255,255,0.3)]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Message</span>
              </label>
              <input
                type="text"
                placeholder="Message"
                className="input input-bordered bg-[rgba(255,255,255,.3)]"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-red-500 text-white border-none outline-none">
                Send
              </button>
            </div>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
