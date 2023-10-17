import Link from 'next/link';

interface NavItemProps {
  title: string;
  href: string;
}

function NavItem(props: NavItemProps) {
  return (
    <div className="capitalize">
      <Link href={props.href}>{props.title}</Link>
    </div>
  );
}

interface TopNavProps {
  siteName: string;
  links: NavItemProps[];
  extra: JSX.Element;
}

export default function TopNav({siteName, links, extra}: TopNavProps) {
  return (
    <div className="container flex h-[60px] items-center justify-between">
      <div className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-xl font-bold text-transparent">
        <NavItem title={siteName} href={'/'} />
      </div>
      <div className="flex items-center justify-between gap-5">
        <section className="flex gap-2">
          {links.map((link) => {
            return <NavItem key={link.href} {...link} />;
          })}
        </section>
        <section className="float-right">{extra}</section>
      </div>
    </div>
  );
}
