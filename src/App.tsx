import { activities } from "@/data";
import Sidebar from "@/components/sidebar";
import Prepare from "@/components/prepare";
import ChallengeCard from "@/components/challenge-card";
import Heading from "@/components/heading";
import TextMap from "@/components/textmap";
import ActivityHeader from "@/components/header";
import Column from "@/components/column";
import "@fontsource/m-plus-rounded-1c/500.css";
import "@fontsource/m-plus-rounded-1c/800.css";

export default function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FDFBD4]">
      <div>
        <Sidebar />
        <div className="mt-3 mb-3 mr-3 ml-[calc(1/6*100%+10px)] flex-grow flex justify-center items-center bg-white rounded-2xl">
          <div>
            <div className="mt-4 mr-8 ml-8">
              <ActivityHeader />
            </div>
            <div className="fixed left-1/6 inset-0 border-10 border-[#FDFBD4] pointer-events-none z-50 p-6"></div>
            <div className="w-auto p-4 grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
              {activities.map((activity, index) => (
                <ChallengeCard key={index} {...activity} />
              ))}
            </div>
            <div className="mr-8 ml-8">
              <Prepare />
              <Heading text="せつめい" type="sub" />
              <TextMap />
              <Heading text="用意するもの" />
              <TextMap />
              <Column icon="think" title="ちょっと待って！" content="〇〇バッチは持ってるかな？持っていないと次の街には行けないよ" />
              <Heading text="作り方" />
              <TextMap />
              <Column icon="warning" title="ちょっと待って！" content="〇〇バッチは持ってるかな？持っていないと次の街には行けないよ" />
              <Heading text="やったね！完成したよ！" />
              <TextMap />
              <Column icon="question" title="ちょっと待って！" content="〇〇バッチは持ってるかな？持っていないと次の街には行けないよ" />
              <Heading text="やったね！完成したよ！" />
              <TextMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
