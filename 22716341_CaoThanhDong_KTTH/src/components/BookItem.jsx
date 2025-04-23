"use client"

function BookItem({ book, onDelete }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-white">
      <div className="space-y-2">
        <h3 className="text-xl font-bold text-gray-800">{book.title}</h3>
        <div className="space-y-1 text-gray-600">
          <p className="flex items-center">
            <span className="w-16 font-medium">Tác giả:</span>
            <span>{book.author}</span>
          </p>
          <p className="flex items-center">
            <span className="w-16 font-medium">Thể loại:</span>
            <span className="px-2 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">{book.genre}</span>
          </p>
          <p className="flex items-center">
            <span className="w-16 font-medium">Năm:</span>
            <span className="text-gray-700">{book.year}</span>
          </p>
        </div>
      </div>
      <button
        onClick={() => onDelete(book.id)}
        className="mt-4 md:mt-0 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 flex items-center justify-center space-x-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
        <span>Xóa</span>
      </button>
    </div>
  )
}

export default BookItem
