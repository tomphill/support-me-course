"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  teamName: string;
  isTeamLeader: boolean;
  avatar?: string;
};

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "avatar",
    header: "",
    cell: ({ row }) => {
      const avatar: string = row.getValue("avatar");
      const firstName: string = row.getValue("firstName");
      const lastName: string = row.getValue("lastName");

      return (
        <Avatar>
          {!!avatar && (
            <Image
              height={40}
              width={40}
              src={avatar}
              alt={`${firstName} ${lastName} avatar`}
            />
          )}
          <AvatarFallback className="uppercase">
            {firstName[0]}
            {lastName[0]}
          </AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: "firstName",
    header: "First name",
  },
  {
    accessorKey: "lastName",
    header: "Last name",
  },
  {
    accessorKey: "teamName",
    header: "Team",
  },
  {
    accessorKey: "isTeamLeader",
    header: "",
    cell: ({ row }) => {
      const isTeamLeader: boolean = row.getValue("isTeamLeader");
      return isTeamLeader ? <Badge variant="success">Team leader</Badge> : null;
    },
  },
];
