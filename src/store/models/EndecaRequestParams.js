// @flow

class EndecaRequestParams {

  recordsPerPage: number;
  recordOffset: number;
  // <string>+<string>+<string>
  recordSearchTerms: string;
  sortKey: string;
  sortOrder: string;
  path: string;
  searchType: string;
  site: string;
  rangeFilter: string;
  recordFilter: string;
  navigation: string;

  constructor(props) {
    this.recordsPerPage = props.recordsPerPage;
    this.recordOffset = props.recordOffset;
    this.path = props.path;
    this.searchType = props.searchType;
    this.site = props.site;
    this.sortOrder = props.sortOrder;
    this.recordSearchTerms = props.recordSearchTerms;
    this.sortKey = props.sortKey;
    this.rangeFilter = props.rangeFilter;
    this.recordFilter = props.recordFilter;
    this.navigation = props.navigation;
  }
  /**
   * Set the navigation record list offset.
   * @param {string} offset
   */
  setRecordOffset(offset: number) {
    this.recordOffset = offset;
  }

  setRecordsPerPage(records: number) {
    this.recordsPerPage = records;
  }

  setPath(path: string) {
    this.path = path;
  }

  setSearchType(type: string) {
    this.searchType = type;
  }

  setSite(site: string) {
    this.site = site;
  }

  /**
   * Sets the actual terms of a record search for a navigation query.
   * <string>+<string>+<string>
   * @param {string} terms
   */
  setRecordSearchTerms(terms: string) {
    this.recordSearchTerms = terms;
  }

  getParams() {
    return {
      Nrpp: this.recordsPerPage,
      Ns: this.sortKey,
      Nso: this.sortOrder,
      No: this.recordOffset,
      Ntt: this.recordSearchTerms,
      path: this.path,
      searchType: this.searchType,
      site: this.site,
      Nf: this.rangeFilter,
      Nr: this.recordFilter,
      N: this.navigation,
    }
  }
}

export default EndecaRequestParams;