const FAQSection = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-white" id="faq">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div>
          <h4 className="font-semibold text-lg">Is this platform secure?</h4>
          <p className="text-gray-600">
            Yes, we use secure authentication, SSL encryption, and
            database-level protection.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-lg">
            Can I manage multiple apartments?
          </h4>
          <p className="text-gray-600">
            Absolutely! You can add unlimited apartments, each with their own
            flats, tenants, and rent agreements.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-lg">
            Is there any support available?
          </h4>
          <p className="text-gray-600">
            Yes! You’ll have email, phone, and live chat support around the
            clock.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
