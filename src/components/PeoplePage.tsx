import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { Person } from "../models/Person";
import CreatePersonDialog from "./CreatePersonDialog";

export default function PeoplePage({ people }: { people: Person[] }) {
  const [localPeople, setLocalPeople] = useState<Person[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    setLocalPeople(people);
  }, [people]);

  const handleDelete = (index: number) => {
    const newPeople = [...localPeople];
    newPeople.splice(index, 1);
    setLocalPeople(newPeople);
  };

  const handleEdit = (index: number) => {
    alert("edit not implemented yet");
  };

  const handleCreate = (newPerson: Person) => {
    setLocalPeople([...localPeople, newPerson]);
  };

  return (
    <>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setDialogOpen(true);
          }}
        >
          Create
        </Button>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Height</TableCell>
              <TableCell>Mass</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {localPeople.map((person, index) => (
              <TableRow key={index}>
                <TableCell>{person.name}</TableCell>
                <TableCell>{person.height}</TableCell>
                <TableCell>{person.mass}</TableCell>
                <TableCell>{person.gender}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(index)}>Edit</Button>
                  <Button onClick={() => handleDelete(index)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <CreatePersonDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onCreate={handleCreate}
      />
    </>
  );
}
