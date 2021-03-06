import { IUserLoginData } from '@models/user.interface';

export namespace UserActions {
  export class Login {
    static readonly type = '[User] login';

    constructor(public data: IUserLoginData) {
    }
  }

  export class UpdateByStorage {
    static readonly type = '[User] update by storage';
  }

  export class Logout {
    static readonly type = '[User] logout';
  }
}
