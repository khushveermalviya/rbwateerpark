import React, { useState } from 'react';
import { Star, MapPin, Phone, Mail, Clock, Calendar, Users, Waves, Camera, Gift, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import RenderHome from"./Components/RenderHome.jsx"

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedRide, setSelectedRide] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);  
  const [galleryView, setGalleryView] = useState('grid'); // 'grid' or 'masonry'
const [fullscreenImage, setFullscreenImage] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    date: '',
    adults: 1,
    children: 0,
    email: '',
    phone: ''
  });

  const rides = [
    {
      id: 1,
      name: "Thunder Rapids",
      type: "Water Coaster",
      thrillLevel: "High",
      height: "48+ inches",
      description: "Experience the ultimate rush on our signature water coaster with multiple drops and twists!",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      name: "Lazy River",
      type: "Relaxation",
      thrillLevel: "Low",
      height: "All Ages",
      description: "Float peacefully along our scenic lazy river surrounded by tropical landscaping.",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      name: "Kids Splash Zone",
      type: "Kids Area",
      thrillLevel: "Low",
      height: "Under 48 inches",
      description: "Safe and fun water playground designed specifically for younger children.",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      name: "Speed Slides",
      type: "Racing Slides",
      thrillLevel: "High",
      height: "42+ inches",
      description: "Race your friends down our twin racing slides with timing systems!",
      image: "/api/placeholder/400/300"
    },
    // {
    //   id: 5,
    //   name: "Wave Pool",
    //   type: "Pool",
    //   thrillLevel: "Medium",
    //   height: "All Ages",
    //   description: "Enjoy artificial waves in our massive 50,000 gallon wave pool.",
    //   image: "/api/placeholder/400/300"
    // },
    // {
    //   id: 6,
    //   name: "Cliff Jumper",
    //   type: "High Dive",
    //   thrillLevel: "Extreme",
    //   height: "54+ inches",
    //   description: "Take the plunge from our 30-foot cliff jumping platform into deep waters.",
    //   image: "/api/placeholder/400/300"
    // }
  ];

  const galleryImages = [
    { src: "./waterpark01.jpg", title: "Water Park Adventure", category: "rides" },
    { src: "./waterpark02.jpg", title: "Family Fun Time", category: "pools" },
    { src: "./waterpark03.jpg", title: "Thrilling Slides", category: "rides" },
    { src: "./waterpark04.jpg", title: "Relaxing Moments", category: "relaxation" },
    // Add more images as needed with the same structure
  ];

  const tickets = [
    {
      type: "Adult Day Pass",
      price: "200 ₹",
      description: "Full day access to all rides and attractions",
      features: ["All rides access", "Wave pool", "Lazy river", "Free parking"]
    },
    {
      type: "Child Day Pass",
      price: "100 ₹",
      description: "Full day access for children under 12",
      features: ["All kids rides", "Kids splash zone", "Wave pool", "Free parking"]
    },
    {
      type: "Family Package",
      price: "500 ₹",
      description: "2 Adults + 2 Children combo deal",
      features: ["20% savings", "All attractions", "Priority parking", "Food voucher"]
    },
    {
      type: "Season Pass",
      price: "3000 ₹",
      description: "Unlimited visits all summer long",
      features: ["All season access", "Guest discounts", "VIP parking", "Birthday perks"]
    }
  ];

  const offers = [
    {
      title: "Early Bird Special",
      discount: "25% OFF",
      description: "Book 7 days in advance",
      validUntil: "Limited time offer"
    },
    {
      title: "Group Discount",
      discount: "15% OFF",
      description: "Groups of 10 or more",
      validUntil: "All season"
    },
    {
      title: "Birthday Package",
      discount: "Free Entry",
      description: "Birthday child enters free",
      validUntil: "With adult purchase"
    }
  ];

  const navigation = [
    { id: 'home', label: 'Home', icon: Waves },
    { id: 'rides', label: 'Rides', icon: Users },
    { id: 'tickets', label: 'Tickets', icon: Gift },
    { id: 'gallery', label: 'Gallery', icon: Camera },
    { id: 'contact', label: 'Contact', icon: Phone }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleBooking = (e) => {
    e.preventDefault();
    alert(`Booking submitted for ${bookingForm.adults} adults and ${bookingForm.children} children on ${bookingForm.date}`);
  };


  //   <div className="min-h-screen">
  //     {/* Hero Section */}
  //     <div className="relative h-96 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white">
  //       <img src="/api/placeholder/800/400" alt="Water Park Hero" className="absolute inset-0 w-full h-full object-cover opacity-50" />
  //       <div className="relative z-10 text-center px-4">
  //         <h1 className="text-4xl md:text-6xl font-bold mb-4">R B Water Park</h1>
  //         <p className="text-xl md:text-2xl mb-6">The Ultimate Water Adventure Experience</p>
  //         <button 
  //           onClick={() => setActiveSection('tickets')}
  //           className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-colors"
  //         >
  //           Get Tickets Now!
  //         </button>
  //       </div>
  //     </div>

  //     {/* Quick Info */}
  //     <div className="bg-white shadow-lg -mt-8 mx-4 rounded-lg p-6 relative z-20">
  //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
  //         <div className="flex items-center justify-center space-x-2">
  //           <Clock className="text-blue-500" size={20} />
  //           <span className="font-semibold">Open Daily 9AM-8PM</span>
  //         </div>
  //         <div className="flex items-center justify-center space-x-2">
  //           <MapPin className="text-red-500" size={20} />
  //           <span className="font-semibold">Sojat , Rajasthan</span>
  //         </div>
  //         <div className="flex items-center justify-center space-x-2">
  //           <Star className="text-yellow-500" size={20} />
  //           <span className="font-semibold">4.8/5 Stars (2,341 reviews)</span>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Features */}
  //     <div className="py-16 px-4">
  //       <div className="max-w-6xl mx-auto">
  //         <h2 className="text-3xl font-bold text-center mb-12">Why Choose AquaSplash?</h2>
  //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  //           <div className="text-center">
  //             <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
  //               <Waves className="text-blue-600" size={32} />
  //             </div>
  //             <h3 className="text-xl font-semibold mb-2">15+ Thrilling Rides</h3>
  //             <p className="text-gray-600">From gentle lazy rivers to extreme cliff jumpers</p>
  //           </div>
  //           <div className="text-center">
  //             <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
  //               <Users className="text-green-600" size={32} />
  //             </div>
  //             <h3 className="text-xl font-semibold mb-2">Family Friendly</h3>
  //             <p className="text-gray-600">Fun for all ages with dedicated kids zones</p>
  //           </div>
  //           <div className="text-center">
  //             <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
  //               <Gift className="text-orange-600" size={32} />
  //             </div>
  //             <h3 className="text-xl font-semibold mb-2">Special Offers</h3>
  //             <p className="text-gray-600">Great deals and seasonal packages available</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Current Offers */}
  //     <div className="bg-gradient-to-r from-orange-400 to-pink-500 py-16 px-4 text-white">
  //       <div className="max-w-6xl mx-auto">
  //         <h2 className="text-3xl font-bold text-center mb-12">Current Offers</h2>
  //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  //           {offers.map((offer, index) => (
  //             <div key={index} className="bg-white bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
  //               <div className="text-2xl font-bold mb-2">{offer.discount}</div>
  //               <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
  //               <p className="mb-2">{offer.description}</p>
  //               <p className="text-sm opacity-90">{offer.validUntil}</p>
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
<RenderHome/>
  const renderRides = () => (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Amazing Rides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rides.map((ride) => (
            <div key={ride.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={ride.image} alt={ride.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{ride.name}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    ride.thrillLevel === 'High' || ride.thrillLevel === 'Extreme' ? 'bg-red-100 text-red-800' :
                    ride.thrillLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {ride.thrillLevel}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{ride.type}</p>
                <p className="text-gray-700 mb-3">{ride.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-blue-600">Height: {ride.height}</span>
                  <button 
                    onClick={() => setSelectedRide(ride)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ride Detail Modal */}
      {selectedRide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="relative">
              <img src={selectedRide.image} alt={selectedRide.name} className="w-full h-48 object-cover rounded-t-lg" />
              <button 
                onClick={() => setSelectedRide(null)}
                className="absolute top-2 right-2 bg-white rounded-full p-1"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedRide.name}</h3>
              <p className="text-gray-600 mb-4">{selectedRide.description}</p>
              <div className="space-y-2">
                <p><strong>Type:</strong> {selectedRide.type}</p>
                <p><strong>Thrill Level:</strong> {selectedRide.thrillLevel}</p>
                <p><strong>Height Requirement:</strong> {selectedRide.height}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderTickets = () => (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Ticket Options</h2>
        
        {/* Tickets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tickets.map((ticket, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-200 hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-semibold mb-2">{ticket.type}</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">{ticket.price}</div>
              <p className="text-gray-600 mb-4">{ticket.description}</p>
              <ul className="space-y-1 mb-6">
                {ticket.features.map((feature, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-center">
                    <Star className="text-yellow-500 mr-2" size={14} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors">
                Select Ticket
              </button>
            </div>
          ))}
        </div>

        {/* Advance Booking Form */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-6 text-center">Advance Booking</h3>
          <form onSubmit={handleBooking} className="max-w-md mx-auto space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Visit Date</label>
              <input 
                type="date" 
                value={bookingForm.date}
                onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Adults</label>
                <select 
                  value={bookingForm.adults}
                  onChange={(e) => setBookingForm({...bookingForm, adults: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Children</label>
                <select 
                  value={bookingForm.children}
                  onChange={(e) => setBookingForm({...bookingForm, children: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[0,1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                value={bookingForm.email}
                onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input 
                type="tel" 
                value={bookingForm.phone}
                onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-md transition-colors"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
  const renderGallery = () => (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Photo Gallery</h2>
        
        {/* Gallery View Toggle */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setGalleryView('grid')}
              className={`px-4 py-2 rounded-md transition-colors ${
                galleryView === 'grid' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setGalleryView('masonry')}
              className={`px-4 py-2 rounded-md transition-colors ${
                galleryView === 'masonry' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Masonry View
            </button>
          </div>
        </div>
  
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {['all', 'rides', 'pools', 'kids', 'relaxation', 'extreme', 'scenery'].map((category) => (
            <button
              key={category}
              className="px-3 py-1 bg-gray-200 hover:bg-blue-500 hover:text-white rounded-full text-sm transition-colors capitalize"
            >
              {category}
            </button>
          ))}
        </div>
  
        {/* Featured Carousel */}
        <div className="relative mb-8 bg-gray-900 rounded-lg overflow-hidden">
          <div className="relative h-64 md:h-96">
            <img 
              src={galleryImages[currentImageIndex].src} 
              alt={galleryImages[currentImageIndex].title}
              className="w-full h-full object-contain bg-black"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            {/* Image Info Overlay */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">{galleryImages[currentImageIndex].title}</h3>
              <p className="text-sm opacity-80 capitalize">{galleryImages[currentImageIndex].category}</p>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all backdrop-blur-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all backdrop-blur-sm"
            >
              <ChevronRight size={24} />
            </button>
  
            {/* Fullscreen Button */}
            <button 
              onClick={() => setFullscreenImage(galleryImages[currentImageIndex])}
              className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all backdrop-blur-sm"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
              </svg>
            </button>
          </div>
  
          {/* Progress Dots */}
          <div className="absolute bottom-4 right-4 flex space-x-1">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
  
        {/* Gallery Grid */}
        {galleryView === 'grid' ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-100"
                onClick={() => setCurrentImageIndex(index)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                  <div className="p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium">{image.title}</p>
                    <p className="text-xs opacity-80 capitalize">{image.category}</p>
                  </div>
                </div>
                {/* View Icon */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Masonry Layout */
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImages.map((image, index) => {
              // Create varying heights for masonry effect
              const heights = ['h-48', 'h-64', 'h-80', 'h-56', 'h-72'];
              const randomHeight = heights[index % heights.length];
              
              return (
                <div 
                  key={index}
                  className={`group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-100 break-inside-avoid mb-4 ${randomHeight}`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 text-white">
                      <p className="text-sm font-medium">{image.title}</p>
                      <p className="text-xs opacity-80 capitalize">{image.category}</p>
                    </div>
                  </div>
                  {/* Zoom Icon */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/30 backdrop-blur-sm rounded-full p-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"/>
                        <path d="m21 21-4.35-4.35"/>
                        <line x1="11" y1="8" x2="11" y2="14"/>
                        <line x1="8" y1="11" x2="14" y2="11"/>
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
  
        {/* Image Counter */}
        <div className="text-center mt-8 text-gray-600">
          <p className="text-sm">
            Showing {galleryImages.length} photos • 
            <span className="ml-1">Image {currentImageIndex + 1} of {galleryImages.length}</span>
          </p>
        </div>
      </div>
  
      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-full max-h-full">
            <img 
              src={fullscreenImage.src} 
              alt={fullscreenImage.title}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Close Button */}
            <button 
              onClick={() => setFullscreenImage(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            
            {/* Image Info */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold mb-1">{fullscreenImage.title}</h3>
              <p className="text-sm opacity-80 capitalize">{fullscreenImage.category}</p>
            </div>
            
            {/* Navigation in Fullscreen */}
            <button 
              onClick={() => {
                const currentIndex = galleryImages.findIndex(img => img.src === fullscreenImage.src);
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
                setFullscreenImage(galleryImages[prevIndex]);
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => {
                const currentIndex = galleryImages.findIndex(img => img.src === fullscreenImage.src);
                const nextIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
                setFullscreenImage(galleryImages[nextIndex]);
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Click outside to close */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={() => setFullscreenImage(null)}
          />
        </div>
      )}
    </div>
  );

  const renderContact = () => (
    <div className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact & Location</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="text-blue-500" size={20} />
                  <span>09829823642</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-500" size={20} />
                  <span>info@rbwaterPark.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-500" size={20} />
                  <span>          Kanawa Bera , Dhandedi Road Jataraniya Gate, Sojat, Rajasthan 306104.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="text-blue-500" size={20} />
                  <span>Daily: 9:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Operating Hours</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Monday - Friday:</div>
                  <div>10:00 AM - 7:00 PM</div>
                  <div>Saturday - Sunday:</div>
                  <div>9:00 AM - 8:00 PM</div>
                  <div>9:00 AM - 8:00 PM</div>
                  <div>9:00 AM - 9:00 PM</div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Safety Guidelines</h3>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Certified lifeguards on duty at all times</li>
                <li>• Height restrictions strictly enforced</li>
                <li>• First aid stations throughout the park</li>
                <li>• Swimming ability required for deep water areas</li>
                <li>• No outside food or beverages allowed</li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Find Us</h3>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto mb-2 text-gray-500" size={48} />
                <p className="text-gray-600">Interactive Map</p>
                <a 
                  href="https://maps.app.goo.gl/Zu885WGTowgL9kRT9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition-colors"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Directions</h4>
              <p className="text-sm text-gray-700 mb-2">
              Kanawa Bera , Dhandedi Road Jataraniya Gate, Sojat, Rajasthan 306104.
              </p>
              <p className="text-sm text-gray-700">
                Free parking available on-site with over 500 spaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Header */}
      <header className="bg-transparent backdrop-blur-md shadow-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Waves className="text-blue-500" size={32} />
              <span className="text-xl font-bold text-gray-800">R B Water Park</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                      activeSection === item.id 
                        ? 'bg-blue-500 text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="px-4 py-2 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                      activeSection === item.id 
                        ? 'bg-blue-500 text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
  {activeSection === 'home' && <RenderHome />}
  {/* {activeSection === 'rides' && renderRides()} */}
  {activeSection === 'tickets' && renderTickets()}
  {activeSection === 'gallery' && renderGallery()}
  {activeSection === 'contact' && renderContact()}
</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Waves className="text-blue-400" size={24} />
                <span className="text-lg font-semibold">R B Water Park</span>
              </div>
              <p className="text-gray-300 text-sm">
                The ultimate water adventure destination for families and thrill-seekers alike.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <div className="space-y-1 text-sm">
                <div className="text-gray-300 hover:text-white cursor-pointer">Park Hours</div>
                <div className="text-gray-300 hover:text-white cursor-pointer">Season Passes</div>
                <div className="text-gray-300 hover:text-white cursor-pointer">Group Bookings</div>
                <div className="text-gray-300 hover:text-white cursor-pointer">Safety Guidelines</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="text-sm text-gray-300">
                <p>Stay updated with our latest news and offers!</p>
                <div className="mt-2 space-x-4">
                  <span className="cursor-pointer hover:text-white">Facebook</span>
                  <span className="cursor-pointer hover:text-white">Instagram</span>
                  <span className="cursor-pointer hover:text-white">Twitter</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2024 R B Water Park. All rights reserved.</p>
          </div>
          </div>
          </footer>
          </div>)}
       export default App;