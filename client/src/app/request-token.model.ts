export class RequestTokenModel {
  constructor(public grant_type: string,
              public username: string,
              public password: string,
              public client_id: string) {

  }
}

