"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "../ui/button";
import { Casing } from "../ui/casing";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Cards() {
  return (
    <Casing className="col-span-4 md:col-span-2">
      <Casing.Header>
        <Casing.Title>Cards</Casing.Title>
      </Casing.Header>
      <Casing.Content>
        <Casing.Container className="items-center justify-center">
          <Card>
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Hello world!");
                }}
              >
                <div className="grid items-center w-full gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" placeholder="Name of your project" />
                  </div>
                  <Button type="submit" className="w-full">
                    Deploy project
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Cancel</Button>
            </CardFooter>
          </Card>
        </Casing.Container>
      </Casing.Content>
    </Casing>
  );
}
