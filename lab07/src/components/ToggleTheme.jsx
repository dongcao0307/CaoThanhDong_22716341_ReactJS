import React from 'react';

const ToggleTheme = ({ theme, setTheme }) => {
  // Action để toggle theme (chuyển giữa 'light' và 'dark')
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-blue-500 dark:bg-blue-700 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-800 transition-colors duration-200"
    >
      Chuyển sang {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ToggleTheme;
