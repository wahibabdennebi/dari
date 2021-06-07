export class LoginInfo {
  userName: string;
  password_client: string;


  constructor(userName: string, password_client: string) {
    this.userName = userName;
    this.password_client = password_client;
  }
}
