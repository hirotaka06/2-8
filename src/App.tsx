import { activities } from "@/data";
import Sidebar from "@/components/sidebar";
import Prepare from "@/components/prepare";
import ChallengeCard from "@/components/challenge-card";
import Heading from "@/components/heading";
import TextMap from "@/components/textmap";
import ChallengeHeader from "@/components/header";
import Column from "@/components/column";
import "@fontsource/m-plus-rounded-1c/500.css";
import "@fontsource/m-plus-rounded-1c/800.css";

export default function App() {
  return (
    <div className="min-h-screen bg-primary-cream p-2">
      {/* <div className="block md:hidden"> 上bar </div> */}
      <aside className="hidden md:block"><Sidebar /></aside>
      <div className="md:ml-[calc(1/6*100%+4px)]">
        <div className="fixed inset-0 border-8 border-primary-cream"></div>
        <main className="min-h-screen bg-white rounded-2xl p-4">
          <header className="mb-4"><ChallengeHeader /></header>
          <section className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {activities.map((activity, index) => (
              <ChallengeCard key={index} {...activity} />
            ))}
          </section>
          <section className="mt-4"><Prepare /></section>
          <section className="mt-4">
            <Heading text="用意するもの" />
            <TextMap />
            <Column icon="think" title="ちょっと待って！"
                    content="〇〇バッチは持ってるかな？持っていないと次の街には行けないよ" />
          </section>
          <section className="mt-4">
            <Heading text="作り方" />
            <TextMap />
            <Column icon="warning" title="ちょっと待って！"
                    content="〇〇バッチは持ってるかな？持っていないと次の街には行けないよ" />
          </section>
          <section className="mt-4">
            <Heading text="やったね！完成したよ！" />
            <Heading text="やってみてどうだった？" type="sub" />
            <TextMap />
            <Column icon="question" title="ちょっと待って！"
                    content="〇〇バッチは持ってるかな？持っていないと次の街には行けないよ" />
          </section>
        </main>
      </div>
    </div>
  );
}
