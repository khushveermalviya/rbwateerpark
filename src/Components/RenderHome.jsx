import React, { useState, useEffect } from 'react'
import { Star, MapPin, Phone, Mail, Clock, Calendar, Users, Waves, Camera, Gift, Menu, X, ChevronLeft, ChevronRight, ArrowRight, Sparkles, Zap, Heart } from 'lucide-react';

export default function RenderHome() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Gallery images for backgrounds
  const backgroundImages = [
    "./waterpark01.jpg",
    "./waterpark02.jpg", 
    "./waterpark03.jpg",
    "./waterpark04.jpg"
  ];

  const offers = [
    {
      title: "Early Bird Special",
      discount: "25% OFF",
      description: "Book 7 days in advance",
      validUntil: "Limited time offer",
      icon: Clock,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Group Discount", 
      discount: "15% OFF",
      description: "Groups of 10 or more",
      validUntil: "All season",
      icon: Users,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Birthday Package",
      discount: "Free Entry",
      description: "Birthday child enters free", 
      validUntil: "With adult purchase",
      icon: Gift,
      color: "from-pink-500 to-rose-600"
    }
  ];

  const features = [
    {
      icon: Waves,
      title: "15+ Thrilling Rides",
      description: "From gentle lazy rivers to extreme cliff jumpers",
      color: "blue",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Users,
      title: "Family Friendly", 
      description: "Fun for all ages with dedicated kids zones",
      color: "green",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Gift,
      title: "Special Offers",
      description: "Great deals and seasonal packages available",
      color: "orange", 
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: Sparkles,
      title: "Premium Experience",
      description: "World-class facilities and safety standards",
      color: "purple",
      bgColor: "bg-purple-50", 
      iconColor: "text-purple-600"
    },
    {
      icon: Zap,
      title: "Adrenaline Rush",
      description: "Heart-pumping slides and adventure zones",
      color: "red",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: Heart,
      title: "Memory Maker",
      description: "Create unforgettable moments with loved ones",
      color: "pink",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600"
    }
  ];

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll animation trigger
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Dynamic Background */}
      <div className="relative h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 flex items-center justify-center text-white overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentBgIndex ? 'opacity-60' : 'opacity-0'
              }`}
            >
              <img 
                src={image} 
                alt={`Background ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-transparent to-cyan-900/40"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-bounce"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-cyan-300/20 rounded-full blur-lg animate-pulse"></div>
          <div className="absolute bottom-32 left-32 w-24 h-24 bg-blue-300/15 rounded-full blur-2xl animate-bounce delay-300"></div>
          <div className="absolute bottom-20 right-16 w-12 h-12 bg-white/20 rounded-full blur-md animate-pulse delay-500"></div>
        </div>

        {/* Hero Content */}
        <div className={`relative z-10 text-center px-4 max-w-4xl mx-auto transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="mb-6">
            <Waves className="mx-auto mb-4 animate-bounce" size={60} />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
            R B Water Park
          </h1>
          <p className="text-xl md:text-3xl mb-8 text-cyan-100 font-light">
            The Ultimate Water Adventure Experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setActiveSection && setActiveSection('tickets')}
              className="group bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <span className="flex items-center justify-center">
                Get Tickets Now!
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </span>
            </button>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 border border-white/30">
              Watch Virtual Tour
            </button>
          </div>
        </div>

        {/* Background Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBgIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBgIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Info Card */}
      <div className="bg-white shadow-2xl -mt-16 mx-4 md:mx-8 rounded-2xl p-6 md:p-8 relative z-20 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center space-x-3 p-4 rounded-xl hover:bg-blue-50 transition-colors">
            <div className="bg-blue-100 p-3 rounded-full">
              <Clock className="text-blue-600" size={24} />
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-800">Open Daily</p>
              <p className="text-blue-600 font-bold">9AM - 8PM</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3 p-4 rounded-xl hover:bg-red-50 transition-colors">
            <div className="bg-red-100 p-3 rounded-full">
              <MapPin className="text-red-600" size={24} />
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-800">Location</p>
              <p className="text-red-600 font-bold">Sojat, Rajasthan</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3 p-4 rounded-xl hover:bg-yellow-50 transition-colors">
            <div className="bg-yellow-100 p-3 rounded-full">
              <Star className="text-yellow-600" size={24} />
            </div>
            <div className="text-left">
              <p className="font-semibold text-gray-800">Rating</p>
              <p className="text-yellow-600 font-bold">4.8/5 ⭐ (2,341)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">R B Water Park</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of thrills, safety, and unforgettable memories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className={`group relative p-8 rounded-2xl ${feature.bgColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br ${feature.color === 'blue' ? 'from-blue-500 to-blue-600' : feature.color === 'green' ? 'from-green-500 to-green-600' : feature.color === 'orange' ? 'from-orange-500 to-orange-600' : feature.color === 'purple' ? 'from-purple-500 to-purple-600' : feature.color === 'red' ? 'from-red-500 to-red-600' : 'from-pink-500 to-pink-600'} text-white group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{feature.title}</h3>
                    <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Current Offers with Background */}
      <div className="relative py-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={backgroundImages[2]} 
            alt="Offers Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 via-pink-900/80 to-purple-900/90"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              🔥 Hot Deals & Offers
            </h2>
            <p className="text-xl text-orange-100">
              Don't miss out on these amazing limited-time offers!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer, index) => {
              const Icon = offer.icon;
              return (
                <div 
                  key={index} 
                  className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative text-white">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${offer.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={24} />
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                        {offer.discount}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{offer.title}</h3>
                    <p className="text-orange-100 mb-4 text-lg">{offer.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-orange-200">{offer.validUntil}</p>
                      <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-semibold transition-colors border border-white/30">
                        Claim Now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for the Adventure of a Lifetime?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of happy families who've made unforgettable memories at R B Water Park
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Book Your Visit Today
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}   