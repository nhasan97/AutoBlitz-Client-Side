import logo from "../assets/logo.png";
import Container from "./shared/Container";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[rgb(10,10,10)] py-10">
      <Container>
        <footer className="w-full footer text-[#b3b3b3] grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="w-full md:col-span-2 md:pr-6">
            <img src={logo} alt="" className="w-1/4" />
            <p className="text-justify">
              <span className="font-rac text-xl">Auto Blitz.</span>
              <br />
              Explore our curated selection of premium vehicles, offering
              unmatched quality and performance. With easy online browsing and
              expert support, finding your dream car has never been easier.
              Drive with confidence—shop with us today.
            </p>
          </div>

          <div className="w-full md:col-span-1">
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>

          <div className="w-full md:col-span-1">
            <header className="footer-title">Policies</header>
            <a className="link link-hover">Return</a>
            <a className="link link-hover">Refund</a>
            <a className="link link-hover">After Sales</a>
          </div>

          <div className="w-full md:col-span-1">
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>

          {/* <div className="relative">
          <header className="footer-title"></header>
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
        </div> */}
        </footer>

        <footer className="footer footer-center mt-20">
          <aside>
            <p className="bg-[rgba(255,255,255,.3)] text-[#050505] font-semibold p-2 rounded-full">
              Copyright © {year} - All right reserved by AutoBlitz.com
            </p>
          </aside>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
