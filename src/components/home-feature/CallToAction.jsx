const CallToAction = () => {
  return (
    <section
      className="py-20 px-4 md:px-10 bg-primary text-white text-center"
      id="cta"
    >
      <h2 className="text-4xl font-bold mb-4">
        Ready to Simplify Your Real Estate Management?
      </h2>
      <p className="mb-6 text-lg">
        Start managing your apartments with ease and efficiency today.
      </p>
      <a
        href="/signup"
        className="inline-block bg-white text-primary font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
      >
        Get Started Now
      </a>
    </section>
  );
};

export default CallToAction;
