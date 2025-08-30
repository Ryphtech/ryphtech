import React from "react";
import { BackgroundGradient } from "./background-gradient";
import { Globe, Smartphone, Brain } from "lucide-react";

export default function BackgroundGradientDemo() {
  const demoItems = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies like React, Next.js, and Node.js.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Smartphone,
      title: "App Development", 
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "AI-powered solutions and predictive analytics to transform your business.",
      color: "from-green-500 to-blue-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {demoItems.map((item, index) => (
        <BackgroundGradient 
          key={item.title}
          className="p-8 text-center group bg-white dark:bg-dark-800 rounded-3xl"
        >
          <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
            <item.icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{item.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {item.description}
          </p>
        </BackgroundGradient>
      ))}
    </div>
  );
}
