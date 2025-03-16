import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const projects = [
  {
    name: "IJODA",
    type: "Branding",
    cost: "$700",
    status: "completed",
    payment: "Complete",
  },
  {
    name: "Skinova",
    type: "Landing page",
    cost: "$1500",
    status: "pending",
    payment: "Pending",
  },
  {
    name: "Ask of Hood",
    type: "Branding",
    cost: "$1000",
    status: "pending",
    payment: "Pending",
  },
  {
    name: "IJODA",
    type: "Branding",
    cost: "$700",
    status: "completed",
    payment: "Complete",
  },
];

const ProjectsCard = () => {
  return (
    <div className="flex w-full flex-col gap-6 rounded-3xl border bg-background p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-medium text-muted-foreground">
            Projects
          </h2>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div role="button" className="text-base font-medium text-primary">
            Manage Projects
          </div>
        </div>
      </div>

      <Table className="overflow-hidden rounded-t-lg bg-background">
        <TableHeader className="h-16 bg-secondary">
          <TableRow>
            <TableHead>Project Name</TableHead>
            <TableHead>Work Type</TableHead>
            <TableHead>Project cost</TableHead>
            <TableHead>State</TableHead>
            <TableHead className="text-right">Payment</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.slice(0, 3).map((project, _key) => (
            <TableRow key={_key} className="h-14">
              <TableCell className="font-medium">{project.name}</TableCell>
              <TableCell className="font-medium">{project.type}</TableCell>
              <TableCell className="font-medium">{project.cost}</TableCell>
              <TableCell className="font-medium">
                <div
                  className={cn(
                    "flex h-6 w-max items-center gap-1 rounded-full border px-2.5 text-xs",
                    {
                      "border-[#D9E4D6] bg-[#F5F8F3] text-[#517B3F]":
                        project.status === "completed",
                      "border-[#FCEADB] bg-[#FFFDF7] text-[#ED811F]":
                        project.status === "pending",
                    },
                  )}
                >
                  <span>{project.status}</span>
                </div>
              </TableCell>
              <TableCell className="text-right capitalize">
                {project.payment}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProjectsCard;
