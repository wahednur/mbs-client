import { useEffect, useState } from "react";
import {
  FaBuilding,
  FaBullhorn,
  FaChartBar,
  FaHome,
  FaLock,
  FaMoneyBill,
  FaQuestionCircle,
  FaUsers,
} from "react-icons/fa";
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent } from "../../../components/ui/Card";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50"];

const DashboardOverview = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetch("/api/dashboard-stats")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  const rentChartData = [
    { name: "Total", value: stats.totalRent || 30 },
    { name: "Paid", value: stats.paidRent || 120 },
    { name: "Due", value: stats.dueRent || 50 },
    { name: "No Rent", value: stats.noRent || 6 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 p-4">
      <Card>
        <CardContent className="flex items-center gap-4">
          <FaBuilding className="text-3xl text-primary" />
          <div>
            <p className="text-gray-500">Apartments</p>
            <h2 className="text-xl font-bold">{stats.totalApartments || 30}</h2>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center gap-4">
          <FaHome className="text-3xl text-primary" />
          <div>
            <p className="text-gray-500">Flats</p>
            <h2 className="text-xl font-bold">{stats.totalFlats || 100}</h2>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center gap-4">
          <FaUsers className="text-3xl text-primary" />
          <div>
            <p className="text-gray-500">Customers</p>
            <h2 className="text-xl font-bold">{stats.totalUsers || 50}</h2>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center gap-4">
          <FaMoneyBill className="text-3xl text-primary" />
          <div>
            <p className="text-gray-500">Total Rent</p>
            <h2 className="text-xl font-bold">৳{stats.totalRent || 5000000}</h2>
          </div>
        </CardContent>
      </Card>

      {/* Rent Summary Pie Chart */}
      <Card className="col-span-1 md:col-span-2 xl:col-span-4">
        <CardContent>
          <h3 className="text-lg font-semibold mb-4">Rent Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={rentChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                dataKey="value"
                nameKey="name"
              >
                {rentChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Area Wise Apartments Bar Chart */}
      <Card className="col-span-1 md:col-span-2">
        <CardContent>
          <h3 className="text-lg font-semibold mb-4">Area Based Apartments</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stats.areaApartments || []}>
              <XAxis dataKey="area" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Customers */}
      <Card className="col-span-1 md:col-span-2">
        <CardContent>
          <h3 className="text-lg font-semibold mb-4">Recent Customers</h3>
          <ul className="space-y-2">
            {(stats.recentUsers || []).map((user) => (
              <li key={user._id} className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
                <p className="text-primary">Joined: {user.joined}</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Security & Support */}
      <Card>
        <CardContent className="flex items-center gap-4">
          <FaLock className="text-3xl text-primary" />
          <div>
            <p className="text-gray-500">Security & Support</p>
            <p className="text-sm">24/7 secured data & support service</p>
          </div>
        </CardContent>
      </Card>

      {/* Dashboard Preview */}
      <Card>
        <CardContent className="flex items-center gap-4">
          <FaChartBar className="text-3xl text-primary" />
          <div>
            <p className="text-gray-500">Monitoring</p>
            <p className="text-sm">Real-time dashboard activity preview</p>
          </div>
        </CardContent>
      </Card>

      {/* FAQs Section */}
      <Card>
        <CardContent className="flex items-center gap-4">
          <FaQuestionCircle className="text-3xl text-primary" />
          <div>
            <p className="text-gray-500">FAQs</p>
            <p className="text-sm">Common questions & answers for users</p>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card>
        <CardContent className="flex items-center gap-4">
          <FaBullhorn className="text-3xl text-primary" />
          <div>
            <p className="text-gray-500">Need Help?</p>
            <p className="text-sm">Contact our team for more info</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;
