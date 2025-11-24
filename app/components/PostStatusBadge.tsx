interface PostStatusBadgeProps {
  published: boolean;
}

export default function PostStatusBadge({ published }: PostStatusBadgeProps) {
  return (
    // <span
    //   className={`px-2 py-0.5 inline-flex text-xs font-medium rounded-md ${
    //     published
    //       ? "bg-[#dafbe1] text-[#1a7f37]"
    //       : "bg-[#f6f8fa] text-[#57606a] border border-[#d0d7de]"
    //   }`}
    //>
    <span
      className={`px-2 py-0.5 inline-flex text-xs font-light rounded-full ${
        published
          ? " text-[#b0b0b0] border border-[#404040]"
          : " text-[#909090] border border-[#404040]"
      }`}
    >
      {published ? "Published" : "Draft"}
    </span>
  );
}
