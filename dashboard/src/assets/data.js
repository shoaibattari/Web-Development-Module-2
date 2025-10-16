export const DUMMY_DATA = {
  users: [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
    { id: 3, name: "Ali Khan", email: "ali@example.com", role: "Viewer" },
    { id: 4, name: "Sara Ahmed", email: "sara@example.com", role: "Admin" },
    { id: 5, name: "Usman Tariq", email: "usman@example.com", role: "Editor" },
    { id: 6, name: "Maryam Raza", email: "maryam@example.com", role: "Viewer" },
    { id: 7, name: "Ahmed Bilal", email: "ahmed@example.com", role: "Admin" },
    { id: 8, name: "Hina Malik", email: "hina@example.com", role: "Editor" },
    {
      id: 9,
      name: "Faisal Iqbal",
      email: "faisal@example.com",
      role: "Viewer",
    },
    { id: 10, name: "Zara Sheikh", email: "zara@example.com", role: "Admin" },
  ],

  products: [
    { id: 1, name: "Laptop", price: "$1000", stock: "20 pcs" },
    { id: 2, name: "Mouse", price: "$25", stock: "200 pcs" },
    { id: 3, name: "Keyboard", price: "$45", stock: "150 pcs" },
    { id: 4, name: "Monitor", price: "$150", stock: "80 pcs" },
    { id: 5, name: "Headphones", price: "$75", stock: "120 pcs" },
    { id: 6, name: "USB Cable", price: "$10", stock: "300 pcs" },
    { id: 7, name: "Webcam", price: "$60", stock: "60 pcs" },
    { id: 8, name: "Smartphone", price: "$800", stock: "40 pcs" },
    { id: 9, name: "Tablet", price: "$500", stock: "35 pcs" },
    { id: 10, name: "Speaker", price: "$90", stock: "70 pcs" },
  ],

  orders: [
    { id: 1, customer: "Ali Khan", date: "2025-10-10", status: "Completed" },
    { id: 2, customer: "Sara Ahmed", date: "2025-10-11", status: "Pending" },
    { id: 3, customer: "John Doe", date: "2025-10-12", status: "Completed" },
    { id: 4, customer: "Hina Malik", date: "2025-10-13", status: "Pending" },
    { id: 5, customer: "Usman Tariq", date: "2025-10-14", status: "Completed" },
    { id: 6, customer: "Maryam Raza", date: "2025-10-15", status: "Completed" },
    { id: 7, customer: "Ahmed Bilal", date: "2025-10-16", status: "Pending" },
    {
      id: 8,
      customer: "Faisal Iqbal",
      date: "2025-10-17",
      status: "Completed",
    },
    { id: 9, customer: "Jane Smith", date: "2025-10-18", status: "Pending" },
    {
      id: 10,
      customer: "Zara Sheikh",
      date: "2025-10-19",
      status: "Completed",
    },
  ],

  categories: [
    { id: 1, title: "Electronics", description: "Devices and gadgets" },
    { id: 2, title: "Fashion", description: "Clothing and accessories" },
    {
      id: 3,
      title: "Home Appliances",
      description: "Kitchen and home devices",
    },
    { id: 4, title: "Books", description: "Education and literature" },
    { id: 5, title: "Toys", description: "Kids and baby products" },
    { id: 6, title: "Sports", description: "Outdoor and gym equipment" },
    { id: 7, title: "Beauty", description: "Cosmetics and care" },
    { id: 8, title: "Automotive", description: "Car accessories" },
    { id: 9, title: "Groceries", description: "Daily essentials" },
    { id: 10, title: "Stationery", description: "Office and school supplies" },
  ],

  customers: [
    { id: 1, name: "Ali Khan", phone: "03001234567", city: "Karachi" },
    { id: 2, name: "Sara Ahmed", phone: "03112345678", city: "Lahore" },
    { id: 3, name: "John Doe", phone: "03211234567", city: "Islamabad" },
    { id: 4, name: "Hina Malik", phone: "03331234567", city: "Faisalabad" },
    { id: 5, name: "Usman Tariq", phone: "03451234567", city: "Rawalpindi" },
    { id: 6, name: "Maryam Raza", phone: "03561234567", city: "Multan" },
    { id: 7, name: "Ahmed Bilal", phone: "03671234567", city: "Quetta" },
    { id: 8, name: "Faisal Iqbal", phone: "03781234567", city: "Peshawar" },
    { id: 9, name: "Jane Smith", phone: "03891234567", city: "Hyderabad" },
    { id: 10, name: "Zara Sheikh", phone: "03901234567", city: "Sialkot" },
  ],

  payments: [
    { id: 1, orderId: "#1001", amount: "$500", method: "Card" },
    { id: 2, orderId: "#1002", amount: "$250", method: "Cash" },
    { id: 3, orderId: "#1003", amount: "$750", method: "Card" },
    { id: 4, orderId: "#1004", amount: "$100", method: "Cash" },
    { id: 5, orderId: "#1005", amount: "$900", method: "Card" },
    { id: 6, orderId: "#1006", amount: "$400", method: "Cash" },
    { id: 7, orderId: "#1007", amount: "$600", method: "Card" },
    { id: 8, orderId: "#1008", amount: "$200", method: "Cash" },
    { id: 9, orderId: "#1009", amount: "$800", method: "Card" },
    { id: 10, orderId: "#1010", amount: "$300", method: "Cash" },
  ],

  shipments: [
    { id: 1, orderId: "#2001", status: "Delivered", date: "2025-10-05" },
    { id: 2, orderId: "#2002", status: "Shipped", date: "2025-10-06" },
    { id: 3, orderId: "#2003", status: "Delivered", date: "2025-10-07" },
    { id: 4, orderId: "#2004", status: "Shipped", date: "2025-10-08" },
    { id: 5, orderId: "#2005", status: "Delivered", date: "2025-10-09" },
    { id: 6, orderId: "#2006", status: "Shipped", date: "2025-10-10" },
    { id: 7, orderId: "#2007", status: "Delivered", date: "2025-10-11" },
    { id: 8, orderId: "#2008", status: "Shipped", date: "2025-10-12" },
    { id: 9, orderId: "#2009", status: "Delivered", date: "2025-10-13" },
    { id: 10, orderId: "#2010", status: "Shipped", date: "2025-10-14" },
  ],

  reviews: [
    { id: 1, user: "Ali Khan", product: "Laptop", rating: "5⭐" },
    { id: 2, user: "Sara Ahmed", product: "Mouse", rating: "4⭐" },
    { id: 3, user: "John Doe", product: "Keyboard", rating: "5⭐" },
    { id: 4, user: "Hina Malik", product: "Monitor", rating: "4⭐" },
    { id: 5, user: "Usman Tariq", product: "Headphones", rating: "5⭐" },
    { id: 6, user: "Maryam Raza", product: "Smartphone", rating: "4⭐" },
    { id: 7, user: "Ahmed Bilal", product: "Speaker", rating: "5⭐" },
    { id: 8, user: "Faisal Iqbal", product: "Tablet", rating: "4⭐" },
    { id: 9, user: "Jane Smith", product: "USB Cable", rating: "5⭐" },
    { id: 10, user: "Zara Sheikh", product: "Webcam", rating: "4⭐" },
  ],

  notifications: [
    {
      id: 1,
      title: "System Update",
      message: "Scheduled for tonight",
      date: "2025-10-15",
    },
    {
      id: 2,
      title: "New Feature",
      message: "Added export option",
      date: "2025-10-16",
    },
    {
      id: 3,
      title: "Maintenance",
      message: "Planned for Sunday",
      date: "2025-10-17",
    },
    {
      id: 4,
      title: "Offer",
      message: "20% discount on products",
      date: "2025-10-18",
    },
    {
      id: 5,
      title: "Reminder",
      message: "Payment due soon",
      date: "2025-10-19",
    },
    {
      id: 6,
      title: "Alert",
      message: "New login detected",
      date: "2025-10-20",
    },
    {
      id: 7,
      title: "Survey",
      message: "Share your feedback",
      date: "2025-10-21",
    },
    {
      id: 8,
      title: "Promotion",
      message: "Buy 1 Get 1 Free",
      date: "2025-10-22",
    },
    {
      id: 9,
      title: "Security",
      message: "Password updated",
      date: "2025-10-23",
    },
    {
      id: 10,
      title: "Thanks",
      message: "Thank you for your order",
      date: "2025-10-24",
    },
  ],

  settings: [
    { key: "Theme", value: "Dark Mode", type: "UI", updated: "2025-10-17" },
    {
      key: "Language",
      value: "English",
      type: "General",
      updated: "2025-10-17",
    },
    {
      key: "Notifications",
      value: "Enabled",
      type: "System",
      updated: "2025-10-18",
    },
    {
      key: "Backup",
      value: "Auto Daily",
      type: "System",
      updated: "2025-10-19",
    },
    { key: "Timezone", value: "GMT+5", type: "General", updated: "2025-10-20" },
    { key: "Currency", value: "USD", type: "General", updated: "2025-10-21" },
    { key: "Privacy", value: "High", type: "Security", updated: "2025-10-22" },
    { key: "ThemeColor", value: "Blue", type: "UI", updated: "2025-10-23" },
    {
      key: "AutoUpdate",
      value: "Enabled",
      type: "System",
      updated: "2025-10-24",
    },
    { key: "APIKey", value: "Active", type: "Security", updated: "2025-10-25" },
  ],
};

// ✅ Headers Auto-Matched to Data
export const RESOURCE_HEADERS = Object.fromEntries(
  Object.entries(DUMMY_DATA).map(([key, value]) => [
    key,
    Object.keys(value[0]).map((k) => k.charAt(0).toUpperCase() + k.slice(1)),
  ])
);

export const RESOURCES = Object.keys(DUMMY_DATA);
export const salesData = [
  { month: "Jan", revenue: 4000, orders: 240 },
  { month: "Feb", revenue: 3000, orders: 210 },
  { month: "Mar", revenue: 5000, orders: 300 },
  { month: "Apr", revenue: 4500, orders: 270 },
  { month: "May", revenue: 6000, orders: 340 },
  { month: "Jun", revenue: 7000, orders: 380 },
];

export const userGrowth = [
  { month: "Jan", users: 200 },
  { month: "Feb", users: 240 },
  { month: "Mar", users: 280 },
  { month: "Apr", users: 350 },
  { month: "May", users: 420 },
  { month: "Jun", users: 500 },
];
