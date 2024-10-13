import React from "react";
import Navbar from "./Navbar";
import img from '../491302.jpg'

const HomePage = () => {
  const featuredPost = {
    title: "Welcome to My Blog!",
    description: "This is a sample blog where you can explore various topics ranging from technology to lifestyle. Stay tuned for exciting content!",
    imageUrl: "https://via.placeholder.com/600x300",
    author: "John Doe",
    date: "October 12, 2024",
  };

  const recentPosts = [
    {
      title: "Understanding JavaScript Closures",
      description:
        "Dive deep into one of the most important concepts in JavaScript – closures.",
      date: "October 10, 2024",
      author: "Jane Doe",
    },
    {
      title: "How to Build Responsive Websites",
      description:
        "Learn how to make your websites look great on any screen size with responsive design techniques.",
      date: "October 8, 2024",
      author: "Alex Smith",
    },
    {
      title: "An Introduction to Machine Learning",
      description:
        "Get started with machine learning by learning the basics and exploring real-world applications.",
      date: "October 5, 2024",
      author: "Michael Johnson",
    },
  ];


  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-orange-500 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">My Blog</h1>
          <p className="text-lg">Explore the world of knowledge</p>
        </div>
      </header>

      {/* Featured Post */}
      <section className="container mx-auto px-4 mt-10">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            className="w-full h-64 object-cover"
            src={img}
            alt={featuredPost.title}
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">{featuredPost.title}</h2>
            <p className="text-gray-600 mt-4">{featuredPost.description}</p>
            <div className="mt-6 flex justify-between items-center">
              <span className="text-sm text-gray-500">{featuredPost.date}</span>
              <span className="text-sm text-gray-500">By {featuredPost.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="container mx-auto px-4 mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mt-2">{post.description}</p>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <span className="text-sm text-gray-500">By {post.author}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
