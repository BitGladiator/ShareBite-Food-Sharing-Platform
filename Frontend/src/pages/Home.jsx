import React, { useState, useEffect, useRef } from "react";
import RoleSelectionModal from "../components/RoleSelectionModal";
import { Navigate, useNavigate } from "react-router-dom";


const ShareBite = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showRoleSelection, setShowRoleSelection] = useState(false);
  const statsRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      if (statsRef.current) {
        const elementTop = statsRef.current.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };
  const handleRoleSelect = (role) => {
    console.log(`User selected: ${role}`);
    
    switch(role) {
      case 'donor':
        navigate('donor-signup');
        console.log('Redirecting to donor signup...');
        break;
      case 'recipient':
        navigate("reciepient-signup");
        console.log('Redirecting to recipient signup...');
        break;
      default:
        break;
    }
  };
  const Icons = {
    Mobile: () => (
      <svg
        className="w-12 h-12 text-emerald-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    Form: () => (
      <svg
        className="w-12 h-12 text-emerald-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    Truck: () => (
      <svg
        className="w-12 h-12 text-emerald-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
        />
      </svg>
    ),
    FoodBank: () => (
      <svg
        className="w-8 h-8 text-emerald-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    Shelter: () => (
      <svg
        className="w-8 h-8 text-emerald-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    School: () => (
      <svg
        className="w-8 h-8 text-emerald-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
    ),
    Church: () => (
      <svg
        className="w-8 h-8 text-emerald-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 4v16m-8-8h16M6.5 20l4.143-8.143L6.5 4l8.143 4.143L18.5 4l-4.143 8.143L18.5 20l-8.143-4.143L6.5 20z"
        />
      </svg>
    ),
    Community: () => (
      <svg
        className="w-8 h-8 text-emerald-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    Senior: () => (
      <svg
        className="w-8 h-8 text-emerald-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
        />
      </svg>
    ),
    Daycare: () => (
      <svg
        className="w-8 h-8 text-emerald-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    Youth: () => (
      <svg
        className="w-8 h-8 text-emerald-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Clean Header */}
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg border-b border-gray-100"
            : "bg-white bg-opacity-95 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">ShareBite</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["How It Works", "For Donors", "For Recipients", "About"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(item.toLowerCase().replace(" ", "-"))
                  }
                  className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
                >
                  {item}
                </button>
              )
            )}
            <button 
              onClick={() => setShowRoleSelection(true)}
              className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors duration-200 font-medium"
            >
              Get Started
            </button>
          </div>
        </nav>
      </header>
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:pr-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Connecting Food Banks, Donors &
                <span className="text-emerald-600"> Communities</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The smart platform that makes it easy to rescue surplus food and
                get it to those who need it most. Join thousands making a
                difference in their communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={()=>navigate('/donor-signup')} className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 shadow-lg">
                  Donate Food
                </button>
                <button onClick={()=>navigate('/reciepient-signup')} className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-200">
                  Find Food
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Post Your Donation
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Share details about surplus food
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Get Matched
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Connect with nearby organizations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <span className="text-emerald-600 font-semibold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Schedule Pickup
                      </h3>
                      <p className="text-gray-600 text-sm">
                        A volunteer picks it up
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={statsRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "2.5M+", text: "Pounds of Food Rescued" },
              { number: "15K+", text: "Donation Pick-Ups" },
              { number: "500+", text: "Non-Profit Partners" },
              { number: "45", text: "Participating States" },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                } transition-all duration-700`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-emerald-600 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 font-medium">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether a donation is scheduled or happens in real-time, ShareBite
              makes it easy to connect all parties involved.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Icons.Mobile,
                title: "Access Our Platform",
                description:
                  "Use our desktop site or mobile app to get started with your food donation or request.",
              },
              {
                icon: Icons.Form,
                title: "Share Information",
                description:
                  "Provide details about your donation including quantity, type, and pickup preferences.",
              },
              {
                icon: Icons.Truck,
                title: "Volunteer Pickup",
                description:
                  "A local volunteer or organization representative picks up the donation and delivers it.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex justify-center mb-6">
                  <step.icon />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section id="for-donors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                For Food Donors
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Turn your surplus food into community support. Our platform
                makes donating safe, simple, and impactful.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Restaurants & Catering",
                    description:
                      "End-of-day surplus, event leftovers, and overstock inventory",
                  },
                  {
                    title: "Grocery Stores",
                    description:
                      "Products approaching sell-by dates but still safe to consume",
                  },
                  {
                    title: "Corporate Events",
                    description:
                      "Meeting catering, conference meals, and corporate gatherings",
                  },
                  {
                    title: "Households",
                    description:
                      "Large gatherings, meal prep surplus, and bulk purchases",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-emerald-600 rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-emerald-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Benefits of Donating
              </h3>
              <div className="space-y-4">
                {[
                  "Reduce waste disposal costs",
                  "Potential tax deductions",
                  "Positive community impact",
                  "Environmental benefits",
                  "Simple logistics coordination",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-emerald-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="for-recipients" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Who We Serve
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Icons.FoodBank, name: "Food Banks" },
                    { icon: Icons.Shelter, name: "Shelters" },
                    { icon: Icons.School, name: "Schools" },
                    { icon: Icons.Church, name: "Churches" },
                    { icon: Icons.Community, name: "Community Centers" },
                    { icon: Icons.Senior, name: "Senior Centers" },
                    { icon: Icons.Daycare, name: "Daycare Centers" },
                    { icon: Icons.Youth, name: "Youth Programs" },
                  ].map((org, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center justify-center">
                        <org.icon />
                      </div>
                      <span className="font-medium text-gray-700">
                        {org.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                For Organizations
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Access fresh, quality food donations to better serve your
                community. Our network connects you with local donors who want
                to help.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Quality Assurance
                    </h4>
                    <p className="text-gray-600">
                      All donations follow food safety guidelines to ensure
                      quality and freshness.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Local Network
                    </h4>
                    <p className="text-gray-600">
                      Connect with donors in your area for regular, reliable
                      food sources.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Flexible Scheduling
                    </h4>
                    <p className="text-gray-600">
                      Coordinate pickups that work with your organization's
                      schedule and capacity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join our community of donors, recipients, and volunteers working
            together to reduce food waste and fight hunger.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={()=>{navigate("/donor-signup")}} className="bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Start Donating
            </button>
            <button onClick={()=>{navigate("reciepient-signup")}} className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all duration-200">
              Find Food Resources
            </button>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-2xl font-bold">ShareBite</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Connecting surplus food with communities in need. Together,
                we're building a more sustainable and equitable food system.
              </p>
              <div className="flex space-x-4">
                {[
                  {
                    name: "Facebook",
                    icon: () => (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Twitter",
                    icon: () => (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "Instagram",
                    icon: () => (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          rx={5}
                          ry={5}
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.5 6.5h.01"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "LinkedIn",
                    icon: () => (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2 9h4v12H2z"
                        />
                        <circle
                          cx={4}
                          cy={4}
                          r={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <button
                    key={social.name}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200 group"
                    title={social.name}
                  >
                    <social.icon />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                {[
                  "How It Works",
                  "For Donors",
                  "For Recipients",
                  "About Us",
                  "Contact",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-emerald-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                {[
                  "Help Center",
                  "Safety Guidelines",
                  "Privacy Policy",
                  "Terms of Service",
                  "Donate",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-emerald-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 ShareBite. All rights reserved. Making communities
              stronger, one meal at a time.
            </p>
          </div>
        </div>
      </footer>
      <RoleSelectionModal
        isOpen={showRoleSelection}
        onClose={() => setShowRoleSelection(false)}
        onRoleSelect={handleRoleSelect}
      />
    </div>
  );
};

export default ShareBite;
