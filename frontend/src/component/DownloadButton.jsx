function DownloadButton({onClick}) {
    return (
      <button onClick={onClick}
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          className="w-5 h-5 mr-2 -ml-1"
        >
          <path
            d="M12 4v12m8-8l-8 8-8-8"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
        Download
      </button>
    )
  }
  
   export default DownloadButton