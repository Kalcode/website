function LinkinSVG() {
  return (
    <svg
      className="w-8 h-8 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      viewBox="0 0 32 32"
    >
      <g fill="currentColor">
        <path d="M0 9h7v23H0zM24.003 9C20 9 18.89 10.312 18 12V9h-7v23h7V19c0-2 0-4 3.5-4s3.5 2 3.5 4v13h7V19c0-6-1-10-7.997-10z" />
        <circle cx="3.5" cy="3.5" r="3.5" />
      </g>
    </svg>
  );
}

function TwitterSVG() {
  return (
    <svg
      className="w-8 h-8 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 512 512"
    >
      <path fill="none" d="M56 56h400v400H56z" />
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M161.014 464.013c193.208 0 298.885-160.071 298.885-298.885 0-4.546 0-9.072-.307-13.578A213.737 213.737 0 00512 97.176a209.705 209.705 0 01-60.334 16.527 105.426 105.426 0 0046.182-58.102 210.548 210.548 0 01-66.703 25.498 105.184 105.184 0 00-76.593-33.112c-57.682 0-105.145 47.464-105.145 105.144 0 8.002.914 15.979 2.722 23.773-84.418-4.231-163.18-44.161-216.494-109.752-27.724 47.726-13.379 109.576 32.522 140.226A104.258 104.258 0 0120.48 194.23v1.331c.014 49.814 35.447 93.111 84.275 102.974a104.898 104.898 0 01-47.431 1.802c13.727 42.685 53.311 72.108 98.14 72.95a210.83 210.83 0 01-130.458 45.056A213.688 213.688 0 010 416.827a297.42 297.42 0 00161.014 47.104"
      />
    </svg>
  );
}

function GitHubSVG() {
  return (
    <svg
      className="w-8 h-8 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
    >
      <path
        fill="currentColor"
        d="M512 0C229.25 0 0 229.25 0 512c0 226.25 146.688 418.125 350.156 485.812 25.594 4.688 34.938-11.125 34.938-24.625 0-12.188-.469-52.562-.719-95.312C242 908.812 211.906 817.5 211.906 817.5c-23.312-59.125-56.844-74.875-56.844-74.875-46.531-31.75 3.53-31.125 3.53-31.125 51.406 3.562 78.47 52.75 78.47 52.75 45.688 78.25 119.875 55.625 149 42.5 4.654-33 17.904-55.625 32.5-68.375-113.656-12.937-233.218-56.875-233.218-253.063 0-55.938 19.969-101.562 52.656-137.406-5.219-13-22.844-65.094 5.062-135.562 0 0 42.938-13.75 140.812 52.5 40.812-11.406 84.594-17.031 128.125-17.219 43.5.188 87.312 5.875 128.188 17.281 97.688-66.312 140.688-52.5 140.688-52.5 28 70.531 10.375 122.562 5.125 135.5 32.812 35.844 52.625 81.469 52.625 137.406 0 196.688-119.75 240-233.812 252.688 18.438 15.875 34.75 47 34.75 94.75 0 68.438-.688 123.625-.688 140.5 0 13.625 9.312 29.562 35.25 24.562C877.438 930 1024 738.125 1024 512 1024 229.25 794.75 0 512 0z"
      />
    </svg>
  );
}

function Card() {
  return (
    <div
      className="absolute flex flex-col items-center justify-center w-40 h-20 font-sans text-lg font-thin origin-center transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white-light top-2/4 left-2/4 "
      style={{ height: 300, width: 600 }}
    >
      <div className="py-4 text-center">
        <h2 className="font-bold" style={{ fontSize: '1.35rem' }}>
          David Clausen
        </h2>
        <p className="opacity-80">Senior Web Developer</p>
      </div>
      <p>
        <a href="mailto:davidclausen2051@gmail.com">
          davidclausen2051@gmail.com
        </a>
      </p>
      <div className="flex justify-between w-40 py-4">
        <a
          href="https://twitter.com/Kalcoder"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterSVG />
        </a>
        <a
          href="https://github.com/Kalcode"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubSVG />
        </a>
        <a
          href="https://www.linkedin.com/in/david-clausen-a06606116/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkinSVG />
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Card />
    </div>
  );
}

export default App;
