const BASE_URL = "https://api.rawg.io/api/";
const fabioKey = "?key=5cb1328bb0d64bfaafc8c487c0651f43";

export const GET = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}${fabioKey}&page=2`);
  const data = res.json();
  return data;
};

export const GETSingleGame = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}${fabioKey}`);
  const data = res.json();
  return data;
};

export const GETScreenshots = async (endpoint) => {
  const res = await fetch(
    `${BASE_URL}games/${endpoint}/screenshots${fabioKey}`
  );
  const data = res.json();
  return data;
};
