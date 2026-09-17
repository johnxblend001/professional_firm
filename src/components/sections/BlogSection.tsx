import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {
  const articles = [
    {
      id: "social-media-hacks",
      day: "17",
      month: "Feb",
      category: "Corporate Advisory",
      author: "admin",
      title: "Three key social media hacks for an entrepreneur",
      image:
        "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/Blog-4-735x498.jpg",
      href: "#blog",
    },
    {
      id: "financial-guidance",
      day: "09",
      month: "Jan",
      category: "Corporate Advisory",
      author: "admin",
      title: "Financial guidance that fits your personal goals",
      image:
        "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/Blog-1-735x498.jpg",
      href: "#blog",
    },
    {
      id: "confident-investing",
      day: "10",
      month: "Dec",
      category: "Risk Management",
      author: "admin",
      title: "Confident investing using a risk aware strategies",
      image:
        "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/01/Blog-2-735x498.jpg",
      href: "#blog",
    },
  ];

  return (
    <section id="blog" className="py-20 lg:py-28 bg-[#f2f5f1]">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white text-xs font-semibold text-[#181818] shadow-xs border border-gray-200/60 mb-4">
            <span className="text-[#063633]">✦</span>
            <span>Financial insights</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#181818] leading-[1.2] tracking-tight">
            Finance tips, market trends and expert guidance
          </h2>
        </div>

        {/* 3 Column Blog Post Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-[24px] overflow-hidden border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Featured Image Container with Floating Date Tag */}
                <div className="relative w-full aspect-[735/498] overflow-hidden bg-gray-100">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Floating Date Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-xl px-3 py-2 text-center shadow-md">
                    <div className="text-lg font-black text-[#181818] leading-none">
                      {article.day}
                    </div>
                    <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mt-0.5">
                      {article.month}
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-7">
                  {/* Category & Author Meta */}
                  <div className="flex items-center space-x-3 text-xs text-gray-500 font-medium mb-3">
                    <span className="text-[#063633] font-semibold">
                      {article.category}
                    </span>
                    <span>•</span>
                    <span>by : {article.author}</span>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-[#181818] group-hover:text-[#063633] transition-colors leading-snug">
                    <Link href={article.href}>{article.title}</Link>
                  </h4>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-7 pb-7 pt-2">
                <Link
                  href={article.href}
                  className="text-xs font-bold text-[#063633] hover:underline inline-flex items-center space-x-1"
                >
                  <span>Read Article</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
