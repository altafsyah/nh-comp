import { getCalApi } from "@calcom/embed-react";
import { useEffect, type ReactNode, type ComponentProps } from "react";

type CalButtonProps = {
  children: ReactNode;
} & ComponentProps<"button">;

export default function CalButton({ children, ...props }: CalButtonProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "brainstorm" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <button
      {...props}
      data-cal-namespace="brainstorm"
      data-cal-link="ngoding-house/brainstorm"
      data-cal-config='{"layout":"month_view"}'
    >
      {children}
    </button>
  );
}
