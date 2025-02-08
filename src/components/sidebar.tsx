// import { Home, ClipboardList, Flag, User } from "lucide-react";
import Logo from "@/assets/logo.png";
// import type React from "react";

export function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-1/6 flex flex-col bg-sky-600 text-white">
      {/* Logo */}
      <div className="p-8">
        <img
          src={Logo}
          alt="TSUKURABLE"
          width={200}
          height={200}
          className="mx-auto"
        />
      </div>

      {/* Navigation */}
      {/* <nav className="flex-1 space-y-1 px-4">
        <NavItem icon={Home} japanese="ホーム" href="/eat" />
        <NavItem icon={ClipboardList} japanese="課題" href="/play" />
        <NavItem icon={Flag} japanese="チャレンジ" href="/stay" />
        <NavItem icon={User} japanese="マイページ" href="/rent" />
      </nav> */}

      {/* News Section */}
      <div className="mt-auto p-4">
        <div className="rounded-lg bg-sky-600 p-4">
          <div className="flex items-center gap-2"></div>
        </div>
      </div>
    </aside>
  );
}

// function NavItem({
//   icon: Icon,
//   japanese,
//   href,
// }: {
//   icon: React.ComponentType<{ className?: string }>;
//   japanese: string;
//   href: string;
// }) {
//   return (
//     <a
//       href={href}
//       className="group flex items-center justify-start p-4 text-left transition-colors hover:bg-white/10"
//     >
//       <Icon className="h-6 w-6 mr-4 ml-5" />
//       <span className="text-2xl font-bold tracking-wider">{japanese}</span>
//     </a>
//   );
// }
