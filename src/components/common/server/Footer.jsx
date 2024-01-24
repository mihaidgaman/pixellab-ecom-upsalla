import { Separator } from "@/components/ui/server";
import { SecondaryFooter } from "@/components/common/server/SecondaryFooter";

export const Footer = () => {
  return (
    <>
      <section className="container px-4 lg:px-0 mx-auto flex flex-col gap-y-10 pt-24 pb-10">
        <div className="container px-4 lg:px-0 mx-auto flex flex-col gap-y-10 pt-24 pb-10">
          <section className="grid justify-items-center lg:justify-items-start gap-x-3 gap-y-10 grid-cols-2 grid-rows-auto lg:grid-cols-4">
            <div>
              <h1 className="uppercase mb-6 font-bold text-center lg:text-left">
                Los Angeles
              </h1>
              <ul className="flex flex-col items-start justify-center lg:justify-start gap-3 lg:gap-5">
                <li>
                  145 Oliveshka Street{" "}
                  <span className="block">Los Angeles, LA 90003</span>
                </li>

                <li className="transition-colors hover:text-amber-600">
                  <a href="tel:+44 987 065 901" title="Phone Number">
                    +44 987 065 901
                  </a>
                </li>

                <li className="transition-colors hover:text-amber-600">
                  <a href="mailto:info@Example.com" title="Example Title">
                    info@Example.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="uppercase mb-6 font-bold text-center lg:text-left">
                San Francisco
              </h1>
              <ul className="flex flex-col items-start justify-center lg:justify-start gap-3 lg:gap-5">
                <li>
                  210 Pier Street{" "}
                  <span className="block">San Francisco, CA 94111</span>
                </li>

                <li className="transition-colors hover:text-amber-600">
                  <a href="tel:+44 987 065 901" title="Phone Number">
                    +44 987 065 901
                  </a>
                </li>

                <li className="transition-colors hover:text-amber-600">
                  <a href="mailto:info@Example.com" title="Example Title">
                    info@Example.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="uppercase mb-6 font-bold text-center lg:text-left">
                New York
              </h1>
              <ul className="flex flex-col items-start justify-center lg:justify-start gap-3 lg:gap-5">
                <li>
                  711 Snow Street{" "}
                  <span className="block">New York, NY 10014</span>
                </li>

                <li className="transition-colors hover:text-amber-600">
                  <a href="tel:+44 987 065 901" title="Phone Number">
                    +44 987 065 901
                  </a>
                </li>

                <li className="transition-colors hover:text-amber-600">
                  <a href="mailto:info@Example.com" title="Example Title">
                    info@Example.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="uppercase mb-6 font-bold text-center lg:text-left">
                Follow Us
              </h1>
              <ul className="grid gap-x-3 lg:gap-x-10 gap-y-2 grid-cols-2 grid-rows-auto">
                <li className="transition-colors hover:text-amber-600">
                  <a
                    href="http://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                  >
                    Facebook
                  </a>
                </li>

                <li className="transition-colors hover:text-amber-600">
                  <a
                    href="http://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                  >
                    Instagram
                  </a>
                </li>

                <li className="transition-colors hover:text-amber-600">
                  <a
                    href="http://www.dribbble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Dribbble"
                  >
                    Dribbble
                  </a>
                </li>

                <li className="transition-colors hover:text-amber-600">
                  <a
                    href="http://www.pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Pinterest"
                  >
                    Pinterest
                  </a>
                </li>

                <li className="transition-colors hover:text-amber-600">
                  <a
                    href="http://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Twitter"
                  >
                    Twitter
                  </a>
                </li>

                <li className="transition-colors hover:text-amber-600">
                  <a
                    href="http://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Linkedin"
                  >
                    Linkedin
                  </a>
                </li>

                <li className="transition-colors hover:text-amber-600">
                  <a
                    href="http://www.behance.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Behance"
                  >
                    Behance
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>
      <Separator></Separator>

      <section className="container mx-auto px-4">
        <SecondaryFooter></SecondaryFooter>
      </section>
    </>
  );
};
