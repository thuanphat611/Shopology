import { QRCodeSVG } from "qrcode.react";
import { Link } from "react-router-dom";

import {
  Send,
  GooglePlay,
  AppStore,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from "@/assets/svg";

export default function Footer() {
  return (
    <div className="bg-black">
      <div className="pt-20 pb-[60px] w-full max-w-screen-xl px-10 lg:px-0 lg:mx-auto flex items-start justify-center sm:justify-between flex-wrap gap-x-12 gap-y-12">
        <div className="min-w-[252px] flex flex-col text-text-white">
          <h5 className="mb-6 leading-none text-[24px] font-semibold">
            Shopology
          </h5>
          <h5 className="mb-6 leading-none text-[20px]">Subscibe</h5>
          <p className="mb-4 leading-none text-[16px]">
            Get 10% off your first order
          </p>
          <div className="transition has-[:focus]:border-second-red max-w-[217px] flex items-center py-3 px-4 rounded-[4px] border-white border-[1.5px] gap-x-2">
            <input
              type="text"
              placeholder="Enter your email"
              className="flex w-0 bg-transparent outline-none grow"
            />
            <button>
              <Send />
            </button>
          </div>
        </div>

        <div className="min-w-[252px] flex flex-col text-text-white">
          <h5 className="mb-6 leading-none text-[20px]">Support</h5>
          <p className="max-w-[252px] mb-4 leading-none text-[16px]">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="mb-4 leading-none text-[16px]">
            shopology.support@gmail.com
          </p>
          <p className="mb-4 leading-none text-[16px]">+88015-88888-9999</p>
        </div>

        <div className="min-w-[252px] flex flex-col text-text-white">
          <h5 className="mb-6 leading-none text-[20px]">Quick link</h5>
          <Link
            to=""
            className="mb-4 leading-none text-[16px] hover:text-second-red"
          >
            Privacy Policy
          </Link>
          <Link
            to=""
            className="mb-4 leading-none text-[16px] hover:text-second-red"
          >
            Terms Of Use
          </Link>
          <Link
            to=""
            className="mb-4 leading-none text-[16px] hover:text-second-red"
          >
            FAQ
          </Link>
          <Link
            to="contact"
            className="mb-4 leading-none text-[16px] hover:text-second-red"
          >
            Contact
          </Link>
        </div>

        <div className="min-w-[252px] flex flex-col text-text-white">
          <h5 className="mb-6 leading-none text-[20px]">Download App</h5>
          <p className="opacity-70 font-medium text-[12px] leading-none mb-2">
            Save $3 with App New User Only
          </p>
          <div className="flex mb-6 gap-x-2">
            <QRCodeSVG value="https://github.com/thuanphat611" marginSize={1} size={80}/>
            <div className="flex flex-col justify-between">
              <GooglePlay height="30" />
              <AppStore height="34" />
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <Link to="" className="hover:text-button-red">
              <Facebook />
            </Link>
            <Link to="" className="hover:text-button-red">
              <Twitter />
            </Link>
            <Link to="" className="hover:text-button-red">
              <Instagram />
            </Link>
            <Link to="" className="hover:text-button-red">
              <LinkedIn />
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-4 pb-6 border-t-[1px] opacity-40 border-white">
        <p className="text-[16px] text-white text-center">
          The original design of this website is{" "}
          <a
            target="_blank"
            href="https://www.figma.com/community/file/1219312065205187851"
            className="font-semibold hover:text-second-red hover:cursor-pointer"
          >
            here
          </a>
        </p>
      </div>
    </div>
  );
}
