
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Calendar, Search } from "lucide-react";
import Hero from "@/components/Hero";
import PersonalizationForm from "@/components/PersonalizationForm";
import MealPlanPreview from "@/components/MealPlanPreview";
import PricingSection from "@/components/PricingSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  const [showPersonalization, setShowPersonalization] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-teal-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900">NutraForge</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-green-600 transition-colors">Pricing</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors">How It Works</a>
              <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <Hero onGetStarted={() => setShowPersonalization(true)} />
      
      {showPersonalization ? (
        <PersonalizationForm onComplete={() => setShowPersonalization(false)} />
      ) : (
        <>
          <StatsSection />
          <FeaturesSection />
          <MealPlanPreview />
          <PricingSection />
        </>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg"></div>
                <span className="text-xl font-bold">NutraForge</span>
              </div>
              <p className="text-gray-400">Eat what your body needs, not just what's in your fridge.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Meal Plans</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Nutrition</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Delivery</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NutraForge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
