export interface User {
    pseudo: string,
    email: string,
    password: string,
    avatar: string,
    id: number,
    niveau?: number
}

export interface UserLogin {
    email: string,
    password: string
}