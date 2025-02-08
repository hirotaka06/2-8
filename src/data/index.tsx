import type { ActivityCardProps } from "@/types/activity";

export const activities: ActivityCardProps[] = [
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
