
import { useState, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import BookItem from "./components/BookItem.jsx"

function App() {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books")
    return savedBooks
      ? JSON.parse(savedBooks)
      : [
          { id: 1, title: "Book 1", author: "Author 1", genre: "Văn học", year: 2020 },
          { id: 2, title: "Book 2", author: "Author 2", genre: "Khoa học", year: 2021 },
          { id: 3, title: "Book 3", author: "Author 3", genre: "Công nghệ", year: 2022 },
        ]
  })
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    genre: "Văn học",
    year: "",
  })
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("All")

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books))
  }, [books])

  const genres = ["All", "Văn học", "Khoa học", "Công nghệ", "Tâm lý"]

  const handleAddBook = (e) => {
    e.preventDefault()
    if (newBook.title && newBook.author && newBook.year) {
      setBooks([
        ...books,
        {
          id: books.length + 1,
          ...newBook,
          year: Number.parseInt(newBook.year),
        },
      ])
      setNewBook({ title: "", author: "", genre: "Văn học", year: "" })
      toast.success("Đã thêm sách thành công!", {
        position: "top-right",
        autoClose: 3000,
      })
    } else {
      toast.error("Vui lòng điền đầy đủ thông tin!", {
        position: "top-right",
        autoClose: 3000,
      })
    }
  }

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id))
    toast.success("Đã xóa sách thành công!", {
      position: "top-right",
      autoClose: 3000,
    })
  }

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedGenre === "All" || book.genre === selectedGenre),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Quản Lý Sách</h1>

        {/* Add Book Form */}
        <div className="mb-10 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">Thêm Sách Mới</h2>
          <form onSubmit={handleAddBook}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Tiêu đề</label>
                <input
                  type="text"
                  placeholder="Nhập tiêu đề sách"
                  value={newBook.title}
                  onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Tác giả</label>
                <input
                  type="text"
                  placeholder="Nhập tên tác giả"
                  value={newBook.author}
                  onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Thể loại</label>
                <select
                  value={newBook.genre}
                  onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                >
                  {genres.slice(1).map((genre) => (
                    <option key={genre} value={genre}>
                      {genre}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">Năm xuất bản</label>
                <input
                  type="number"
                  placeholder="Nhập năm xuất bản"
                  value={newBook.year}
                  onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Thêm Sách
            </button>
          </form>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">Tìm Kiếm & Lọc</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700 block mb-1">Tìm theo tiêu đề</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Nhập từ khóa tìm kiếm..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>
            </div>
            <div className="md:w-64">
              <label className="text-sm font-medium text-gray-700 block mb-1">Lọc theo thể loại</label>
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
              >
                {genres.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre === "All" ? "Tất cả" : genre}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Total Books */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Danh Sách Sách</h2>
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
            Tổng số: {filteredBooks.length} sách
          </div>
        </div>

        {/* Book List */}
        {filteredBooks.length > 0 ? (
          <div className="grid gap-6">
            {filteredBooks.map((book) => (
              <BookItem key={book.id} book={book} onDelete={handleDeleteBook} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <p className="mt-4 text-lg text-gray-600">Không tìm thấy sách nào</p>
          </div>
        )}

        {/* Toast Container */}
        <ToastContainer />
      </div>
    </div>
  )
}

export default App