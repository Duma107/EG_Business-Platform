import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Users, BookOpen, ShoppingBag } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[600px]"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Empowering Growth, Transforming Africa
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Connect with local farmers, access fresh produce, and grow together
            </p>
            <Link
              to="/marketplace"
              className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Explore Marketplace
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose EG Business?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Sprout className="h-8 w-8" />}
              title="Fresh Produce"
              description="Direct access to fresh, locally sourced fruits and vegetables"
            />
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Vendor Network"
              description="Connect with trusted local farmers and vendors"
            />
            <FeatureCard
              icon={<BookOpen className="h-8 w-8" />}
              title="Knowledge Hub"
              description="Access agricultural insights and expert advice"
            />
            <FeatureCard
              icon={<ShoppingBag className="h-8 w-8" />}
              title="Easy Shopping"
              description="Convenient online marketplace with secure transactions"
            />
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add featured products here */}
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="text-green-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};