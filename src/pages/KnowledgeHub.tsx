import React from 'react';
import { BookOpen, Video, Calendar, MessageSquare } from 'lucide-react';

export const KnowledgeHub = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Knowledge Hub</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Articles Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-semibold">Articles</h2>
          </div>
          <ul className="space-y-4">
            <li className="hover:text-green-600 cursor-pointer">
              Best Practices for Organic Farming
            </li>
            <li className="hover:text-green-600 cursor-pointer">
              Seasonal Growing Guide
            </li>
            <li className="hover:text-green-600 cursor-pointer">
              Sustainable Agriculture Tips
            </li>
          </ul>
        </div>

        {/* Videos Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Video className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-semibold">Video Tutorials</h2>
          </div>
          <ul className="space-y-4">
            <li className="hover:text-green-600 cursor-pointer">
              Introduction to Hydroponics
            </li>
            <li className="hover:text-green-600 cursor-pointer">
              Pest Control Methods
            </li>
            <li className="hover:text-green-600 cursor-pointer">
              Soil Preparation Guide
            </li>
          </ul>
        </div>

        {/* Expert Consultations */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-semibold">Expert Consultations</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Book a session with our agricultural experts for personalized advice.
          </p>
          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
            Schedule Consultation
          </button>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="mt-12">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="h-6 w-6 text-green-600" />
          <h2 className="text-2xl font-semibold">Upcoming Events</h2>
        </div>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="divide-y divide-gray-200">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">
                Modern Farming Techniques Workshop
              </h3>
              <p className="text-gray-600">March 15, 2024 - Online</p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">
                Organic Certification Seminar
              </h3>
              <p className="text-gray-600">March 20, 2024 - Online</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};