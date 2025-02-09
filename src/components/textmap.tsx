import { ChallengeType } from "@/types/type";
import { tv } from "tailwind-variants";

const styles = {
  container: tv({
    base: "space-y-2 py-1 text-gray-800",
  }),
  title: tv({
    base: "text-xl font-bold",
  }),
  text: tv({
    base: "text-base",
  }),
};

export default function TextMap() {
  return (
    <div className={styles.container()}>
      {challenge.intro.map((i) => (
        <div key={i.title}>
          <h6 className={styles.title()}>{i.title}</h6>
          {i.texts.map((text, index) => (
            <p key={index} className={styles.text()}>{text}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

// チャレンジデータ仮
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
