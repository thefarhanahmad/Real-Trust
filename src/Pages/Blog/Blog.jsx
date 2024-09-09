import React from 'react';
import img1 from '../../assets/Images/Home-img/slider1.jpeg';
import img2 from '../../assets/Images/Home-img/slider2.jpeg';
import img3 from '../../assets/Images/Home-img/slider3.jpeg';
import img4 from '../../assets/Images/Home-img/slider4.jpeg';
import img5 from '../Home/Properties/img/property1.jpeg';
import img6 from '../Home/Properties/img/property2.jpeg';

const Blog = () => {
  const blogPosts = [
    {
      title: "Exploring Prime Real Estate Opportunities",
      date: "August 10, 2024",
      author: "Real Trust Team",
      excerpt: "Discover the latest insights on the most desirable properties available in today's market. Our experts provide in-depth analysis to help you make informed decisions.",
      image: img1,
      additionalContent: "Our real estate experts offer a comprehensive overview of key market trends and prime investment opportunities. This post includes data-driven insights and expert recommendations to guide your property investments."
    },
    {
      title: "The Ultimate Guide to Investing in Real Estate",
      date: "August 8, 2024",
      author: "Real Trust Team",
      excerpt: "Learn about effective strategies and tips for investing in real estate. Whether you're a first-time buyer or an experienced investor, this guide will enhance your investment knowledge.",
      image: img2,
      additionalContent: "Gain a deep understanding of various investment strategies, including residential, commercial, and rental properties. This guide provides actionable tips and expert advice to help you build a successful real estate portfolio."
    },
    {
      title: "Top Neighborhoods for Family Living",
      date: "August 6, 2024",
      author: "Real Trust Team",
      excerpt: "Explore the best neighborhoods for family living, featuring top-rated schools, parks, and community amenities. Find your perfect family home with our expert recommendations.",
      image: img3,
      additionalContent: "Discover family-friendly neighborhoods with excellent schools, safe environments, and recreational facilities. Our detailed analysis will help you choose the ideal location for your family’s needs."
    },
    {
      title: "How to Prepare Your Home for Sale",
      date: "August 4, 2024",
      author: "Real Trust Team",
      excerpt: "Get your home ready for the market with our comprehensive preparation checklist. From staging tips to necessary repairs, ensure your property stands out to potential buyers.",
      image: img4,
      additionalContent: "Learn essential steps to prepare your home for a successful sale. Our checklist includes tips on home staging, minor repairs, and strategies to enhance curb appeal to attract potential buyers."
    },
    {
      title: "Luxury Properties: What to Look For",
      date: "August 10, 2024",
      author: "Real Trust Team",
      excerpt: "Delve into the world of luxury real estate and discover what makes a property truly exceptional. Our guide highlights key features and trends in the luxury market.",
      image: img5,
      additionalContent: "Explore the high-end real estate market and understand the factors that define luxury properties. This post covers unique features, current trends, and what to consider when purchasing a luxury home."
    },
    {
      title: "Understanding Market Trends in Real Estate",
      date: "August 6, 2024",
      author: "Real Trust Team",
      excerpt: "Stay ahead of the curve with our analysis of current real estate market trends. Understand the factors driving market changes and how they impact property values.",
      image: img6,
      additionalContent: "Stay informed with our market trend analysis. This post examines economic factors, emerging trends, and market shifts to help you make strategic real estate decisions."
    },
  ];

  return (
    <div className="py-20 px-6 lg:px-20">
      {blogPosts.map((post, index) => (
        <div key={index} className="mb-12">
          {/* Image Section */}
          <div className="flex justify-center mb-6">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-[800px] h-[400px] object-cover rounded-lg shadow-lg" 
            />
          </div>
          
          {/* Text Content Section */}
          <div className="flex flex-col items-start ml-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-gray-600 text-sm mb-2">{post.date} | By {post.author}</p>
            <p className="text-gray-800 text-base leading-relaxed mb-4">{post.excerpt}</p>
            <p className="text-gray-800 text-base leading-relaxed mb-6">{post.additionalContent}</p>
            <button className="py-2 px-4 bg-yellow-500 text-black border-2 border-yellow-500 rounded-lg font-medium hover:bg-yellow-600 transition-colors">
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
