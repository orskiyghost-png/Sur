import { personalInfo } from '../../data/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-night bg-night">
      <div className="container-page">
        <div className="flex flex-col gap-4 border-t border-line-night py-8 text-sm text-snow-3 md:flex-row md:items-center md:justify-between">
          <p className="tabular-nums">
            © {year} {personalInfo.fullName}
          </p>
          <p>{personalInfo.roles.join(' · ')}</p>
        </div>
      </div>
    </footer>
  );
}
