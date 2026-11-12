import { personalInfo } from '../../data/content';
import LogoMark from '../ui/LogoMark';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-night bg-deep">
      <div className="container-page flex flex-col gap-4 py-8 text-sm text-snow-3 md:flex-row md:items-center md:justify-between">
        <p className="flex items-center gap-3 tabular-nums">
          <LogoMark className="size-6" />© {year} {personalInfo.fullName}
        </p>
        <p>{personalInfo.roles.join(' · ')}</p>
      </div>
    </footer>
  );
}
