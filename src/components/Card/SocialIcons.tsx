import { GitHubSVG, LinkinSVG, TwitterSVG } from '../SVGs';

export function SocialIcons() {
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
