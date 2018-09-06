// @flow

export type CategoryImageConstructor = {
  repositoryId: string;
  name: string;
  path: string;
  metadata: Object;
  url: string;
  tags: Array<any>;
}

export default class CategoryImage {
  repositoryId: string;
  name: string;
  path: string;
  metadata: Object;
  url: string;
  tags: Array<any>;

  constructor(props: CategoryImageConstructor) {
    this.repositoryId = props.repositoryId;
    this.name = props.name;
    this.path = props.path;
    this.metadata = props.metadata;
    this.url = props.url;
    this.tags = props.tags;
  }
}