import React from 'react';
import { MapPin, Star, Phone } from 'lucide-react';

export const VendorDirectory = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Find Vendors</h1>

      {/* Search and Filter */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Search vendors..."
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent">
            <option value="">All Categories</option>
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegetables</option>
            <option value="mixed">Mixed Produce</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent">
            <option value="">Sort By</option>
            <option value="rating">Rating</option>
            <option value="distance">Distance</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      {/* Vendor List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample Vendor Card */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Green Harvest Farm</h3>
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <MapPin className="h-4 w-4" />
              <span>2.5 km away</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Star className="h-4 w-4 text-yellow-400" />
              <span>4.8 (120 reviews)</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <Phone className="h-4 w-4" />
              <span>+1 234 567 8900</span>
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};