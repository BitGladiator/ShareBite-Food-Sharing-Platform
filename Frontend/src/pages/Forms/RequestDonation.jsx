import React, { useState } from 'react';

const RequestDonation = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    category: '',
    quantity: '',
    unit: 'kg',
    urgency: 'medium',
    neededBy: '',
    description: '',
    specialRequirements: ''
  });

  const categories = [
    'Fresh Produce',
    'Prepared Meals',
    'Bakery Items',
    'Dairy Products',
    'Meat & Poultry',
    'Canned Goods',
    'Beverages',
    'Baby Food',
    'Other'
  ];

  const units = ['kg', 'lbs', 'units', 'liters', 'boxes', 'packages'];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation request submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center text-gray-600 hover:text-gray-900 mr-4"
            >
              ← Back
            </button>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center text-white font-bold text-sm mr-3">
                S
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ShareBite</h1>
                <p className="text-sm text-gray-600">Request Donation</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg border border-gray-200">
          {/* Form Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Request Food Donation</h1>
            <p className="text-gray-600 mt-1">Let donors know what items you need most.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Item Details */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Item Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Item Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Item Name *
                  </label>
                  <input
                    type="text"
                    value={formData.itemName}
                    onChange={(e) => handleInputChange('itemName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="e.g., Fresh Apples, Canned Soup"
                    required
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  >
                    <option value="">Select category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Quantity */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity Needed *
                  </label>
                  <input
                    type="number"
                    value={formData.quantity}
                    onChange={(e) => handleInputChange('quantity', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="0"
                    min="1"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Unit
                  </label>
                  <select
                    value={formData.unit}
                    onChange={(e) => handleInputChange('unit', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    {units.map(unit => (
                      <option key={unit} value={unit}>{unit}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Describe the items you need and how they will be used..."
                />
              </div>
            </div>

            {/* Timing & Urgency */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Timing & Urgency</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Urgency */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level *
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => handleInputChange('urgency', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    required
                  >
                    <option value="low">Low - Whenever available</option>
                    <option value="medium">Medium - Needed soon</option>
                    <option value="high">High - Urgently needed</option>
                    <option value="critical">Critical - Immediate need</option>
                  </select>
                </div>

                {/* Needed By */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Needed By
                  </label>
                  <input
                    type="date"
                    value={formData.neededBy}
                    onChange={(e) => handleInputChange('neededBy', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>

            {/* Special Requirements */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Requirements
              </label>
              <textarea
                value={formData.specialRequirements}
                onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder="Any special storage requirements, dietary restrictions, or other notes..."
              />
            </div>

            {/* Organization Info */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-2">Organization Information</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Organization:</strong> Hope Community Center</p>
                <p><strong>Address:</strong> 123 Main Street, Downtown</p>
                <p><strong>Contact:</strong> (555) 123-4567</p>
                <p><strong>Operating Hours:</strong> Mon-Sun: 8AM-8PM</p>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => window.history.back()}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-emerald-600 text-white px-6 py-3 rounded hover:bg-emerald-700 font-medium"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>

        {/* Help Text */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Your request will be visible to donors in your area. You'll be notified when someone can fulfill your request.
          </p>
        </div>
      </main>
    </div>
  );
};

export default RequestDonation;