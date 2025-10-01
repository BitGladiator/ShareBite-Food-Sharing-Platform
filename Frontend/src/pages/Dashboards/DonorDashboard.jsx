import React, { useState } from "react";
import {
  Package,
  Truck,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  Calendar,
  MapPin,
  Plus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const DonorDashboard = () => {
  const [activeTab, setActiveTab] = useState("donations");
  const navigate = useNavigate();
  // Stats data
  const stats = [
    {
      label: "Total Donations",
      value: "24",
      change: "+5 this month",
      icon: Package,
      color: "text-blue-600",
    },
    {
      label: "Meals Provided",
      value: "1,240",
      change: "+120 this week",
      icon: Users,
      color: "text-green-600",
    },
    {
      label: "Active Pickups",
      value: "3",
      change: "Scheduled",
      icon: Truck,
      color: "text-orange-600",
    },
    {
      label: "Impact Score",
      value: "98%",
      change: "Excellent",
      icon: TrendingUp,
      color: "text-purple-600",
    },
  ];

  // Donations data
  const donations = [
    {
      id: 1,
      type: "Fresh Vegetables",
      quantity: "25 kg",
      status: "completed",
      recipient: "Hope Community Center",
      date: "Jan 15, 2024",
      impact: "125 meals",
    },
    {
      id: 2,
      type: "Prepared Meals",
      quantity: "50 units",
      status: "in-progress",
      recipient: "City Shelter",
      date: "Jan 14, 2024",
      impact: "50 meals",
    },
    {
      id: 3,
      type: "Bakery Items",
      quantity: "15 kg",
      status: "scheduled",
      recipient: "Youth Center",
      date: "Jan 16, 2024",
      impact: "45 meals",
    },
  ];

  const statusConfig = {
    completed: { color: "bg-green-100 text-green-800", icon: CheckCircle },
    "in-progress": { color: "bg-blue-100 text-blue-800", icon: Clock },
    scheduled: { color: "bg-orange-100 text-orange-800", icon: Calendar },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="inline-flex items-center space-x-2 ">
                <div className="w-9 h-9 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  ShareBite
                </span>
              </div>
              <span className="mx-4 text-gray-300">|</span>
              <span className="text-gray-700 font-medium">Donor Dashboard</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  John Restaurant
                </p>
                <p className="text-sm text-gray-500">Premium Donor</p>
              </div>
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                JR
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      {/* <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: "overview", label: "Overview" },
              { id: "donations", label: "My Donations" },
              { id: "schedule", label: "Schedule Pickup" },
              { id: "impact", label: "Impact" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav> */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, John!
          </h1>
          <p className="text-gray-600 mt-2">
            Here's your donation activity and impact summary.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Quick Actions
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <button onClick={()=>navigate("/donor-form")} className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200">
              <Plus className="w-5 h-5" />
              <span>New Donation</span>
            </button>
            <button onClick={()=>{navigate("/schedule-pick")}} className="cursor-pointer flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <Calendar className="w-5 h-5" />
              <span>Schedule Pickup</span>
            </button>
            <button onClick={()=>navigate('/view-recp')} className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <Users className="w-5 h-5" />
              <span>View Recipients</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Donations */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  Recent Donations
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                {donations.map((donation) => {
                  const StatusIcon = statusConfig[donation.status].icon;
                  return (
                    <div
                      key={donation.id}
                      className="px-6 py-4 hover:bg-gray-50 transition-colors duration-150"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <Package className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">
                              {donation.type}
                            </p>
                            <p className="text-sm text-gray-500">
                              {donation.recipient}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                              statusConfig[donation.status].color
                            }`}
                          >
                            <StatusIcon className="w-4 h-4 mr-1" />
                            {donation.status.replace("-", " ")}
                          </span>
                          <p className="text-sm text-gray-500 mt-1">
                            {donation.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 mt-3 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Package className="w-4 h-4" />
                          <span>{donation.quantity}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{donation.impact}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>Pickup scheduled</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Impact Summary */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Impact Summary
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Food Saved</span>
                  <span className="font-semibold text-gray-900">240 kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">CO₂ Reduced</span>
                  <span className="font-semibold text-gray-900">180 kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">People Helped</span>
                  <span className="font-semibold text-gray-900">1,240</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Community Partners</span>
                  <span className="font-semibold text-gray-900">12</span>
                </div>
              </div>
            </div>

            {/* Upcoming Pickups */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Upcoming Pickups
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Truck className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      Fresh Vegetables
                    </p>
                    <p className="text-sm text-gray-500">Today, 2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Truck className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Bakery Items</p>
                    <p className="text-sm text-gray-500">Tomorrow, 10:00 AM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-green-600 rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-4">This Month</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Donations Made</span>
                  <span className="font-bold">5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Meals Provided</span>
                  <span className="font-bold">320</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>New Partners</span>
                  <span className="font-bold">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>
              &copy; 2024 FoodBridge. Making a difference, one meal at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DonorDashboard;
