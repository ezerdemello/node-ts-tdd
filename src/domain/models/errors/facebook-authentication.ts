export class FacebookAuthenticationError extends Error {
  constructor () {
    super('Authentication failed')
    this.name = 'FacebookAuthenticationError'
  }
}
