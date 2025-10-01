import React, { useState } from 'react';
import { 
  Users, 
  Package, 
  Truck, 
  Calendar,
  Clock,
  MapPin,
  Heart,
  AlertCircle,
  Settings
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RecipientDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();
  // Stats data
  const stats = [
    { 
      label: 'Meals Served', 
      value: '1,240', 
      change: '+120 this week',
      icon: Users,
      color: 'text-blue-600'
    },
    { 
      label: 'Active Donations', 
      value: '8', 
      change: '+2 today',
      icon: Package,
      color: 'text-green-600'
    },
    { 
      label: 'Scheduled Pickups', 
      value: '3', 
      change: 'Tomorrow',
      icon: Truck,
      color: 'text-orange-600'
    },
    { 
      label: 'People Helped', 
      value: '420', 
      change: '+35 this week',
      icon: Heart,
      color: 'text-purple-600'
    }
  ];

  // Upcoming pickups
  const upcomingPickups = [
    {
      id: 'PK-001',
      donor: 'Fresh Market Co.',
      items: 'Fresh Vegetables, Fruits',
      quantity: '25 kg',
      scheduledTime: 'Today, 2:00 PM',
      status: 'on-time'
    },
    {
      id: 'PK-002',
      donor: 'City Bakery',
      items: 'Bread, Pastries',
      quantity: '15 kg',
      scheduledTime: 'Tomorrow, 10:00 AM',
      status: 'scheduled'
    },
    {
      id: 'PK-003',
      donor: 'Restaurant Elite',
      items: 'Prepared Meals',
      quantity: '40 units',
      scheduledTime: 'Jan 18, 3:00 PM',
      status: 'scheduled'
    }
  ];

  // Recent donations
  const recentDonations = [
    {
      id: 'DN-001',
      donor: 'Green Grocers',
      items: 'Assorted Vegetables',
      quantity: '20 kg',
      received: '2 hours ago',
      status: 'received'
    },
    {
      id: 'DN-002',
      donor: 'Bakery Central',
      items: 'Bread & Pastries',
      quantity: '12 kg',
      received: '5 hours ago',
      status: 'received'
    },
    {
      id: 'DN-003',
      donor: 'Corporate Office',
      items: 'Packaged Meals',
      quantity: '35 units',
      received: 'Yesterday',
      status: 'distributed'
    }
  ];

  // Urgent needs
  const urgentNeeds = [
    { item: 'Fresh Fruits', priority: 'high', quantity: '15 kg' },
    { item: 'Dairy Products', priority: 'medium', quantity: '20 units' },
    { item: 'Canned Goods', priority: 'low', quantity: '30 cans' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                  S
                </div>
                <span className="text-xl font-bold text-gray-900">ShareBite</span>
              </div>
              <span className="mx-4 text-gray-300">|</span>
              <span className="text-gray-700 font-medium">Recipient Dashboard</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">Hope Community Center</p>
                <p className="text-sm text-gray-500">Verified Recipient</p>
              </div>
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-semibold">
                HC
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'donations', label: 'Donations' },
              { id: 'pickups', label: 'Pickups' },
              { id: 'needs', label: 'Needs' },
              { id: 'reports', label: 'Reports' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-emerald-500 text-emerald-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Hope Community Center</h1>
          <p className="text-gray-600 mt-2">Here's your recent activity and upcoming schedule.</p>
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
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Pickups */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Upcoming Pickups</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {upcomingPickups.map((pickup) => (
                  <div key={pickup.id} className="px-6 py-4 hover:bg-gray-50 transition-colors duration-150">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{pickup.donor}</h4>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        pickup.status === 'on-time' 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {pickup.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{pickup.items}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Package className="w-4 h-4" />
                        <span>{pickup.quantity}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{pickup.scheduledTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Donations */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Recent Donations</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {recentDonations.map((donation) => (
                  <div key={donation.id} className="px-6 py-4 hover:bg-gray-50 transition-colors duration-150">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{donation.donor}</p>
                        <p className="text-sm text-gray-600">{donation.items}</p>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          donation.status === 'received' 
                            ? 'bg-green-100 text-green-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {donation.status}
                        </span>
                        <p className="text-sm text-gray-500 mt-1">{donation.received}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      <span>Quantity: {donation.quantity}</span>
                      <span>ID: {donation.id}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Urgent Needs */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Urgent Needs</h3>
              </div>
              <div className="p-6 space-y-4">
                {urgentNeeds.map((need, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{need.item}</p>
                      <p className="text-sm text-gray-600">{need.quantity}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      need.priority === 'high' 
                        ? 'bg-red-100 text-red-800'
                        : need.priority === 'medium'
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {need.priority}
                    </span>
                  </div>
                ))}
                <button className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200 font-medium">
                  Update Needs
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">This Week</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Meals Served</span>
                  <span className="font-semibold text-gray-900">320</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Families Helped</span>
                  <span className="font-semibold text-gray-900">85</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Food Received</span>
                  <span className="font-semibold text-gray-900">120 kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Active Donors</span>
                  <span className="font-semibold text-gray-900">12</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button onClick={()=>navigate('/req-donation')} className="w-full text-left p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <Package className="w-5 h-5 text-emerald-600" />
                    <span className="font-medium text-gray-900">Request Donation</span>
                  </div>
                </button>
                <button onClick={()=>navigate("/donor-pickup")} className="w-full text-left p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-emerald-600" />
                    <span className="font-medium text-gray-900">Schedule Pickup</span>
                  </div>
                </button>
                <button onClick={()=>navigate('/update-prof')} className="w-full text-left p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-center space-x-3">
                    <Settings className="w-5 h-5 text-emerald-600" />
                    <span className="font-medium text-gray-900">Update Profile</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecipientDashboard;