import config from '../../config.json';
import { GitHubSVG, LinkinSVG, TwitterSVG } from '../SVGs';

export function SocialIcons() {
  return (
    <div className="flex justify-between w-40 py-4">
      <a href={config.social.twitter} target="_blank" rel="noopener noreferrer">
        <TwitterSVG />
      </a>
      <a href={config.social.github} target="_blank" rel="noopener noreferrer">
        <GitHubSVG />
      </a>
      <a
        href={config.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkinSVG />
      </a>
    </div>
  );
}
