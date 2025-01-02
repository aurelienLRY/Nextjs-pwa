import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps } from "@nextui-org/react";

const statusColorMap: Record<string, ChipProps["color"]> = {
  actif: "success",
  inactif: "danger",
  en_attente: "warning",
};

const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "PDG",
    status: "actif",
    email: "tony@swissborg.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Développeur",
    status: "en_attente",
    email: "zoey@swissborg.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Designer",
    status: "actif",
    email: "jane@swissborg.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "Manager",
    status: "inactif",
    email: "william@swissborg.com",
  },
];

export default function DemoTable() {
  return (
    <Table aria-label="Exemple de tableau avec des actions">
      <TableHeader>
        <TableColumn>NOM</TableColumn>
        <TableColumn>RÔLE</TableColumn>
        <TableColumn>STATUS</TableColumn>
        <TableColumn>ACTIONS</TableColumn>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <User
                name={user.name}
                description={user.email}
                avatarProps={{
                  radius: "lg",
                  src: `https://i.pravatar.cc/150?u=${user.id}`,
                }}
              />
            </TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>
              <Chip
                className="capitalize"
                color={statusColorMap[user.status]}
                size="sm"
                variant="flat"
              >
                {user.status.replace("_", " ")}
              </Chip>
            </TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Tooltip content="Détails">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    👁️
                  </span>
                </Tooltip>
                <Tooltip content="Éditer">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    ✏️
                  </span>
                </Tooltip>
                <Tooltip content="Supprimer" color="danger">
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    🗑️
                  </span>
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
} 