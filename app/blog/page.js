"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

const page = () => {
  return (
    <div className="min-h-screen pt-10 bg-[#0a101f] text-white">
      {/* Header */}
      {/* <div className="w-full py-16 px-6 text-center bg-[#0a101f]">
        <h1 className="text-4xl font-bold mb-3">
          My <span className="text-purple-400">Blogs</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore my insights, experiences, and learnings on technology,
          software development, and beyond. From coding tips and project
          breakdowns to industry trends and personal reflections.
        </p>
      </div> */}

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <div className="mb-10 space-y-6">
          {/* Search */}
          <div className="text-center py-16">
            <div className="mx-auto w-16 h-16 rounded-full bg-[#2a3349] flex items-center justify-center mb-4">
              <Search className="text-gray-400" size={24} />
            </div>
            <h3 className="text-xl mb-2 text-purple-400 font-bold">No Blogs yet..</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Stay tuned! I&apos;ll be sharing insights, technical guides, and
              project experiences soon. Check back later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
