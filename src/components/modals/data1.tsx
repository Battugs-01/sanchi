import { ArrowRight, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const Data1 = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-start rounded border-cyan-500 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-[#fff] mt-4 flex items-center gap-2">
          Дэлгэрэнгүй
          <ArrowRight className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full p-2">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Олон улсын тээвэр зуучлал
          </DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="password">PasswordPassword</TabsTrigger>
            <TabsTrigger value="password">PasswordPassword</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              type="button"
              variant="default"
              className="text-start rounded border-cyan-500 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-[#fff] mt-4 flex items-center"
            >
              Хаах
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default Data1;
