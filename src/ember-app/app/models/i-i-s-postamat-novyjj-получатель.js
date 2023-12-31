import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПолучательMixin
} from '../mixins/regenerated/models/i-i-s-postamat-novyjj-получатель';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПолучательMixin, Validations, {
});

defineProjections(Model);

export default Model;
