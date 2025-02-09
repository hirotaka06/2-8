export type ActivityTag = {
  id: string;
  label: string;
};

export type ActivityCardProps = {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  tags: ActivityTag[];
  duration: {
    min: number;
    max: number;
  };
  variant: {
    background: string;
    text: string;
  };
  className?: string;
};

// 各チャレンジのテキスト情報を表す型
export interface ChallengeText {
  title: string;
  texts: string[];
}

// チャレンジ全体を表す型
export interface ChallengeType {
  intro: ChallengeText[];
}
