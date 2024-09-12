"use client";

import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Tabs as ShadcnTabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import { Button } from "../ui/button";
import { Casing } from "../ui/casing";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface Props {}

export function Tabs({}: Props) {
  return (
    <Casing className="col-span-4 md:col-span-2">
      <Casing.Header>
        <Casing.Title>Tabs</Casing.Title>
      </Casing.Header>
      <Casing.Content>
        <Casing.Container className="items-center justify-center">
          <ShadcnTabs defaultValue="account">
            <TabsList className="w-full">
              <TabsTrigger value="account" className="w-full">
                Account
              </TabsTrigger>
              <TabsTrigger value="password" className="w-full">
                Password
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              <Card>
                <CardHeader>
                  <CardTitle>Create an Account</CardTitle>
                  <CardDescription>
                    Enter your credentials to gain access.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("Hello world!");
                    }}
                    className="space-y-4"
                  >
                    <div className="space-y-1">
                      <Label>email address</Label>
                      <Input
                        type="email"
                        placeholder="name@email.com"
                        variant={"muted"}
                        dimension={"lg"}
                      />
                    </div>
                    <Button type="submit" className="w-full" size={"sm"}>
                      Send magic link
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card>
                <CardHeader>
                  <CardTitle>Create an Account</CardTitle>
                  <CardDescription>
                    Enter your credentials to gain access.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("Hello world!");
                    }}
                    className="space-y-4"
                  >
                    <div className="space-y-1">
                      <Label>email address</Label>
                      <Input
                        type="email"
                        placeholder="name@email.com"
                        variant={"muted"}
                        dimension={"lg"}
                      />
                    </div>
                    <div className="space-y-1">
                      <Label>password</Label>
                      <Input
                        type="password"
                        placeholder="password"
                        variant={"muted"}
                        dimension={"lg"}
                      />
                    </div>
                    <Button type="submit" className="w-full" size={"sm"}>
                      Create Account
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </ShadcnTabs>
        </Casing.Container>
      </Casing.Content>
    </Casing>
  );
}
