export interface IState {
    status: "null" | "pending" | "fulfilled" | "error";
    data: IUserData | null;
    error: string | null;
}

export interface IUserData {
    _id: string;
    username: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    avatarURL: string;
    __v: string;
}
