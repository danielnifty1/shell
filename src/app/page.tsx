"use client";

import Context from "./components/shared/Context";

// import { useState } from "react";

export default function Home() {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
     

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Recruiting Without Limits.
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-12">
            Speed and Scale.
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We are building a new model for recruitment. One that combines revenue sharing, a marketing engine, a competitive broker community, and an AI-driven learning platform. This is recruitment rewritten for the modern era.
          </p>
        </div>
      </main>

      {/* Features Section */}
      <Context />

      {/* Future Vision Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Future Vision</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community & AI Integration</h3>
              <p className="text-gray-700 mb-6">
                Our platform will evolve to include real-time collaboration tools, AI-powered candidate matching, 
                and predictive analytics for recruitment success. The community will become a self-sustaining 
                ecosystem where brokers learn from each other and AI insights drive better outcomes.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Real-time Chat</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">AI Matching</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Analytics Dashboard</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Learning Paths</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
