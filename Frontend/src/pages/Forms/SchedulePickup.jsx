import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  MapPin, 
  Truck,
  User,
  Phone,
  Info,
  CheckCircle
} from 'lucide-react';

const SchedulePickup = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Donation Details
    donationId: '',
    foodItems: [],
    
    // Step 2: Pickup Details
    pickupDate: '',
    pickupTime: '',
    address: '',
    specialInstructions: '',
    
    // Step 3: Contact Info
    contactName: '',
    contactPhone: '',
    email: '',
    
    // Step 4: Confirmation
    agreedToTerms: false
  });

  // Mock data - recent donations that need pickup
  const recentDonations = [
    {
      id: 'DN-001',
      foodType: 'Fresh Vegetables',
      quantity: '25 kg',
      description: 'Assorted fresh vegetables including tomatoes, carrots, and potatoes',
      status: 'pending'
    },
    {
      id: 'DN-002',
      foodType: 'Prepared Meals',
      quantity: '50 units',
      description: 'Pre-packaged meals from corporate event',
      status: 'pending'
    },
    {
      id: 'DN-003', 
      foodType: 'Bakery Items',
      quantity: '15 kg',
      description: 'Fresh bread and pastries from bakery',
      status: 'pending'
    }
  ];

  const availableTimeSlots = [
    '08:00 - 10:00',
    '10:00 - 12:00', 
    '12:00 - 14:00',
    '14:00 - 16:00',
    '16:00 - 18:00'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDonationSelect = (donationId) => {
    setFormData(prev => ({
      ...prev,
      donationId,
      foodItems: [recentDonations.find(d => d.id === donationId)]
    }));
    setActiveStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeStep < 4) {
      setActiveStep(activeStep + 1);
    } else {
      // Submit the form
      console.log('Pickup scheduled:', formData);
      // Handle form submission
    }
  };

  const steps = [
    { number: 1, title: 'Select Donation', icon: CheckCircle },
    { number: 2, title: 'Pickup Details', icon: Calendar },
    { number: 3, title: 'Contact Info', icon: User },
    { number: 4, title: 'Confirmation', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span className="text-gray-700 font-medium">Schedule Pickup</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  activeStep >= step.number
                    ? 'bg-emerald-500 border-emerald-500 text-white'
                    : 'border-gray-300 text-gray-500'
                }`}>
                  {activeStep > step.number ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <span className="font-semibold">{step.number}</span>
                  )}
                </div>
                <span className={`ml-3 font-medium ${
                  activeStep >= step.number ? 'text-emerald-600' : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-6 ${
                    activeStep > step.number ? 'bg-emerald-500' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200">
          {/* Form Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Schedule Food Pickup</h1>
            <p className="text-gray-600 mt-1">Arrange pickup for your food donation</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            {/* Step 1: Select Donation */}
            {activeStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-900">Select Donation for Pickup</h2>
                <p className="text-gray-600">Choose which donation you'd like to schedule pickup for:</p>
                
                <div className="space-y-4">
                  {recentDonations.map((donation) => (
                    <div
                      key={donation.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                        formData.donationId === donation.id
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-gray-200 hover:border-emerald-300'
                      }`}
                      onClick={() => handleDonationSelect(donation.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900">{donation.foodType}</h3>
                          <p className="text-sm text-gray-600 mt-1">{donation.description}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                            <span>Quantity: {donation.quantity}</span>
                            <span>ID: {donation.id}</span>
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          donation.status === 'pending'
                            ? 'bg-orange-100 text-orange-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {donation.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Pickup Details */}
            {activeStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-900">Pickup Details</h2>
                
                {/* Selected Donation Summary */}
                {formData.foodItems.length > 0 && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-medium text-gray-900 mb-2">Selected Donation:</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{formData.foodItems[0].foodType}</p>
                        <p className="text-sm text-gray-600">{formData.foodItems[0].quantity}</p>
                      </div>
                      <span className="text-sm text-gray-500">{formData.foodItems[0].id}</span>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Pickup Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Pickup Date *
                    </label>
                    <input
                      type="date"
                      value={formData.pickupDate}
                      onChange={(e) => handleInputChange('pickupDate', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    />
                  </div>

                  {/* Pickup Time */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Preferred Time Slot *
                    </label>
                    <select
                      value={formData.pickupTime}
                      onChange={(e) => handleInputChange('pickupTime', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      required
                    >
                      <option value="">Select time slot</option>
                      {availableTimeSlots.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Pickup Address *
                  </label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Enter complete address for pickup..."
                    required
                  />
                </div>

                {/* Special Instructions */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Instructions
                  </label>
                  <textarea
                    value={formData.specialInstructions}
                    onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Any special instructions for the driver (gate code, floor, etc.)..."
                  />
                </div>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {activeStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-900">Contact Information</h2>
                <p className="text-gray-600">Who should our driver contact upon arrival?</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-1" />
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      value={formData.contactName}
                      onChange={(e) => handleInputChange('contactName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Enter contact person's name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      value={formData.contactPhone}
                      onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Enter email for confirmation"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {activeStep === 4 && (
              <div className="space-y-6">
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready to Schedule!</h2>
                  <p className="text-gray-600">Please review your pickup details below:</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Donation Details</h3>
                      <p className="text-gray-600">{formData.foodItems[0]?.foodType}</p>
                      <p className="text-sm text-gray-500">{formData.foodItems[0]?.quantity}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Pickup Schedule</h3>
                      <p className="text-gray-600">{formData.pickupDate}</p>
                      <p className="text-sm text-gray-500">{formData.pickupTime}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Pickup Location</h3>
                    <p className="text-gray-600">{formData.address}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Contact Person</h3>
                    <p className="text-gray-600">{formData.contactName}</p>
                    <p className="text-sm text-gray-500">{formData.contactPhone}</p>
                  </div>

                  {formData.specialInstructions && (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Special Instructions</h3>
                      <p className="text-gray-600">{formData.specialInstructions}</p>
                    </div>
                  )}
                </div>

                {/* Terms Agreement */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formData.agreedToTerms}
                    onChange={(e) => handleInputChange('agreedToTerms', e.target.checked)}
                    className="mt-1 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I confirm that the food is properly stored and ready for pickup at the scheduled time. 
                    I understand that ShareBite volunteers will collect the donation during the specified time window.
                  </label>
                </div>
              </div>
            )}

            {/* Form Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200 mt-8">
              {activeStep > 1 && (
                <button
                  type="button"
                  onClick={() => setActiveStep(activeStep - 1)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  Back
                </button>
              )}
              
              <button
                type="submit"
                className={`flex-1 px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  activeStep === 4
                    ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700'
                }`}
              >
                {activeStep === 4 ? 'Confirm & Schedule Pickup' : 'Continue'}
              </button>
            </div>
          </form>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
          <div className="flex items-start">
            <Info className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-blue-900">Pickup Guidelines</h3>
              <ul className="text-sm text-blue-800 mt-1 space-y-1">
                <li>• Please have your donation ready 15 minutes before the scheduled time</li>
                <li>• Ensure food is properly packaged and labeled</li>
                <li>• Our driver will call the contact number upon arrival</li>
                <li>• Cancellations must be made at least 2 hours in advance</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SchedulePickup;