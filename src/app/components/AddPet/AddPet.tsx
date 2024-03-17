import { AddPetButton, Box, PlusIcon, Title } from './AddPet.styled';

export default function AddPet() {
  return (
    <Box>
      <Title>My pets</Title>
      <AddPetButton type="button">
        Add pet <PlusIcon />
      </AddPetButton>
    </Box>
  );
}
