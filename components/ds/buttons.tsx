import { Button } from "@/components/ui/button";
import { Casing } from "@/components/ui/casing";

export function Buttons() {
  return (
    <Casing className="col-span-4">
      <Casing.Header>
        <Casing.Title>Buttons</Casing.Title>
      </Casing.Header>
      <Casing.Content>
        <Casing.Container>
          <Button type="button" variant={"primary"} size={"sm"}>
            primary
          </Button>
          <Button type="button" variant={"secondary"} size={"sm"}>
            secondary
          </Button>
          <Button type="button" variant={"tertiary"} size={"sm"}>
            tertiary
          </Button>
          <Button type="button" variant={"muted"} size={"sm"}>
            muted
          </Button>
          <Button type="button" variant={"ghost"} size={"sm"}>
            ghost
          </Button>
          <Button type="button" variant={"outline"} size={"sm"}>
            outline
          </Button>
          <Button type="button" variant={"link"} size={"sm"}>
            link
          </Button>
          <Button type="button" variant={"text"} size={"sm"}>
            text
          </Button>
          <Button type="button" variant={"destructive"} size={"sm"}>
            destructive
          </Button>
        </Casing.Container>
      </Casing.Content>
    </Casing>
  );
}
