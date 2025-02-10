import Logo2 from "@/assets/logo2.png";
import Logo from "@/assets/logo.png";
import BackgroundWhite from "@/assets/background_white.svg";

export default function Sidebar() {
  return (
    <aside
      className="fixed top-0 left-0 h-full w-[calc(1/6*100%)]
                 flex flex-col bg-yellow-300
               text-white z-40 overflow-hidden"
      style={{
        backgroundImage: `url(${BackgroundWhite})`,
        backgroundRepeat: "repeat",
      }}
    >
      {/* Logo */}
      <div>
        <div className="relative">
          <div className="absolute inset-0 flex justify-center items-center">
            {/* トンネルを逆さにした形の台紙 */}
            <div className="relative">
              {/* 楕円の部分 */}
              <div className="w-96 h-96 bg-white rounded-full"></div>
              {/* 長方形の部分 */}
              <div className="absolute top-0 left-0 w-96 h-48 bg-white"></div>
            </div>
          </div>
          <img
            src={Logo}
            alt="TSUKURABLE"
            width={250}
            height={250}
            className="mx-auto hidden md:block mt-10 relative p-4"
          />
          <img
            src={Logo2}
            alt="TSUKURABLE"
            width={200}
            height={200}
            className="mx-auto block md:hidden mt-6 relative p-4"
          />
        </div>
      </div>

      <div className="mt-auto p-4 space-y-4 text-gray-600">
        <div className="rounded-lg bg-yellow-200 p-6 flex justify-center items-center">
          <div className="text-center"></div>
        </div>
        <div className="rounded-lg bg-yellow-200 p-6 flex justify-center items-center">
          <div className="text-center"></div>
        </div>
        <div className="rounded-lg bg-yellow-200 p-6 flex justify-center items-center">
          <div className="text-center"></div>
        </div>
      </div>
    </aside>
  );
}
