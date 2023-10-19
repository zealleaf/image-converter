interface FooterProps {
  copyright: string;
}

export function Footer({copyright}: FooterProps) {
  return <div className="h-16 py-6 text-center text-sm">{copyright}</div>;
}
