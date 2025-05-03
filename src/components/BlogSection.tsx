import React from 'react';

const BlogSection: React.FC = () => {
    const blogPosts = [
        {
            id: 1,
            title: "The Future of Web Development",
            excerpt: "Explore the latest trends and technologies shaping the future of web development in 2024.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            date: "March 15, 2024"
        },
        {
            id: 2,
            title: "AI in Software Development",
            excerpt: "How artificial intelligence is revolutionizing the way we build and maintain software applications.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            date: "March 12, 2024"
        },
        {
            id: 3,
            title: "Cloud Computing Best Practices",
            excerpt: "Essential strategies and best practices for successful cloud implementation and management.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            date: "March 10, 2024"
        }
    ];

    return (
        <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Latest Blog Posts</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">Stay updated with our latest insights and news</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                            <div className="relative h-48">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{post.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                                <a
                                    href="#"
                                    className="inline-flex items-center text-[#ffb100] hover:text-[#ffb100]/80 transition-colors"
                                >
                                    Read More
                                    <svg
                                        className="w-4 h-4 ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection; 