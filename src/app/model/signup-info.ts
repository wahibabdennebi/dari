export class SignupInfo {
  id_user: number;
  userName: string ;
  email: string ;
  role: string[] ;
  phone_number: string;
  password_client: string ;



  constructor(userName: string, email: string, phone_number: string, password_client: string) {
    this.userName = userName;
    this.email = email;
    this.phone_number = phone_number;
    this.password_client = password_client;
    this.role = ['ROLE_USER'];
  }
}
