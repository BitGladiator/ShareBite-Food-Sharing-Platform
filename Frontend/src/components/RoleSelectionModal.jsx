import React from 'react';

const RoleSelectionModal = ({ isOpen, onClose, onRoleSelect }) => {
  if (!isOpen) return null;

  const handleRoleSelect = (role) => {
    onRoleSelect(role);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scale-in border border-gray-100">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Join ShareBite</h3>
          <p className="text-gray-600">How would you like to get started?</p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={() => handleRoleSelect('donor')}
            className="w-full p-6 border-2 border-emerald-200 rounded-xl hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-200 text-left group hover:shadow-md"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">I want to donate food</h4>
                <p className="text-gray-600 text-sm mt-1">Restaurants, grocery stores, households</p>
              </div>
            </div>
          </button>
          
          <button
            onClick={() => handleRoleSelect('recipient')}
            className="w-full p-6 border-2 border-blue-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 text-left group hover:shadow-md"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-lg">I need food resources</h4>
                <p className="text-gray-600 text-sm mt-1">Food banks, shelters, organizations</p>
              </div>
            </div>
          </button>
        </div>
        
        <button
          onClick={onClose}
          className="w-full mt-6 py-3 text-gray-600 hover:text-gray-800 transition-colors font-medium rounded-lg hover:bg-gray-100"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
};

export default RoleSelectionModal;