import { tv } from "tailwind-variants";

const styles = {
  container: tv({
    base: "flex items-center w-full",
  }),
  heading: tv({
    base: "mr-3 font-bold text-primary-blue",
    variants: {
      type: {
        normal: "py-2 text-2xl",
        sub   : "ml-4 text-xl",
      },
    },
  }),
  line: tv({
    base: "flex-grow h-1 bg-primary-blue",
    variants: {
      type: {
        normal: "",
        sub   : "hidden",
      },
    },
  }),
};

export default function Heading({text, type = "normal",
}: {
  text: string; type?: "normal" | "sub";
}){
  return (
    <div className={styles.container()}>
      <h5 className={styles.heading({type})}>{text}</h5>
      <div className={styles.line({type})} />
    </div>
  );
}
