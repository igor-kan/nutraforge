
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Users, CheckCircle } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: "AI Recipe Generation",
      description: "Our AI creates unique recipes tailored to your nutritional needs, dietary restrictions, and taste preferences.",
      benefits: ["Personalized nutrition", "Endless variety", "Dietary compliance", "Taste optimization"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Calendar,
      title: "Smart Meal Planning",
      description: "Intelligent planning that syncs with your calendar, workout schedule, and lifestyle for optimal nutrition timing.",
      benefits: ["Calendar integration", "Workout optimization", "Lifestyle sync", "Automated planning"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Health Feedback Loop",
      description: "Real-time adjustments based on your health metrics, progress tracking, and biometric data integration.",
      benefits: ["Health tracking", "Progress monitoring", "Biometric sync", "Adaptive planning"],
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-green-100 text-green-800 mb-4">
            Powered by AI
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Revolutionary Nutrition Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI doesn't just plan meals – it learns from your body, adapts to your lifestyle, 
            and evolves with your health journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-3 text-left">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The Science Behind NutraForge
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">2M+</div>
                  <div className="text-gray-600">Nutritional data points</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-gray-600">Accuracy in macro tracking</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
                  <div className="text-gray-600">Unique recipes generated</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
