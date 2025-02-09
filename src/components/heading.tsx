function Heading({ text }: { text: string }) {
  return (
    <div className="flex items-center w-full py-1">
      {/* テキストのスタイルを設定します */}
      <h5 className="mr-3 pt-2 pb-2 font-bold text-[#22B2DA] text-2xl">
        {text}
      </h5>
      {/* 水平線を引くためのボックスを設定します */}
      <div className="flex-grow h-1 bg-[#22B2DA]" />
    </div>
  );
}

export default Heading;
