
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Calendar } from "lucide-react";

const MealPlanPreview = () => {
  const sampleMeals = [
    {
      id: 1,
      name: "Mediterranean Quinoa Bowl",
      calories: 485,
      protein: "24g",
      cookTime: "25 min",
      difficulty: "Easy",
      tags: ["High Protein", "Vegetarian", "Gluten-Free"],
      image: "bg-gradient-to-br from-green-200 to-green-400",
    },
    {
      id: 2,
      name: "Spicy Korean Beef Stir-fry",
      calories: 520,
      protein: "32g",
      cookTime: "20 min",
      difficulty: "Medium",
      tags: ["High Protein", "Spicy", "Low Carb"],
      image: "bg-gradient-to-br from-red-200 to-red-400",
    },
    {
      id: 3,
      name: "Thai Coconut Curry Salmon",
      calories: 445,
      protein: "28g",
      cookTime: "30 min",
      difficulty: "Easy",
      tags: ["Omega-3", "Anti-inflammatory", "Keto"],
      image: "bg-gradient-to-br from-orange-200 to-orange-400",
    },
  ];

  return (
    <section className="py-20 bg-white" id="meal-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            AI-Generated Meal Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every meal is uniquely crafted by our AI to match your nutritional needs, 
            taste preferences, and health goals. Fresh ingredients delivered weekly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {sampleMeals.map((meal) => (
            <Card key={meal.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className={`h-48 ${meal.image}`}></div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{meal.name}</CardTitle>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-4">
                    <span className="font-medium">{meal.calories} cal</span>
                    <span>{meal.protein} protein</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{meal.cookTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{meal.difficulty}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {meal.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Your Weekly Meal Plan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Personalized Planning</h4>
                  <p className="text-gray-600 text-sm">AI analyzes your goals and preferences</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Recipe Generation</h4>
                  <p className="text-gray-600 text-sm">Unique recipes created just for you</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Fresh Delivery</h4>
                  <p className="text-gray-600 text-sm">Ingredients delivered to your door</p>
                </div>
              </div>
              <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                See Your Personalized Plan
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MealPlanPreview;
