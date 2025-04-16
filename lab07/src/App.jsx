import { useState, useEffect } from 'react';
import ToggleTheme from '../src/components/ToggleTheme'; // Import ToggleTheme component
import './index.css'; // Đảm bảo đã import CSS với TailwindCSS và custom styles

function App() {
  const [theme, setTheme] = useState(() => {
    // Lấy theme từ localStorage nếu có, nếu không thì mặc định là 'light'
    return localStorage.getItem('theme') || 'light';
  });

  // Effect để thay đổi theme khi theme thay đổi
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Lưu theme vào localStorage để nhớ khi reload trang
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
        Chế độ {theme === 'light' ? 'Sáng' : 'Tối'}
      </h1>
      <ToggleTheme theme={theme} setTheme={setTheme} /> {/* Sử dụng component ToggleTheme */}
      <p className="mt-4 text-gray-600 dark:text-gray-300">
        Đây là một ví dụ chuyển đổi giữa chế độ sáng và tối.
      </p>
    </div>
  );
}

export default App;
