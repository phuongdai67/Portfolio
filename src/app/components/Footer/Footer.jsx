import { footerLinks, languages } from "@/data";
import { socials } from "@/data/personal";
import Logo from "../../Navbar/Logo";

const Footer = () => {
  return (
    <footer className="bg-[#e3d7b3] relative flex min-h-[560px] flex-col justify-between gap-20 overflow-hidden px-4 py-14 md:p-14">
      <div className="relative z-20 grid grid-cols-1 items-start gap-20 md:grid-cols-2 md:gap-12">
        <div>
          {/* <h5 className="mb-8 flex items-center gap-2">
            <Logo width={30} height={24} />
            <span className="text-neutral text-lg font-medium">Logoipsum</span>
          </h5>
          <p className="text-tertiary-content">
            The first free end-to-end analytics service for the site, designed
            to work with enterprises of various levels and business segments.
          </p> */}
          {/* <a
            href="#"
            className="text-neutral mt-4 inline-flex items-center gap-2 text-xs hover:underline"
          >
            More about us{" "}
            <span className="bg-neutral inline-block size-[10px] rounded-full" />
          </a> */}
        </div>

        <div className="flex flex-wrap gap-8">
          {footerLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className="text-tertiary-content hover:text-neutral transition-colors duration-300 hover:underline"
            >
              {link.title}.
            </a>
          ))}
        </div>
      </div>

      <div className="relative z-20 flex flex-col-reverse gap-20 md:grid md:grid-cols-2 md:gap-12">
        <div className="grid grid-cols-2 gap-4">
          <ul className="flex flex-col gap-4">
            {socials.map((item, index) => (
              <li key={index} className="cursor-pointer bg-transparent">
                <a
                  href={item.href}
                  className="text-neutral transition-colors duration-300 hover:text-[#b3b3b3] inline-flex items-center justify-center"
                  style={{ lineHeight: 0 }}
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-tertiary-content flex flex-col self-end text-right text-xs md:text-center">
            <span>© 2025 — Copyright</span>
            <span>All Rights reserved</span>
          </p>
        </div>

        <div className="flex flex-col justify-between gap-[200px] md:flex-row md:gap-8">
          <div className="space-y-10 md:self-end ml-auto">
            <div className="flex flex-col">
              <h5 className="text-neutral mb-4 text-lg font-medium text-[#b57b41]">
                Liên hệ
              </h5>
              <a
                href="mailto:johndoe@gmail.com"
                className="text-tertiary-content hover:text-neutral text-sm font-light transition-colors duration-300"
              >
                phuongdai676@gmail.com
              </a>
              <a
                href="tel:+92 3123456789"
                className="text-tertiary-content hover:text-neutral text-sm font-light transition-colors duration-300"
              >
                +84 354847366
              </a>
            </div>
            <div>
              {/* <div>
                <h5 className="text-neutral mb-4 text-lg font-medium">
                  Location
                </h5>
                <address className="text-tertiary-content flex flex-col text-sm font-light">
                  <span>123456, Pakistan</span>
                  <span>Karachi 22/5/8, Office 4</span>
                </address>
              </div> */}
            </div>
          </div>

          {/* <div className="md:self-end">
            <p className="text-neutral mb-8 text-sm md:text-right">Languages</p>
            <div className="flex gap-8 md:gap-4 lg:gap-8">
              {languages.map((language, idx) => (
                <span
                  key={language}
                  className={
                    idx === 0 ? "text-neutral" : "text-tertiary-content"
                  }
                >
                  {language}
                </span>
              ))}
            </div>
          </div> */}
        </div>
      </div>

      <div className="bg-[#ded2af] absolute top-1/2 -right-[40%] z-0 h-[120dvw] w-[120dvw] -translate-y-1/2 rounded-full p-14 md:top-0 md:-right-[255px] md:-bottom-[450px] md:size-[1030px] md:-translate-y-0 md:p-20">
        <div className="bg-[#d9cdab] size-full rounded-full p-14 md:p-20">
          <div className="bg-[#d4c6a5] size-full rounded-full" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
