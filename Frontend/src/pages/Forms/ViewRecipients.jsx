import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Search, 
  Filter,
  MapPin,
  Users,
  Phone,
  Globe,
  Star,
  Heart,
  Clock,
  CheckCircle,
  Building,
  Home
} from 'lucide-react';

const ViewRecipients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('rating');

  // Mock recipients data
  const recipients = [
    {
      id: 'RC-001',
      name: 'Hope Community Center',
      type: 'Community Center',
      category: 'shelter',
      description: 'Providing meals and support to homeless families and individuals in downtown area.',
      address: '123 Main Street, Downtown',
      phone: '(555) 123-4567',
      website: 'www.hopecommunity.org',
      rating: 4.8,
      reviews: 124,
      distance: '1.2 km',
      hours: 'Mon-Sun: 8AM-8PM',
      needs: ['Fresh Produce', 'Prepared Meals', 'Bakery Items'],
      capacity: 'Large',
      verified: true,
      image: '🏠'
    },
    {
      id: 'RC-002',
      name: 'City Youth Shelter',
      type: 'Youth Shelter',
      category: 'shelter',
      description: 'Supporting homeless youth with meals, education, and shelter services.',
      address: '456 Oak Avenue, Midtown',
      phone: '(555) 234-5678',
      website: 'www.cityyouthshelter.org',
      rating: 4.9,
      reviews: 89,
      distance: '2.5 km',
      hours: '24/7',
      needs: ['Prepared Meals', 'Snacks', 'Beverages'],
      capacity: 'Medium',
      verified: true,
      image: '👨‍🎓'
    },
    {
      id: 'RC-003',
      name: 'Family Support NGO',
      type: 'Non-Profit',
      category: 'ngo',
      description: 'Helping low-income families with food assistance and social services.',
      address: '789 Pine Road, Eastside',
      phone: '(555) 345-6789',
      website: 'www.familysupport.org',
      rating: 4.7,
      reviews: 203,
      distance: '3.1 km',
      hours: 'Mon-Fri: 9AM-6PM',
      needs: ['Canned Goods', 'Dairy', 'Baby Food'],
      capacity: 'Large',
      verified: true,
      image: '👨‍👩‍👧‍👦'
    },
    {
      id: 'RC-004',
      name: 'Senior Care Home',
      type: 'Elderly Care',
      category: 'care',
      description: 'Providing nutritious meals to elderly residents in our care facility.',
      address: '321 Elm Street, Westend',
      phone: '(555) 456-7890',
      website: 'www.seniorcarehome.org',
      rating: 4.6,
      reviews: 67,
      distance: '4.2 km',
      hours: 'Daily: 7AM-9PM',
      needs: ['Soft Foods', 'Dairy', 'Fruits'],
      capacity: 'Small',
      verified: true,
      image: '👵'
    },
    {
      id: 'RC-005',
      name: 'Community Kitchen',
      type: 'Food Bank',
      category: 'foodbank',
      description: 'Serving free meals to anyone in need, no questions asked.',
      address: '654 Maple Drive, Northside',
      phone: '(555) 567-8901',
      website: 'www.communitykitchen.org',
      rating: 4.5,
      reviews: 156,
      distance: '1.8 km',
      hours: 'Mon-Sat: 11AM-7PM',
      needs: ['Fresh Produce', 'Grains', 'Prepared Meals'],
      capacity: 'Large',
      verified: true,
      image: '🍲'
    },
    {
      id: 'RC-006',
      name: 'Children Foundation',
      type: 'Children NGO',
      category: 'ngo',
      description: 'Supporting underprivileged children with education and nutrition programs.',
      address: '987 Cedar Lane, Southside',
      phone: '(555) 678-9012',
      website: 'www.childrenfoundation.org',
      rating: 4.9,
      reviews: 178,
      distance: '5.1 km',
      hours: 'Mon-Fri: 8AM-5PM',
      needs: ['Snacks', 'Juices', 'Healthy Foods'],
      capacity: 'Medium',
      verified: true,
      image: '🧒'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'shelter', label: 'Shelters' },
    { value: 'ngo', label: 'NGOs' },
    { value: 'care', label: 'Care Homes' },
    { value: 'foodbank', label: 'Food Banks' }
  ];

  const sortOptions = [
    { value: 'rating', label: 'Highest Rated' },
    { value: 'distance', label: 'Nearest' },
    { value: 'name', label: 'Name A-Z' },
    { value: 'reviews', label: 'Most Reviews' }
  ];

  // Filter and sort recipients
  const filteredRecipients = recipients
    .filter(recipient => {
      const matchesSearch = recipient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          recipient.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || recipient.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'distance':
          return parseFloat(a.distance) - parseFloat(b.distance);
        case 'name':
          return a.name.localeCompare(b.name);
        case 'reviews':
          return b.reviews - a.reviews;
        default:
          return 0;
      }
    });

  const getCapacityColor = (capacity) => {
    switch (capacity) {
      case 'Large': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-blue-100 text-blue-800';
      case 'Small': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                S
              </div>
              <span className="text-xl font-bold text-gray-900">ShareBite</span>
            </div>
            <span className="mx-4 text-gray-300">|</span>
            <span className="text-gray-700 font-medium">Our Recipients</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Recipient Partners</h1>
          <p className="text-gray-600 mt-2">
            Discover organizations making a difference in our community. These verified partners 
            ensure your donations reach those who need them most.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search recipients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <Users className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">{recipients.length}</div>
            <div className="text-sm text-gray-600">Total Partners</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <Building className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">6</div>
            <div className="text-sm text-gray-600">Cities Served</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <Heart className="w-8 h-8 text-red-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">15K+</div>
            <div className="text-sm text-gray-600">Meals Monthly</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">100%</div>
            <div className="text-sm text-gray-600">Verified</div>
          </div>
        </div>

        {/* Recipients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipients.map(recipient => (
            <div key={recipient.id} className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200">
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-2xl">
                      {recipient.image}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{recipient.name}</h3>
                      <p className="text-sm text-gray-600">{recipient.type}</p>
                    </div>
                  </div>
                  {recipient.verified && (
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  )}
                </div>

                <p className="text-sm text-gray-600 line-clamp-2">{recipient.description}</p>
              </div>

              {/* Details */}
              <div className="p-6 space-y-3">
                {/* Rating and Distance */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium text-gray-900">{recipient.rating}</span>
                    <span className="text-gray-500">({recipient.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{recipient.distance}</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>{recipient.address}</span>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>{recipient.hours}</span>
                </div>

                {/* Capacity */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Capacity:</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCapacityColor(recipient.capacity)}`}>
                    {recipient.capacity}
                  </span>
                </div>

                {/* Current Needs */}
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Currently Needs:</h4>
                  <div className="flex flex-wrap gap-1">
                    {recipient.needs.slice(0, 3).map((need, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs font-medium"
                      >
                        {need}
                      </span>
                    ))}
                    {recipient.needs.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        +{recipient.needs.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-gray-50 rounded-b-lg border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
                    View Details
                  </button>
                  <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-200 text-sm font-medium">
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredRecipients.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No recipients found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria to find more recipients.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default ViewRecipients;