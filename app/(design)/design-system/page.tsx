import { ArrowUpRightIcon } from "lucide-react";
import { Buttons } from "@/components/ds/buttons";
import { Cards } from "@/components/ds/cards";
import { Inputs } from "@/components/ds/inputs";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Tabs } from "@/components/ds/tabs";
import { cn } from "@/lib/cn";
import { focusRing } from "@/components/ui/focus";

export default function Page() {
  return (
    <>
      <Section>
        <div className="flex flex-col items-center justify-center text-center">
          <h1>
            Journal for Wellbeing
            <br />
            Design System
          </h1>
          <p>
            The design system used in building Journal for Wellbeing and other
            related products.
          </p>
        </div>
      </Section>
      <Section>
        <h2>
          Primitives &mdash; From{" "}
          <Link
            href={"https://ui.shadcn.com/docs"}
            target="_blank"
            className={cn(
              "text-primary rounded-md inline-flex items-center justify-center",
              focusRing
            )}
          >
            Shadcn/ui
            <ArrowUpRightIcon className="flex-shrink-0 ml-2 text-primary size-7" />
          </Link>
        </h2>
        <div className="grid grid-cols-4 gap-4">
          <Buttons />
          <Inputs />
          <Tabs />
          <Cards />
        </div>
      </Section>
    </>
  );
}
