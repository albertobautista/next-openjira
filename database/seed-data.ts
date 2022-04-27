interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        "Pendiente: Voluptate ullamco consequat commodo aliquip laboris eu eiusmod commodo eiusmod cillum nostrud reprehenderit aute ad.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description:
        "Progreso: Id irure ad proident cillum magna commodo in laboris consectetur ex tempor ullamco.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        "Completadas: VIncididunt aute magna occaecat ullamco commodo veniam fugiat amet quis nulla.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};
