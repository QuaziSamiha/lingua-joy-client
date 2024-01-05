const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <section className="mt-16">
        <footer className="footer flex flex-col lg:flex-row justify-center lg:justify-evenly items-center p-10 bg-base-200 text-base-content">
          <nav className="lg:ml-24">
            <header className="footer-title text-[#703e78]">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="lg:ml-24">
            <header className="footer-title text-[#703e78]">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="lg:ml-24">
            <header className="footer-title text-[#703e78]">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form className="lg:ml-24">
            <header className="footer-title text-[#703e78]">Newsletter</header>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary bg-[#ba68c8] border-[#ba68c8] text-white join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </footer>
        <div className="footer footer-center font-bold p-4 bg-base-300 text-[#703e78]">
          <aside>
            <p>
              Copyright © {currentYear} - All right reserved by LinguaJoy.Com
            </p>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Footer;
