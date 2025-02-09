import { HelpCircle, AlertTriangle, Lightbulb } from 'lucide-react';
import { tv } from 'tailwind-variants';

const styles = {
  container: tv({
    base: "border-4 rounded-lg p-3 relative mt-4 inline-block",
    variants: {
      icon: {
        question: "border-purple-500",
        warning: "border-red-500",
        think: "border-blue-500",
      },
    },
  }),
  iconContainer: tv({
    base: "flex flex-row px-2 space-x-1 absolute top-[-1.4em] left-[0.3em] bg-white",
  }),
  icon: tv({
    base: "w-8 h-8",
    variants: {
      icon: {
        question: "text-purple-500",
        warning: "text-red-500",
        think: "text-blue-500",
      },
    },
  }),
  title: tv({
    base: "pt-1 font-bold",
    variants: {
      icon: {
        question: "text-purple-500",
        warning: "text-red-500",
        think: "text-blue-500",
      },
    },
  }),
  content: tv({
    base: "pl-1 text-black",
  }),
};

export default function Column({icon,title,content,
}: {
  icon: "question" | "warning" | "think";
  title: string;
  content: string;
}) {
  return (
    <div className={styles.container({ icon })}>
      <div className={styles.iconContainer()}>
        {icon === "question" && (
          <HelpCircle className={styles.icon({ icon })} />
        )}
        {icon === "warning" && (
          <AlertTriangle className={styles.icon({ icon })} />
        )}
        {icon === "think" && (
          <Lightbulb className={styles.icon({ icon })} />
        )}
        <span className={styles.title({ icon })}>
          {title}
        </span>
      </div>
      <p className={styles.content()}>{content}</p>
    </div>
  );
}
