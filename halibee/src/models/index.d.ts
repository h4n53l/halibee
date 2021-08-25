import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class S3Object {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
  constructor(init: ModelInit<S3Object>);
}

type CardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Card {
  readonly id: string;
  readonly name: string;
  readonly image?: S3Object;
  readonly skill: string;
  readonly description: string;
  readonly rating?: number;
  readonly clientsServed?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Card, CardMetaData>);
  static copyOf(source: Card, mutator: (draft: MutableModel<Card, CardMetaData>) => MutableModel<Card, CardMetaData> | void): Card;
}