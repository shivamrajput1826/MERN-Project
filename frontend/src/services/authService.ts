/* eslint-disable @typescript-eslint/no-explicit-any */
import { Service } from "./Service";
import { LOGIN_URL, SIGN_UP_URL } from "../constants/apiUrl";

export class AuthService extends Service {
  constructor() {
    super("http://localhost:3000");
  }

  async signupUser(
    username?: string,
    email?: string,
    password?: string
  ): Promise<any> {
    const path = SIGN_UP_URL;
    const body = { username, email, password };

    try {
      const result = await this.post(path, body);
      console.log("result", result);
      return result;
    } catch (error: Error) {
      throw new Error(`error: ${error.message}`);
    }
  }

  async loginUser(email?: string, password?: string): Promise<any> {
    const path = LOGIN_URL;
    const body = { email, password };

    try {
      const result = await this.post(path, body);
      return result;
    } catch (error: Error) {
      console.log(error);
      // throw new Error(`error: ${error.message}`);
    }
  }
}
