import { Service } from "./Service";
import { SIGN_UP_URL } from "../constants/apiUrl";

export class SignupService extends Service {
  constructor() {
    super("http://localhost:3000");
  }

  async signupUser(
    userName?: string,
    email?: string,
    password?: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> {
    const path = SIGN_UP_URL;
    const body = { userName, email, password };

    try {
      const result = await this.post(path, body);
      return result;
    } catch (error: Error) {
      throw new Error(`error: ${error.message}`);
    }
  }
}
