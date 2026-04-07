import { Book } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="text-center py-16 h-screen flex flex-col items-center justify-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-[#2a3349] flex items-center justify-center mb-4">
          <Book className="text-gray-400" size={24} />
        </div>
        <h3 className="text-xl mb-2 text-purple-400 font-bold">
          No Written Resource Available Yet
        </h3>
        <p className="text-slate-400 max-w-md mx-auto">
          Stay tuned! I&apos;ll be sharing  soon. Check back later.
        </p>
      </div>
    </div>
  );
};

export default page;
