import { Profile } from "./profile.model";
import { Tokens } from "./tokens.model";

export interface AuthResponse {
    message: string
    tokens: Tokens
    profile: Profile
}