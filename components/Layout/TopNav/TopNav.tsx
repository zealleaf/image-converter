import {IconNav} from '@/components/Icon/IconNav';
import {Button} from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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
    <div className="border-b border-b-gray-300 border-opacity-50 bg-[#ffffff] px-2 dark:bg-[#040917] dark:shadow dark:shadow-[#33333380]">
      <div className="flex h-16 items-center justify-between sm:container">
        <div className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-xl font-bold text-transparent">
          <NavItem title={siteName} href={'/'} />
        </div>
        <div className="flex items-center justify-between gap-2 sm:gap-5">
          <section className="hidden gap-2 text-sm sm:flex sm:text-base ">
            {links.map((link) => {
              return <NavItem key={link.href} {...link} />;
            })}
          </section>
          <section className="float-right">{extra}</section>
          <section className="block sm:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <IconNav className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Toggle Nav</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {links.map((link) => {
                  return (
                    <DropdownMenuItem
                      className="cursor-pointer"
                      key={link.href}>
                      <NavItem {...link} />
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </section>
        </div>
      </div>
    </div>
  );
}
