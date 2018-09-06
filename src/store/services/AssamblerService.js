// @flow
import Service from '~/core/Service';
import EndecaRequestParams from '../models/EndecaRequestParams';
import Record from '../models/endeca/Record';

export default class AssamblerService extends Service {

  async assamble(params: EndecaRequestParams): Promise {

    if (params instanceof EndecaRequestParams === false) {
      params = new EndecaRequestParams(params);
    }

    const { data } = await this.request.get({
      url: `/assembler/assemble`,
      form: params.getParams(),
      public: true,
    });
    
    return data.resultsList.records.map(record => new Record(record.records[0].attributes));
  }
}