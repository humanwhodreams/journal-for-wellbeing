import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Section } from "@/components/ui/section";

export default function Home() {
  return (
    <main>
      <Section>
        <h1>Journaling for leaders, Families &amp; more.</h1>
      </Section>
      <Section>
        <h2>Resources</h2>
        <div>
          <Button variant={"secondary"} size={"xs"} asChild>
            <Link href={"/design-system"}>Our design system</Link>
          </Button>
        </div>
      </Section>
    </main>
  );
}
