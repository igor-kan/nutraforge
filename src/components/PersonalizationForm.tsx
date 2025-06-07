
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface PersonalizationFormProps {
  onComplete: () => void;
}

const PersonalizationForm = ({ onComplete }: PersonalizationFormProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    goal: "",
    dietaryRestrictions: [] as string[],
    activityLevel: "",
    budget: "",
    preferences: [] as string[]
  });

  const totalSteps = 5;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20" id="personalization">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Let's personalize your nutrition
          </h2>
          <p className="text-xl text-gray-600">
            Answer a few questions to get your AI-powered meal plan
          </p>
          <div className="mt-8">
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-gray-500 mt-2">Step {step} of {totalSteps}</p>
          </div>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-center">
              {step === 1 && "What's your primary health goal?"}
              {step === 2 && "Any dietary restrictions?"}
              {step === 3 && "How active are you?"}
              {step === 4 && "What's your budget preference?"}
              {step === 5 && "Food preferences"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {step === 1 && (
              <RadioGroup value={formData.goal} onValueChange={(value) => updateFormData("goal", value)}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="weight-loss" id="weight-loss" />
                    <Label htmlFor="weight-loss" className="flex-1 cursor-pointer">
                      <div className="font-medium">Weight Loss</div>
                      <div className="text-sm text-gray-500">Sustainable, healthy weight management</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="muscle-gain" id="muscle-gain" />
                    <Label htmlFor="muscle-gain" className="flex-1 cursor-pointer">
                      <div className="font-medium">Muscle Gain</div>
                      <div className="text-sm text-gray-500">Build lean muscle with optimized nutrition</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="energy" id="energy" />
                    <Label htmlFor="energy" className="flex-1 cursor-pointer">
                      <div className="font-medium">More Energy</div>
                      <div className="text-sm text-gray-500">Feel energized throughout the day</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="general-health" id="general-health" />
                    <Label htmlFor="general-health" className="flex-1 cursor-pointer">
                      <div className="font-medium">General Health</div>
                      <div className="text-sm text-gray-500">Maintain overall wellness and longevity</div>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            )}

            {step === 2 && (
              <div className="grid grid-cols-2 gap-4">
                {["Vegetarian", "Vegan", "Keto", "Paleo", "Gluten-Free", "Dairy-Free", "Nut-Free", "None"].map((restriction) => (
                  <div key={restriction} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                    <Checkbox 
                      id={restriction}
                      checked={formData.dietaryRestrictions.includes(restriction)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          updateFormData("dietaryRestrictions", [...formData.dietaryRestrictions, restriction]);
                        } else {
                          updateFormData("dietaryRestrictions", formData.dietaryRestrictions.filter(r => r !== restriction));
                        }
                      }}
                    />
                    <Label htmlFor={restriction} className="cursor-pointer">{restriction}</Label>
                  </div>
                ))}
              </div>
            )}

            {step === 3 && (
              <RadioGroup value={formData.activityLevel} onValueChange={(value) => updateFormData("activityLevel", value)}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="sedentary" id="sedentary" />
                    <Label htmlFor="sedentary" className="flex-1 cursor-pointer">
                      <div className="font-medium">Sedentary</div>
                      <div className="text-sm text-gray-500">Little to no exercise</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="light" id="light" />
                    <Label htmlFor="light" className="flex-1 cursor-pointer">
                      <div className="font-medium">Lightly Active</div>
                      <div className="text-sm text-gray-500">Exercise 1-3 times per week</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="moderate" id="moderate" />
                    <Label htmlFor="moderate" className="flex-1 cursor-pointer">
                      <div className="font-medium">Moderately Active</div>
                      <div className="text-sm text-gray-500">Exercise 3-5 times per week</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="very-active" id="very-active" />
                    <Label htmlFor="very-active" className="flex-1 cursor-pointer">
                      <div className="font-medium">Very Active</div>
                      <div className="text-sm text-gray-500">Exercise 6-7 times per week</div>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            )}

            {step === 4 && (
              <RadioGroup value={formData.budget} onValueChange={(value) => updateFormData("budget", value)}>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="budget" id="budget" />
                    <Label htmlFor="budget" className="flex-1 cursor-pointer">
                      <div className="font-medium">Budget-Friendly</div>
                      <div className="text-sm text-gray-500">$8-12 per meal</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="flex-1 cursor-pointer">
                      <div className="font-medium">Standard</div>
                      <div className="text-sm text-gray-500">$12-18 per meal</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value="premium" id="premium" />
                    <Label htmlFor="premium" className="flex-1 cursor-pointer">
                      <div className="font-medium">Premium</div>
                      <div className="text-sm text-gray-500">$18+ per meal with premium ingredients</div>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            )}

            {step === 5 && (
              <div className="grid grid-cols-2 gap-4">
                {["Italian", "Asian", "Mexican", "Mediterranean", "American", "Indian", "Thai", "Middle Eastern"].map((cuisine) => (
                  <div key={cuisine} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                    <Checkbox 
                      id={cuisine}
                      checked={formData.preferences.includes(cuisine)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          updateFormData("preferences", [...formData.preferences, cuisine]);
                        } else {
                          updateFormData("preferences", formData.preferences.filter(p => p !== cuisine));
                        }
                      }}
                    />
                    <Label htmlFor={cuisine} className="cursor-pointer">{cuisine}</Label>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-between pt-6">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={step === 1}
              >
                Previous
              </Button>
              <Button 
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                onClick={handleNext}
              >
                {step === totalSteps ? "Get My Plan" : "Next"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PersonalizationForm;
