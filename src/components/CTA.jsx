import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text text-white">
        Have a project in mind? <br className="sm:block hidden" />
        Let's build something together!
      </p>
      <Link
        to="/contact"
        className="text-white px-4 py-2 rounded-lg inline-block"
        style={{ background: "linear-gradient(to right, #111111, #1a1a1a)" }}
      >
        Contact
      </Link>
    </section>
  );
};

export default CTA;
