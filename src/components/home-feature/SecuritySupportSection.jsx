import { BsShieldLockFill } from "react-icons/bs";
import { TbClock24 } from "react-icons/tb";
const SecuritySupportSection = () => {
  return (
    <section
      className="py-16 px-4 md:px-10 bg-white border-t border-gray-100"
      id="security"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
        Security & Support
      </h2>
      <div className="grid md:grid-cols-2">
        <div className=" bg-green-500 p-5 text-white">
          <div className="flex items-center gap-2 mb-4">
            <BsShieldLockFill className="text-3xl" />
            <h3 className="text-xl font-semibold">Secure & Private</h3>
          </div>
          <p className="text-white">
            We use industry-standard encryption and authentication to keep your
            data safe. All user activity is tracked and audit-logged for
            transparency.
          </p>
        </div>
        <div className="bg-blue-500 text-white p-5">
          <div className="flex items-center gap-2 mb-4">
            {" "}
            <TbClock24 className="text-3xl" />
            <h3 className="text-xl font-semibold">24/7 Support</h3>
          </div>
          <p className="text-white">
            Our dedicated support team is always here to help — whether you’re
            onboarding or need technical assistance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecuritySupportSection;
