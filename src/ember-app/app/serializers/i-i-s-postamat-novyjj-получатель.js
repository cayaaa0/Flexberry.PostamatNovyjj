import { Serializer as ПолучательSerializer } from
  '../mixins/regenerated/serializers/i-i-s-postamat-novyjj-получатель';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПолучательSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
