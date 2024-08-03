import React from 'react';
import Link from 'next/link'; // Use Link for navigation

const Footer = () => {
  return (
    <div>
      <footer className="bg-cyan-700 mt-20">
        <section className="flex flex-col md:flex-row justify-between items-center p-6">
          <div className="brand flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0">
            <Link href="#" passHref>
              <img
                src="/logo.jpeg"
                width={50}
                height={50}
                alt="logo"
                className="mt-2"
              />
            </Link>
            <p className="text-white mt-2 text-2xl">Aparna Public School</p>
            <p className="text-white text-lg ml-4">Chowka , Jharkand</p>
            <p className="text-white text-lg ml-10">832404</p>
          </div>

          <section
            id="connect"
            className="py-10 px-2 text-white text-center flex flex-col items-center"
          >
            <h1 className='text-2xl -mt-10 mb-4'>Follow us on</h1>
            <div className="text-xl flex flex-wrap justify-center gap-6">
              <div className="rounded-full border-2 border-blue-700 bg-indigo-900 p-6">
                <Link href="/" target="_blank">
                  <img
                    src="/Vector4.png"
                    width={20}
                    height={20}
                    alt="Telegram logo"
                  />
                </Link>
              </div>

              <div className="rounded-full border-2 border-blue-700 bg-indigo-900 p-6">
                <Link href="/" target="_blank">
                  <img
                    src="/Vector2.png"
                    width={18}
                    height={18}
                    alt="X logo"
                  />
                </Link>
              </div>

              <div className="rounded-full border-2 border-blue-700 bg-indigo-900 p-6">
                <Link href="/" target="_blank">
                  <img
                    src="/Vector5.png"
                    width={16}
                    height={16}
                    alt="Instagram logo"
                  />
                </Link>
              </div>
            </div>
          </section>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
