import { environment } from './environments/environment';

export class APIEndPoints {
static SEARCH_USER_API = environment.API_URL + 'search/users?q=%s&page=%s&per_page=%s&sort=%s&order=%s';

static USER_REPO_LISTING_API = environment.API_URL + 'users/%s/repos';
}
