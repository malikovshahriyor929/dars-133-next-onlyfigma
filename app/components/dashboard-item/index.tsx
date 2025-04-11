import React from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
const Dashboard_Item = () => {
  return (
    <div className="w-full flex justify-between gap-5" >
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Profiles</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <Button>
        <PlusCircle />
        <p className="font-medium">Add Music</p>
      </Button>
    </div>
  );
};

export default Dashboard_Item;
