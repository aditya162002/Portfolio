import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta px-4 sm:px-0">
      <p className="cta-text text-white">
        Have a project in mind? <br className="sm:block hidden" />
        Let's build something together!
      </p>
      <Link
        to="/contact"
        className="text-white px-6 py-3 rounded-lg inline-block font-medium text-center w-full sm:w-auto"
        style={{ background: "linear-gradient(to right, #111111, #1a1a1a)" }}
      >
        Contact
      </Link>
    </section>
  );
};

export default CTA;
