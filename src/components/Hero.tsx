
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                AI-Powered Nutrition
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Eat what your{" "}
                <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                  body needs
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                AI-powered meal kits tailored to your health goals, dietary needs, and lifestyle. 
                Get fresh ingredients and personalized recipes delivered to your door.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-lg px-8 py-3"
                onClick={onGetStarted}
              >
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="border-green-200 text-green-700 hover:bg-green-50 text-lg px-8 py-3">
                See How It Works
              </Button>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">AI-generated recipes</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Fresh ingredients</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Personalized nutrition</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Card className="transform rotate-3 hover:rotate-6 transition-transform duration-300">
                <CardContent className="p-4">
                  <div className="w-full h-32 bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg mb-3"></div>
                  <h3 className="font-semibold text-gray-900">Spicy Thai Bowl</h3>
                  <p className="text-sm text-gray-600">520 cal • High protein</p>
                  <Badge className="mt-2 bg-green-100 text-green-800">Perfect Match</Badge>
                </CardContent>
              </Card>
              
              <Card className="transform -rotate-2 hover:-rotate-3 transition-transform duration-300 mt-8">
                <CardContent className="p-4">
                  <div className="w-full h-32 bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg mb-3"></div>
                  <h3 className="font-semibold text-gray-900">Mediterranean Wrap</h3>
                  <p className="text-sm text-gray-600">380 cal • Low carb</p>
                  <Badge className="mt-2 bg-blue-100 text-blue-800">Keto Friendly</Badge>
                </CardContent>
              </Card>
              
              <Card className="transform rotate-1 hover:rotate-2 transition-transform duration-300 -mt-4">
                <CardContent className="p-4">
                  <div className="w-full h-32 bg-gradient-to-br from-green-200 to-green-300 rounded-lg mb-3"></div>
                  <h3 className="font-semibold text-gray-900">Power Smoothie Bowl</h3>
                  <p className="text-sm text-gray-600">340 cal • Antioxidant rich</p>
                  <Badge className="mt-2 bg-purple-100 text-purple-800">Energy Boost</Badge>
                </CardContent>
              </Card>
              
              <Card className="transform -rotate-1 hover:-rotate-2 transition-transform duration-300">
                <CardContent className="p-4">
                  <div className="w-full h-32 bg-gradient-to-br from-red-200 to-red-300 rounded-lg mb-3"></div>
                  <h3 className="font-semibold text-gray-900">Lean Protein Plate</h3>
                  <p className="text-sm text-gray-600">450 cal • Muscle building</p>
                  <Badge className="mt-2 bg-red-100 text-red-800">Post-Workout</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
