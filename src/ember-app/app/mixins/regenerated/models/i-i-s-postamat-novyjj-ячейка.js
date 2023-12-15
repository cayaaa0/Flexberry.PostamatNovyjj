import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерЯчейки: DS.attr('number'),
  статус: DS.attr('i-i-s-postamat-novyjj-стат-ячейк'),
  хранение: DS.belongsTo('i-i-s-postamat-novyjj-хранение', { inverse: null, async: false }),
  постамат: DS.belongsTo('i-i-s-postamat-novyjj-постамат', { inverse: 'ячейка', async: false })
});

export let ValidationRules = {
  номерЯчейки: {
    descriptionKey: 'models.i-i-s-postamat-novyjj-ячейка.validations.номерЯчейки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-postamat-novyjj-ячейка.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  хранение: {
    descriptionKey: 'models.i-i-s-postamat-novyjj-ячейка.validations.хранение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  постамат: {
    descriptionKey: 'models.i-i-s-postamat-novyjj-ячейка.validations.постамат.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЯчейкаE', 'i-i-s-postamat-novyjj-ячейка', {
    номерЯчейки: attr('Номер ячейки', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    хранение: belongsTo('i-i-s-postamat-novyjj-хранение', 'Хранение', {
      номер: attr('Номер', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'номер' })
  });
};
