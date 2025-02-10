interface ChallengeTag {
  id: string;
  label: string;
};

export interface ChallengeCardProps {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  tags: ChallengeTag[];
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

// 仮でintroのみを使用
export interface ChallengeType {
  intro: IntroType[];
}

// 以下は元のtypes
export interface ChallengeData {
  id: string,
  title: string,
  thumbnail: {
    url: string,
    alt: string,
  },
  description: DescriptionType,
  intro: IntroType[],
  prepare: PrepareType,
  howTo: HowToType[],
};

interface DescriptionType {
  attribute: string,
  level: number,
  time: string,
  description: string,
};

export interface IntroType {
  title: string;
  texts: RubyTextType[];
};

// ルビ付きテキストを表現するための新しい型
export interface RubyTextType {
  text: string;
  ruby: string;
}

interface PrepareType {
  materials: {
    name: string,
    count: string | undefined,
    downloadURL?: string,
  }[],
  tools: string[],
  image: {
    url: string,
    alt: string,
  },
};

interface HowToType {
  title: string,
  texts: string[],
  image: string | undefined,
  column: {
    icon: "question" | "warning" | "think",
    title: string,
    content: string,
  } | undefined,
};
