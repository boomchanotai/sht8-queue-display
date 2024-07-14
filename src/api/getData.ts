export const getQueueData = async (id: string, sheet: string) => {
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${sheet}?key=${
      import.meta.env.VITE_GOOGLE_API_KEY
    }`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};
