                                        import React, { useState } from 'react';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar toggle button */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="absolute top-2 left-2 p-2 text-gray-600 rounded-lg hover:bg-gray-200 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
          }`}
      >
        {/* Sidebar content */}
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Sidebar header */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-lg font-semibold">Dashboard</span>
            <button
              onClick={toggleSidebar}
              className="p-2 text-gray-600 rounded-lg hover:bg-gray-200 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
          </div>

          {/* Sidebar links */}
          <nav className="flex-1">
            <ul className="space-y-2 p-2">
              <li>
                <a href="#" className="block p-2 text-gray-800 hover:bg-gray-200 rounded">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 text-gray-800 hover:bg-gray-200 rounded">
                  Kanban
                  <span className="inline-block ml-2 py-1 px-2 text-xs font-semibold text-white bg-blue-500 rounded">
                    Pro
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 text-gray-800 hover:bg-gray-200 rounded">
                  Inbox
                  <span className="inline-block ml-2 py-1 px-2 text-xs font-semibold text-white bg-green-500 rounded">
                    3
                  </span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Sidebar footer */}
          <div className="p-4 border-t">
            <button className="w-full py-2 text-sm font-semibold text-gray-800 bg-gray-200 rounded hover:bg-gray-300">
              Settings
            </button>
          </div>
        </div>
      </aside>

    
    </>
  );
};

