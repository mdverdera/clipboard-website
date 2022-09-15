import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clipboard Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* Hero Section */}
      <section id="hero">
        <div className="section-container mb-40 pt-16">
          <img src="/img/logo.svg" alt="logo" className="mx-auto my-16" />

          <h3>A history of everything you copy</h3>

          <p className="section-content mb-10 text-2xl">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>

          {/* Button Container */}
          <div className="button-container">
            <a href="#" className="section-button bg-cyan-800">
              Download for iOS
            </a>
            <a href="#" className="section-button bg-blue-500">
              Download for Mac
            </a>
          </div>
        </div>
      </section>

      <section id="snippets">
        <div className="section-container my-20">
          <h3>Keep track of your snippets</h3>
          <p className="section-content mb-24 text-xl">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
      </section>

      <section id="features">
        <div className="section-container my-20">
          <div className="relative flex flex-col md:flex-row md:space-x-32">
            <div className="md:w-1/2">
              <img
                src="/img/image-computer.png"
                alt="screen"
                className="md:absolute top-0 right-[50%]"
              />
            </div>

            {/* Items Container */}
            <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
              {/* Item 1 */}
              <div className="">
                <h5>Quick Search</h5>
                <p className="max-w-md text-gray-700">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>

              {/* Item 2 */}
              <div className="">
                <h5>iCloud Sync</h5>
                <p className="max-w-md text-gray-700">
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>

              {/* Item 3 */}
              <div className="">
                <h5>Completely History</h5>
                <p className="max-w-md text-gray-700">
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="access">
        <div className="section-container my-20">
          <h3>Access Clipboard Anywhere</h3>
          <p className="section-content mb-24 text-xl">
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>

          <img src="/img/image-devices.png" alt="devices" className="mx-auto" />
        </div>
      </section>
    </>
  );
}
