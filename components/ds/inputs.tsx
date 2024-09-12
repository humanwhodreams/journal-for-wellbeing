import { Casing } from "../ui/casing";
import { Input } from "../ui/input";

export function Inputs() {
  return (
    <Casing className="col-span-4">
      <Casing.Header>
        <Casing.Title>Inputs</Casing.Title>
      </Casing.Header>
      <Casing.Content>
        <Casing.Container>
          <Input type="text" placeholder="default" />
          <Input type="text" placeholder="muted" variant={"muted"} />
          <Input type="text" placeholder="secondary" variant={"secondary"} />
          <Input type="text" placeholder="error" variant={"default"} hasError />
        </Casing.Container>
      </Casing.Content>
    </Casing>
  );
}
