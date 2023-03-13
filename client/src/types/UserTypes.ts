export type newUserType = {
    name: string
    age: number | string
    post:string
    email: string
    password: string
    confirmPassword: string
}
export type userlogin = {
    email: string,
    password: string
}

export type PostType={
    id?: number
    message?: string
    to?: string
    from?: string
    likes?: number
    onClickHandle?: (e:any)=>void
}

export type UserType = {
    name: string
    age: number | string
    post:string
    email: string
    password: string
    confirmPassword: string
}