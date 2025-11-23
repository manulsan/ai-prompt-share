interface PostStatusBadgeProps {
  published: boolean;
}

export default function PostStatusBadge({ published }: PostStatusBadgeProps) {
  return (
    <span
      className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full ${
        published ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
      }`}
    >
      {published ? "Published" : "Draft"}
    </span>
  );
}
