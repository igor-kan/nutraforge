
import { Card, CardContent } from "@/components/ui/card";

const StatsSection = () => {
  const stats = [
    {
      number: "15",
      unit: "lbs",
      description: "Average weight loss in 3 months",
      color: "text-green-600"
    },
    {
      number: "92",
      unit: "%",
      description: "Users report improved energy levels",
      color: "text-blue-600"
    },
    {
      number: "4.8",
      unit: "/5",
      description: "Average meal satisfaction rating",
      color: "text-purple-600"
    },
    {
      number: "30",
      unit: "min",
      description: "Average cooking time per meal",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color}`}>
                    {stat.number}
                    <span className="text-lg">{stat.unit}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
