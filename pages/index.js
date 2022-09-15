import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero">
        <div className="max-w-6xl mx-auto text-center mb-40 px-10 pt-16">
          <img src="/img/logo.svg" alt="logo" className="mx-auto my-16" />

          <h3>A history of everything you copy</h3>

          <p className="section-content mb-10 text-2xl">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>

          {/* Button Container */}
          <div className="flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
            <a href="#" className="section-button bg-cyan-800">
              Download for iOS
            </a>
            <a href="#" className="section-button bg-blue-500">
              Download for Mac
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
