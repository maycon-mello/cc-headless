// @flow
import Service from '~/core/Service';
import EndecaRequestParams from '../models/EndecaRequestParams';
import Record from '../models/endeca/Record';
import ContextProvider from '~/core/ContextProvider';

export default class SearchService extends Service {
  static instance = undefined;

  async search(params: EndecaRequestParams): Promise {

    if (params instanceof EndecaRequestParams === false) {
      params = new EndecaRequestParams(params);
    }

    const { data } = await this.request.get({
      url: `/ccstore/v1/search`,
      form: params.getParams(),
      public: true,
    });
    try {
    return data.resultsList.records.map(record => new Record(record.records[0].attributes));
    } catch(err) {
      console.error(err);
    }
  }

  static getInstance(): SearchService {
    if (this.instance === undefined) {
      this.instance = new SearchService(ContextProvider.getContext());
    }

    return this.instance;
  }
}