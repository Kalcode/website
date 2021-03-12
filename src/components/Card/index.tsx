import { GitHubSVG, LinkinSVG, TwitterSVG } from '../SVGs';

function SocialIcons() {
  return (
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
  );
}

export function Card() {
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
      <SocialIcons />
    </div>
  );
}
