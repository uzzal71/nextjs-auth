export interface UserType {
    id: number;
    name: string;
    email: string;
    password: string;
}

const users: UserType[] = [
    {
        id: 1,
        name: "Uzzal Kumar Roy",
        email: "uzzalroy.cse@gmail.com",
        password: "12345678"
    },
    {
        id: 2,
        name: "Sujon Roy",
        email: "sujonroy784@gmail.com",
        password: "12345678"
    }
];

export const getUserByEmail = (email: string): UserType | undefined => {
    const found = users.find(user => user.email === email);
    return found;
};
