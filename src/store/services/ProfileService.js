// @flow
import Service from '~/core/Service';
import Profile from '../models/Profile';

export default class ProfileService extends Service {

  async getCurrent(): Promise<Profile> {
    const { data } = await this.request.get({
      url: '/profiles/current',
    });

    return new Profile(data);
  }
}