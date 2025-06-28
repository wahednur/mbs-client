import img1 from "/dash.png";
const DashboardPreview = () => {
  return (
    <section className="py-16 px-4 md:px-10 " id="dashboard">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Dashboard Monitoring
      </h2>
      <div className="flex flex-col items-center">
        <img
          src={img1}
          alt="Dashboard preview"
          className="rounded-lg shadow-xl max-w-full w-[90%] md:w-[70%]"
        />
        <p className="text-center mt-6 text-gray-100 max-w-xl">
          View all your apartments, flats, tenants, payments, coupons, and
          agreement statuses in a single place. Fully real-time and actionable.
        </p>
      </div>
    </section>
  );
};

export default DashboardPreview;
