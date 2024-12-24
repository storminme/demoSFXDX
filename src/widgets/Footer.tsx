import Frame from '../assets/Frame.svg';
import Frame2142 from '../assets/Frame 2142.png';

const Footer = () => {
  return (
    <div className="w-full border-t border-stroke bg-background-light">
      <footer className="min-h-[150px] w-[90%] mx-auto flex flex-col gap-10 tablet:gap-0 tablet:grid tablet:grid-cols-3 tablet:grid-rows-2 py-5">
        <div className="justify-center items-center tablet:items-start row-span-2 w-full flex flex-col space-y-3 text-desktop-text-m text-text-secondary text-nowrap">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="hover:underline"
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="hover:underline"
          >
            Cookie Policy
          </a>
        </div>
        <div className="flex justify-center items-end">
          <img
            src={Frame}
            alt="SFXDX"
            className="max-w-full tablet:max-h-full max-h-[20px] object-contain"
          />
        </div>
        <div className="flex tablet:justify-end justify-center tablet:items-end items-center">
          <img
            src={Frame2142}
            alt="social"
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div className="flex items-center justify-center text-nowrap text-desktop-text-m text-text-secondary">
          <span>©2022 All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
