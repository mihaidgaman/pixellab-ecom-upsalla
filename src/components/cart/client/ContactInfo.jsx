import Link from 'next/link';

export const ContactInfo = () => {
  return (
    <section className="lg:w-3/6">
      <h1 className="text-3xl uppercase font-medium text-center lg:text-left my-7">
        Contact info
      </h1>

      <p className="mb-2">
        Had land. Days so Kind also. Of beginning night sixth. Man day in.
        Fruitful female called firmament from, make meat multiply to image tree
        midst day don&apos;t under open waters.
      </p>

      <div>
        <ul className="flex flex-col items-start justify-center lg:justify-start gap-3 lg:gap-5">
          <li>
            <span className="font-bold">Address: </span>
            145 Oliveshka Street, Los Angeles, LA 90003
          </li>

          <li className="transition-colors hover:text-amber-600">
            <span className="font-bold">Phone: </span>
            <Link href="tel:+44 987 065 901">
              <span title="+44 987 065 901">+44 987 065 901</span>
            </Link>
          </li>

          <li className="transition-colors hover:text-amber-600">
            <span className="font-bold">Email: </span>
            <Link href="mailto:info@Example.com">
              <span title="info@Example.com">info@Example.com</span>
            </Link>
          </li>

          <li className="transition-colors hover:text-amber-600">
            <span className="font-bold">Fax: </span>
            <Link href="+44 987 065 901">
              <span title="+44 987 065 901">+44 987 065 901</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
