import { MSpan } from "~/components/motion-wrapper";

type SplitTextAnimationProps = {
  text: string;
  duration?: number;
  delay?: number;
  mode?: "animate" | "whileInView"; // choose animation type
  viewport?: { once?: boolean; amount?: number }; // optional viewport settings
};

export const getSplitTextAnimation = ({
  text,
  duration,
  delay,
  mode = "animate",
  viewport = { once: true, amount: 0.5 },
}: SplitTextAnimationProps) => {
  const words = text
    .split(" ")
    .map((word, index) => ({ content: word, key: `word-${index}` }));

  return words.map(({ content, key }, index) => (
    <MSpan
      key={key}
      initial={{ opacity: 0, filter: "blur(4px)", y: 4 }}
      {...(mode === "animate"
        ? { animate: { opacity: 1, filter: "blur(0px)", y: 0 } }
        : { whileInView: { opacity: 1, filter: "blur(0px)", y: 0 }, viewport })}
      transition={{
        duration: duration ?? 0.5,
        delay: delay ?? 0.1 * index,
        ease: "easeOut",
      }}
      className="inline-block"
    >
      {`${content}\u00A0`}
    </MSpan>
  ));
};
