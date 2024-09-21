const users = [
  {
    id: 1,
    name: "Uzzal Kumar Roy",
    email: "uzzalroy.cse@gmail.com",
    password: "12345678",
  },
  {
    id: 2,
    name: "Sujon Roy",
    email: "sujonroy784@gmail.com",
    password: "12345678",
  },
];

export const getUserByEmail = (email) => {
  const found = users.find((user) => user.email === email);
  return found;
};
