import { AccessToken } from '@/domain/models'

export interface FacebookAuthentication {
  perform: (params: FacebookAuthentication.Params) => Promise<FacebookAuthentication.Result>
}

namespace FacebookAuthentication {

  export type Params = {
    accessToken: string
  }

  export type Result = AccessToken | FacebookAuthenticationError

}