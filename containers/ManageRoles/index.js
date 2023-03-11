import { TableComponent } from "@/components";

const cols = ["Name", "User ID", "Designation"];
const rows = [
  { Name: "Raheel", "User ID": "UID132", Designation: "Designer" },
  { Name: "Raheel", "User ID": "UID132", Designation: "Designer" },
  { Name: "Raheel", "User ID": "UID132", Designation: "Designer" },
];

const ManageRoles = () => {
  return <TableComponent cols={cols} rows={rows} action />;
};

export default ManageRoles;
