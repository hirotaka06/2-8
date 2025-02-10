export default function ChallengeHeader() {
  return (
    <div className="relative w-full mx-auto flex items-center text-white">
      <div className="w-0 h-0 border-t-[30px] border-b-[30px] border-r-[40px] border-t-transparent border-b-transparent border-r-rose-600"></div>
      <div className="bg-rose-600 p-3 flex-grow">
        <h1 className="text-center text-3xl font-bold tracking-tight">
          開発用コンポーネント一覧
        </h1>
      </div>
      <div className="w-0 h-0 border-t-[30px] border-b-[30px] border-l-[40px] border-t-transparent border-b-transparent border-l-rose-600"></div>
    </div>
  );
}
