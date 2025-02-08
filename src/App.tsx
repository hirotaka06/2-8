import { Sidebar } from "./components/sidebar";
import Prepare from "@/components/prepare";
import { ActivityCard } from "@/components/activity-card";
import type { ActivityCardProps } from "@/types/activity";

const activities: ActivityCardProps[] = [
  {
    title: "ボタン連打マシンを作ろう",
    imageSrc: "",
    imageAlt: "ボタン連打マシンの画像",
    tags: [
      { id: "1", label: "規定課題" },
      { id: "2", label: "家にあるもの" },
      { id: "3", label: "メカ" },
    ],
    duration: {
      min: 30,
      max: 60,
    },
    variant: {
      background: "bg-rose-600",
      text: "text-white",
    },
  },
  {
    title: "星座のランプシェードを作ろう",
    imageSrc: "",
    imageAlt: "ボタン連打マシンの画像",
    tags: [
      { id: "1", label: "規定課題" },
      { id: "2", label: "家にあるもの" },
      { id: "3", label: "メカ" },
    ],
    duration: {
      min: 30,
      max: 60,
    },
    variant: {
      background: "bg-sky-600",
      text: "text-white",
    },
  },
  {
    title: "どこでもドア欲しいな〜(願望)",
    imageSrc: "",
    imageAlt: "ボタン連打マシンの画像",
    tags: [
      { id: "1", label: "規定課題" },
      { id: "2", label: "家にあるもの" },
      { id: "3", label: "メカ" },
    ],
    duration: {
      min: 30,
      max: 60,
    },
    variant: {
      background: "bg-blue-600",
      text: "text-white",
    },
  },
  {
    title: "やびやびマシンを作ろう",
    imageSrc: "",
    imageAlt: "やびやびマシンの画像",
    tags: [
      { id: "1", label: "規定課題" },
      { id: "2", label: "家にあるもの" },
      { id: "3", label: "ロボ" },
    ],
    duration: {
      min: 30,
      max: 60,
    },
    variant: {
      background: "bg-orange-600",
      text: "text-white",
    },
  },
  {
    title: "無限にからあげクン食べたい",
    imageSrc: "",
    imageAlt: "無限からあげクンマシンの画像",
    tags: [
      { id: "1", label: "お腹すいた" },
      { id: "2", label: "ロマン" },
      { id: "3", label: "メカ" },
    ],
    duration: {
      min: 5,
      max: 10,
    },
    variant: {
      background: "bg-green-600",
      text: "text-white",
    },
  },
  {
    title: "ハーゲンダッツが食べたいッ！🐮",
    imageSrc: "",
    imageAlt: "ボタン連打マシンの画像",
    tags: [
      { id: "1", label: "規定課題" },
      { id: "2", label: "家にあるもの" },
      { id: "3", label: "というかあって欲しい" },
    ],
    duration: {
      min: 30,
      max: 60,
    },
    variant: {
      background: "bg-purple-600",
      text: "text-white",
    },
  },
];

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-sky-600">
      <div>
        <Sidebar />
        <div className="mt-4 mb-4 mr-4 ml-1/6 flex-grow flex justify-center items-center bg-white rounded-2xl">
          <div>
            <div className="fixed inset-0 border-10 border-sky-600 pointer-events-none z-50 p-6"></div>
            <div className="w-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
              {activities.map((activity, index) => (
                <ActivityCard key={index} {...activity} />
              ))}
            </div>
            <Prepare />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
