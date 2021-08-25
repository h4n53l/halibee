// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Card, S3Object } = initSchema(schema);

export {
  Card,
  S3Object
};