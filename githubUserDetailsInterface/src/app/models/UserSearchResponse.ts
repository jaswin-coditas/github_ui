import { User } from './User';

export class UserSearchResponse {
    total_count: number;
    incomplete_results: boolean;
    items: User[];
    message: string;
    errors: Error[];
    documentation_url: string;
}
