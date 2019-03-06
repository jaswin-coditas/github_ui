import { environment } from './environments/environment';

export class APIEndPoints {
    static SEARCH_USER_API = environment.API_URL + 'search/users?q=%s&page=%d&per_page=%d&sort=%s&order=%s';

    static USER_REPO_LISTING_API = environment.API_URL + 'users/%s/repos';

    static GET_USER_BY_LOGIN_ID_API = environment.API_URL + 'users/%s';
}
