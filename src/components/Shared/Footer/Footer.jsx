const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <section className="mt-16">
        <footer className="footer flex flex-col lg:flex-row justify-center lg:justify-evenly items-center py-10 lg:p-10 bg-base-200 text-base-content">
          <nav className="lg:ml-24 text-[#703e78]">
            {/* TODO : LOGO OR WEBSITE NAME */}
            <p className="uppercase font-bold text-xl lg:text-3xl">linguajoy</p>
            <p className="font-medium text-sm">Learn languages, Make the world small</p>
          </nav>
          <nav className="lg:ml-24 text-[#703e78]">
            {/* TODO: SOCIAL ICON */}
            <header className="footer-title ">Company</header>
             <p className=" ">About us</p>
             <p className=" ">Contact</p>
             <p className=" ">Jobs</p>
             <p className=" ">Press kit</p>
          </nav>
          <nav className="lg:ml-24">
            <header className="footer-title text-[#703e78]">Legal</header>
             <p className="">Terms of use</p>
             <p className=" ">Privacy policy</p>
             <p className=" ">Cookie policy</p>
          </nav>
          <form className="m-2 lg:ml-24 text-[#703e78]">
            <header className="footer-title ">Newsletter</header>
            <fieldset className="form-control w-36 lg:w-80">
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
        <div className="footer footer-center font-semibold md:font-bold text-xs lg:text-sm p-2 lg:p-4 bg-base-300 text-[#703e78]">
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
