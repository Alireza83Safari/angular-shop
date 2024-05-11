export interface Login {
  password: string;
  username: string;
}

export interface Register extends Login {
  passwordConfirmation: string;
}
