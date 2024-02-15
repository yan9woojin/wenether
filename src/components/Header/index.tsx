import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import Logo from '@/icons/logo.svg?react';
import MenuIcon from '@/icons/menu.svg?react';
import SearchIcon from '@/icons/search.svg?react';
import HeartIcon from '@/icons/heart.svg?react';
import MailIcon from '@/icons/mail.svg?react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-header min-w-fit bg-black text-white">
      <div className="container flex h-full items-center justify-between">
        <Logo className="shrink-0" />
        <MobileMenu />
        <DesktopMenu />
      </div>
    </header>
  );
}

function MobileMenu() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <MenuIcon className="h-6 w-6 stroke-2" />
          </Button>
        </SheetTrigger>
        <SheetContent className="border-neutral-800 bg-black text-white">
          <Logo />
        </SheetContent>
      </Sheet>
    </div>
  );
}

function DesktopMenu() {
  return (
    <div className="hidden items-center gap-6 md:flex">
      <SearchIcon className="h-6 w-6 cursor-pointer stroke-2 hover:stroke-neutral-400" />

      <Popover>
        <PopoverTrigger>
          <HeartIcon className="h-6 w-6 stroke-2 hover:stroke-neutral-400" />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow className="h-2 w-4 fill-white" />
          즐겨찾기
        </PopoverContent>
      </Popover>

      <Button variant="outline" className="gap-2 rounded-full bg-transparent">
        <MailIcon />
        문의하기
      </Button>
    </div>
  );
}
