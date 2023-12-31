import {
  defineNamespace,
  defineProjections,
  Model as ТранзакцияMixin
} from '../mixins/regenerated/models/i-i-s-postamat-novyjj-транзакция';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТранзакцияMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
