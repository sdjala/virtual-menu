import { motion } from "motion/react";

export default function Home() {
  const menuItems = [
    { name: "🍕 Pizza", price: "$10" },
    { name: "🍔 Burger", price: "$8" },
    { name: "🍜 Pasta", price: "$12" },
  ];
  
  return (
    <div className="min-h-screen p-5 flex flex-col items-center bg-gray-50">
      <motion.h1
        className="text-4xl font-bold text-orange-500 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Menu
      </motion.h1>

      {/* Animated Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 rounded-lg shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p>{item.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}