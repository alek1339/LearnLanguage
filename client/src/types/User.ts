export interface IRegisterUser {
  name: string,
  email: string,
  password: string,
  password2: string
}

export interface ILoginUser {
  email: string,
  password: string
}

export interface IUserAuth {
  exp: number,
  iat: number,
  id: string,
  name: string,
}

export interface ICurrentUser {
  isAuthenticated: boolean,
  user: IUserAuth
}