import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import LoadingSpiner from "../../components/shared/loading/LoadingSpiner";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Agreement = () => {
  const { id } = useParams();
  const axisoSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { data: flat = {}, isLoading } = useQuery({
    queryKey: ["flat", id],
    queryFn: async () => {
      const { data } = await axisoSecure.get(`/agreement-flat/${id}`);
      return data;
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const address = form.address.value;
    const nid = form.nid.value;
    const mobile = form.mobile.value;
    const agree = form.terms.checked;

    if (!agree) {
      return toast.error("You must agree to the terms and conditions.");
    }

    const agreementInfo = {
      flat,
      user: {
        name,
        address,
        nid,
        mobile,
      },
      status: "pending",
    };
    localStorage.setItem("agreement", JSON.stringify(agreementInfo));

    navigate("/payment", { state: agreementInfo });
  };

  console.log(flat);

  if (isLoading) return <LoadingSpiner />;
  return (
    <div className="container mt">
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center font-poppins">
          Flat Rental Agreement
        </h1>
        <hr className="text-gray-300 my-10" />
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-7/12">
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
              <h2 className="text-2xl font-bold text-center text-primary mb-6">
                📝 Flat Agreement Terms & Conditions
              </h2>
              <ol className="list-decimal space-y-4 text-gray-700 pl-6">
                <li>
                  <strong>Agreement Duration:</strong> This rental agreement is
                  valid for a minimum period of 1 year from the date of signing.
                  Early termination requires a 1-month prior notice from either
                  party.
                </li>
                <li>
                  <strong>Rent Payment:</strong> Tenant must pay the monthly
                  rent within the first 5 days of every month. Late payment may
                  incur additional charges or penalties.
                </li>
                <li>
                  <strong>Security Deposit:</strong> A security deposit
                  equivalent to 2 months' rent must be paid in advance. This
                  amount is refundable after contract termination, subject to
                  property inspection.
                </li>
                <li>
                  <strong>Flat Usage:</strong> The flat shall be used for
                  residential purposes only. Subletting or commercial usage is
                  strictly prohibited without written permission from the owner.
                </li>
                <li>
                  <strong>Maintenance & Damages:</strong> The tenant is
                  responsible for keeping the flat clean and reporting any
                  damage. Any damage caused due to negligence must be repaired
                  at the tenant's expense.
                </li>
                <li>
                  <strong>Utilities & Services:</strong> Tenant shall bear all
                  utility bills including gas, water, electricity, and service
                  charges unless otherwise agreed.
                </li>
                <li>
                  <strong>Security & Facilities:</strong> The apartment provides
                  basic security features like CCTV and a security guard.
                  Generator, lift, and parking facilities are subject to
                  availability.
                </li>
                <li>
                  <strong>Violation & Termination:</strong> If any clause of
                  this agreement is violated, the owner reserves the right to
                  terminate the agreement with immediate effect.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> Both parties agree to
                  comply with all relevant local housing and rental laws.
                </li>
                <li>
                  <strong>Agreement Approval:</strong> By clicking "Agree", you
                  confirm that you have read and accepted all the terms and
                  conditions of this agreement.
                </li>
              </ol>
            </div>
          </div>
          <div className="w-full md:w-5/12 bg-white p-6 shadow-lg rounded-lg mt-10">
            <h2 className="text-xl font-bold">Flat Information</h2>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row items-center py-3 border-b border-b-gray-300">
                <div className="w-full md:w-1/2">Apartment Name:</div>
                <div className="flex-1">{flat?.apartment.name}</div>
              </div>
              <div className="flex flex-col lg:flex-row items-center py-3 border-b border-b-gray-300">
                <div className="w-full lg:flex-1">Bedroom: {flat?.bed}</div>
                <div className="w-full lg:flex-1">Balcony: {flat?.balcony}</div>
                <div className="w-full lg:flex-1">
                  Bathroom: {flat?.bathroom}
                </div>
                <div className="w-full lg:flex-1">Store: {flat?.store}</div>
              </div>
              <div className="border-b border-b-gray-300 pb-3">
                <h1 className="w-full">Facility:</h1>
                <div className="flex flex-col lg:flex-row">
                  <div className="w-full lg:w-1/2">
                    Electricity: {flat.electricity ? flat?.electricity : "N/A"}
                  </div>
                  <div className="w-full lg:w-1/2">
                    Generator: {flat.generator ? flat?.generator : "N/A"}
                  </div>
                  <div className="w-full lg:w-1/2">
                    Lift: {flat.lift ? flat?.lift : "N/A"}
                  </div>
                </div>
              </div>
              <div className="border-b border-b-gray-300 pb-3">
                <h1 className="w-full">Address:</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="w-full">Area: {flat?.apartment.area}</div>
                  <div className="w-full">Road: {flat?.apartment.road}</div>
                  <div className="w-full">
                    ApartmentNo: {flat?.apartment.apartmentNo}
                  </div>
                  <div className="w-full">
                    City Corporation: {flat?.apartment.cityCorp}
                  </div>
                </div>
              </div>
              <div className="flex gap-6 bg-primary  p-5 text-white">
                <h2 className="text-2xl font-bold">Monthly Rend:</h2>
                <h2 className="text-2xl font-bold">{flat?.rent}/month</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mt">
          <h1 className="text-2xl font-bold text-center text-primary mb-6">
            Apply Form{" "}
          </h1>
          <div>
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="collum">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full bg-white px-4 py-3 rounded-lg"
                    placeholder="Enter your Number"
                  />
                </div>
                <div className="collum">
                  <label htmlFor="address">Addrss</label>
                  <input
                    type="text"
                    name="address"
                    className="w-full bg-white px-4 py-3 rounded-lg"
                    placeholder="Enter your address"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="collum">
                  <label htmlFor="nid">NID number</label>
                  <input
                    type="text"
                    name="nid"
                    className="w-full bg-white px-4 py-3 rounded-lg"
                    placeholder="Enter your nid"
                  />
                </div>
                <div className="collum">
                  <label htmlFor="mobile">Mobile</label>
                  <input
                    type="tel"
                    name="mobile"
                    className="w-full bg-white px-4 py-3 rounded-lg"
                    placeholder="Enter your mobile"
                  />
                </div>
              </div>
              <div className="py-5 flex items-center gap-5">
                <input type="checkbox" name="terms" className="w-5 h-5" />
                <label htmlFor="terms">
                  I Agree the{" "}
                  <Link className="text-primary font-bold">
                    terms & conditions
                  </Link>
                </label>
              </div>
              <button className="btn btn-filled mx-auto mt-6 py-5">
                Process to payment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agreement;
