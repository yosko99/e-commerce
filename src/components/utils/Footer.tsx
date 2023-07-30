import React from 'react';

import { Image } from 'react-bootstrap';
import { AiTwotonePhone } from 'react-icons/ai';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { LiaFaxSolid } from 'react-icons/lia';
import { MdMail } from 'react-icons/md';

import CompaniesImg from '../../assets/global/companies.webp';
import CenteredItems from '../../styles/CenteredItems';
import CategoryDropdown from '../category/CategoryDropdown';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-white text-muted mt-5">
      <CenteredItems className="border-bottom container text-center text-md-start">
        <Image
          src={CompaniesImg}
          fluid
          className="w-75"
          style={{ objectFit: 'contain', width: '500px', height: '120px' }}
        />
      </CenteredItems>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Brand name</h6>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                sapiente commodi soluta non, repudiandae ipsam quidem molestias
                obcaecati? Dignissimos.
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Categories</h6>
              <CategoryDropdown gender="Men" className="ms-0 mt-3" />
              <CategoryDropdown gender="Women" className="mt-3 ms-0" />
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <BsFillHouseDoorFill className="me-3" />
                Ruse, Bulgaria
              </p>
              <p>
                <MdMail className="me-3" />
                yusuf.bikov99@gmail.com
              </p>
              <p>
                <AiTwotonePhone className="me-3" />+ 01 234 567 88
              </p>
              <p>
                <LiaFaxSolid className="me-3" />+ 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: ' rgba(0, 0, 0, 0.025)' }}
      >
        © 2021 Copyright:
        <a
          className="text-reset fw-bold"
          target="_blank"
          href="https://github.com/yosko99"
          rel="noreferrer"
        >
          {' '}
          yosko99
        </a>
      </div>
    </footer>
  );
};

export default Footer;
