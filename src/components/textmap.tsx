import { ChallengeType } from "../types/activity";

// challengeデータ
const challenge: ChallengeType = {
  intro: [
    {
      title: "もくひょう",
      texts: [
        "ぜんまいで泳ぐおもちゃを魔改造(まかいぞう)して、水中ではなく陸(りく)をすすませる",
      ],
    },
    {
      title: "考えよう",
      texts: [
        "陸(りく)を速くすすむ乗り物は、どうやってすすんでいるかな？",
        "「タイヤ」をつかうといいかも？",
      ],
    },
    {
      title: "やってみてね",
      texts: [
        "このサイトのつくりかたいがいにも、すきな方法でうごかしてみてね！",
      ],
    },
  ],
};

function TextMap() {
  return (
    // スタックの代わりにdivを使い、スペースを設定します
    <div className="space-y-2 my-1 text-gray-800">
      {challenge.intro.map((i) => (
        <div key={i.title}>
          {/* タイトルのスタイルを設定します */}
          <h6 className="text-xl font-bold">{i.title}</h6>
          {i.texts.map((text, index) => (
            // テキストのスタイルを設定します
            <p key={index} className="text-base">
              {text}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TextMap;
