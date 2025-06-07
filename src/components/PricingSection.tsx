
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      description: "Perfect for getting started with AI nutrition",
      features: [
        "AI meal planning",
        "Grocery list generation",
        "Basic nutritional tracking",
        "Mobile app access",
        "Email support"
      ],
      popular: false,
      buttonText: "Start Basic Plan",
      buttonClass: "border-green-200 text-green-700 hover:bg-green-50"
    },
    {
      name: "Premium",
      price: "$79",
      period: "/month",
      description: "Most popular plan with meal kit delivery",
      features: [
        "Everything in Basic",
        "Fresh meal kit delivery",
        "AI recipe generation",
        "Real-time nutrition tracking",
        "Calendar integration",
        "Priority support"
      ],
      popular: true,
      buttonText: "Start Premium Plan",
      buttonClass: "bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
    },
    {
      name: "Pro",
      price: "$149",
      period: "/month",
      description: "Complete nutrition ecosystem with coaching",
      features: [
        "Everything in Premium",
        "Health sensor integration",
        "Personal nutrition coach",
        "Supplement recommendations",
        "Advanced analytics",
        "24/7 priority support"
      ],
      popular: false,
      buttonText: "Start Pro Plan",
      buttonClass: "border-blue-200 text-blue-700 hover:bg-blue-50"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Nutrition Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI-powered meal planning to complete meal kit delivery with coaching. 
            Find the perfect plan for your health journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'ring-2 ring-green-500 shadow-xl' : 'hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-6'}`}>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600 mt-4">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="px-6 pb-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.buttonClass}`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. Cancel anytime.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
