import React from "react";
import { Tag } from "lucide-react";

interface HashTagsProps {
  tags: string[];
}

const HashTags: React.FC<HashTagsProps> = ({ tags }) => {
  if (tags.length === 0) return null;

  return (
    // <div className="pt-4 flex flex-wrap gap-2 mb-4">
    //   {tags.map((tag, index) => (
    //     <span
    //       key={index}
    //       className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
    //     >
    //       #{tag}
    //     </span>
    //   ))}
    // </div>
    <div className="flex flex-wrap mb-3 items-center gap-1 pt-3">
      <Tag className="w-3 h-3 text-[#a4a9af]" />
      {tags.slice(0, 3).map((tag, index) => (
        <span key={index} className="px-1 py-0.5text-[#a4a9af] text-sm">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default HashTags;
