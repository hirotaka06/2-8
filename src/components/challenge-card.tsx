import Image from "@/assets/image.png";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import type { ChallengeCardProps } from "@/types/type";

export default function ChallengeCard({
  title,
  imageSrc,
  imageAlt,
  tags,
  duration,
  variant,
  className,
}: ChallengeCardProps) {
  return (
    <Card className={cn("overflow-hidden", variant.background, className)}>
      <div className="relative aspect-[4/3] w-full">
        <img
          src={imageSrc || Image}
          alt={imageAlt || title}
          className="object-cover"
        />
        <div className="absolute bottom-4 right-4">
          <InteractiveHoverButton text="作り方" />
        </div>
      </div>
      <CardContent className={cn("p-4 space-y-4", variant.background)}>
        <h3 className={cn("text-xl font-bold", variant.text)}>
          {title.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag.id}
              variant="secondary"
              className="bg-yellow-300 hover:bg-yellow-400 text-gray-800"
            >
              #{tag.label}
            </Badge>
          ))}
        </div>
        <div className={cn("flex items-center gap-1", variant.text)}>
          <Clock className="h-4 w-4" />
          <span>
            {duration.min}〜{duration.max}分
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
