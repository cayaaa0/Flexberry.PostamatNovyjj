import {
  defineNamespace,
  defineProjections,
  Model as КодMixin
} from '../mixins/regenerated/models/i-i-s-postamat-novyjj-код';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КодMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
