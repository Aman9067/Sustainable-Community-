import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      title: "Sustainable Living: A Step Toward a Greener Future",
      description: "Learn how small changes in your daily life can lead to a more sustainable future.",
      image: "https://images.pexels.com/photos/264602/pexels-photo-264602.jpeg",
      link: "#"
    },
    {
      title: "Eco-Friendly Building Materials: Building for the Future",
      description: "Explore the latest eco-friendly materials that are transforming the construction industry.",
      image: "https://images.pexels.com/photos/1336955/pexels-photo-1336955.jpeg",
      link: "#"
    },
    {
      title: "The Importance of Green Spaces in Urban Areas",
      description: "Green spaces play a vital role in urban sustainability. Learn more about their benefits.",
      image: "https://images.pexels.com/photos/280207/pexels-photo-280207.jpeg",
      link: "#"
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className=''>
        <video className='mt-12' src="https://videos.pexels.com/video-files/1943483/1943483-uhd_2560_1440_25fps.mp4"autoPlay muted loop></video>
      </div>
     
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700">Our Blog: Sustainable Living</h2>
        <p className="text-lg text-gray-600 mt-4">Stay updated with our latest articles on sustainability and green living.</p>
      </div>

    
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-green-700">{post.title}</h3>
              <p className="text-gray-600 mt-3">{post.description}</p>
              <a href={post.link} className="text-green-600 mt-4 inline-block hover:underline">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-16">
        <p className="text-lg text-gray-600">
          Interested in more? <Link to ="/contact" className="text-green-600 hover:underline">Contact us</Link> to learn how you can contribute.
        </p>
      </div>




















































    </div>
  );
};









export default Blog;
