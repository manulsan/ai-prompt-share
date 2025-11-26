interface PagePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function PagePagination({
  currentPage,
  totalPages,
  onPageChange,
}: PagePaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-3 py-1.5 text-sm bg-[#0d1117] text-white rounded-lg hover:bg-[#161b22] disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        Prev
      </button>

      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1.5 text-sm rounded-lg transition ${
              currentPage === page
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-[#0d1117] text-white hover:bg-[#161b22]"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-3 py-1.5 text-sm bg-[#0d1117] text-white rounded-lg hover:bg-[#161b22] disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        Next
      </button>
    </div>
  );
}
