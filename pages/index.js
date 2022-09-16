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

      <section id="supercharge">
        <div className="section-container my-20">
          <h3>Supercharge your workflow</h3>
          <p className="section-content mb-16 text-xl">
            We've got the tools to boost your productivity.
          </p>

          {/* Items Container */}
          <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
            <div className="flex flex-col items-center space-y-5">
              <img src="/img/icon-blacklist.svg" alt="" className="mb-6" />
              <h5>Create Blacklists</h5>
              <p className="max-w-md text-gray-700">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <img src="/img/icon-text.svg" alt="" className="mb-6" />
              <h5>Plain Text Snippets</h5>
              <p className="max-w-md text-gray-700">
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-5">
              <img src="/img/icon-preview.svg" alt="" className="mb-6" />
              <h5>Sneak Preview</h5>
              <p className="max-w-md text-gray-700">
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="references">
        <div className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0">
          <img src="/img/logo-google.png" alt="google" />
          <img src="/img/logo-ibm.png" alt="ibm" />
          <img src="/img/logo-microsoft.png" alt="microsoft" />
          <img src="/img/logo-hp.png" alt="hp" />
          <img src="/img/logo-vector-graphics.png" alt="vector" />
        </div>
      </section>

      <section id="bottom">
        <div className="section-container my-20">
          <h3>Clipboard for iOS and MacOS</h3>
          <p className="section-content mb-10 text-xl">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you're ready to start adding to your clipboard.
          </p>

          <div className="button-container">
            {" "}
            <a href="#" className="section-button bg-cyan-800">
              Download for iOS
            </a>
            <a href="#" className="section-button bg-blue-500">
              Download for Mac
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50">
        <div className="section-container">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <img src="/img/logo.svg" alt="logo" className="scale-50" />

            <div className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 text-gray-700 md:flex-row md:mb-0 md:space-y-0 ">
              {/* Menus */}

              <div className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0">
                {/* Menu 1 */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-cyan-800">
                      FAQs
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-cyan-800">
                      Contact Us
                    </a>
                  </div>
                </div>

                {/* Menu 2 */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-cyan-800">
                      Privacy Policy
                    </a>
                  </div>
                  <div>
                    <a href="#" className="hover:text-cyan-800">
                      Press Kit
                    </a>
                  </div>
                </div>

                {/* Menu 3 */}
                <div className="flex flex-col space-y-4 text-center md:text-left">
                  <div>
                    <a href="#" className="hover:text-cyan-800">
                      Install Guide
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex justify-between w-32 py-1">
                <a href="#">
                  <img
                    src="/img/icon-facebook.svg"
                    alt="facebook"
                    className="duration-200 ficon"
                  />
                </a>
                <a href="#">
                  <img
                    src="/img/icon-twitter.svg"
                    alt="twitter"
                    className="duration-200 ficon"
                  />
                </a>
                <a href="#">
                  <img
                    src="/img/icon-instagram.svg"
                    alt="instagram"
                    className="duration-200 ficon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
