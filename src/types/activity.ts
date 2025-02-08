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
