type error = {
  errorTitle: string
  errorDescription: string
}

export type GqlErrors = {
  [key: string]: error
}

export const gqlErrors: GqlErrors = {
  'Invalid Credentials': {
    errorTitle: 'email or password is incorrect',
    errorDescription: 'Please, enter correct email and password and try again'
  },
  'Network error': {
    errorTitle: 'Connection is failed',
    errorDescription: ''
  }
};
