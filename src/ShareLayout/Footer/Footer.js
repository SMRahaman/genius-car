import React from "react";
import logo from "../../assets/logo.svg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-32  bg-black  text-white">
        <div>
          <img src={logo} alt="" className="h-16" />
          <p>
            Edwin Diaz is a software and web
            <br />
            technologies engineer, a life coach <br /> trainer who is also a
            serial .
          </p>
          <div className="flex">
            <FaFacebookF className="text-4xl bg-zinc-500 mr-4 p-3 rounded-full hover:bg-red-700"></FaFacebookF>
            <FaTwitter className="text-4xl bg-zinc-500 mr-4  p-3 rounded-full hover:bg-red-700"></FaTwitter>
            <FaLinkedinIn className="text-4xl bg-zinc-500 mr-4 p-3 rounded-full hover:bg-red-700 "></FaLinkedinIn>
            <FaInstagram className="text-4xl bg-zinc-500 p-3 rounded-full hover:bg-red-700 "></FaInstagram>
          </div>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a href="/" className="link link-hover">
            Branding
          </a>
          <a href="/" className="link link-hover">
            Branding
          </a>
          <a href="/" className="link link-hover">
            Branding
          </a>
          <a href="/" className="link link-hover">
            Design
          </a>
          <a href="/" className="link link-hover">
            Marketing
          </a>
          <a href="/" className="link link-hover">
            Advertisement
          </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href="/" className="link link-hover">
            About us
          </a>
          <a href="/" className="link link-hover">
            Contact
          </a>
          <a href="/" className="link link-hover">
            Jobs
          </a>
          <a href="/" className="link link-hover">
            Press kit
          </a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a href="/" className="link link-hover">
            Terms of use
          </a>
          <a href="/" className="link link-hover">
            Privacy policy
          </a>
          <a href="/" className="link link-hover">
            Cookie policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
