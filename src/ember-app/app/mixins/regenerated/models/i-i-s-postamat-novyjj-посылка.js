import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерПост: DS.attr('number'),
  номерЯчейки: DS.attr('number'),
  номПосылки: DS.attr('number'),
  статус: DS.attr('i-i-s-postamat-novyjj-статусы'),
  код: DS.belongsTo('i-i-s-postamat-novyjj-код', { inverse: null, async: false }),
  логистика: DS.belongsTo('i-i-s-postamat-novyjj-логистика', { inverse: null, async: false }),
  транзакция: DS.belongsTo('i-i-s-postamat-novyjj-транзакция', { inverse: null, async: false }),
  хранение: DS.belongsTo('i-i-s-postamat-novyjj-хранение', { inverse: 'посылка', async: false })
});

export let ValidationRules = {
  номерПост: {
    descriptionKey: 'models.i-i-s-postamat-novyjj-посылка.validations.номерПост.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерЯчейки: {
    descriptionKey: 'models.i-i-s-postamat-novyjj-посылка.validations.номерЯчейки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номПосылки: {
    descriptionKey: 'models.i-i-s-postamat-novyjj-посылка.validations.номПосылки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-postamat-novyjj-посылка.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-postamat-novyjj-посылка.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  логистика: {
    descriptionKey: 'models.i-i-s-postamat-novyjj-посылка.validations.логистика.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  транзакция: {
    descriptionKey: 'models.i-i-s-postamat-novyjj-посылка.validations.транзакция.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  хранение: {
    descriptionKey: 'models.i-i-s-postamat-novyjj-посылка.validations.хранение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПосылкаE', 'i-i-s-postamat-novyjj-посылка', {
    номПосылки: attr('Номер посылки', { index: 0 }),
    логистика: belongsTo('i-i-s-postamat-novyjj-логистика', 'Статус посылки', {
      состояние: attr('Статус посылки', { index: 1 }),
      информация: attr('Информация', { index: 5, hidden: true })
    }, { index: 4 }),
    номерПост: attr('Номер постамата', { index: 2 }),
    номерЯчейки: attr('Номер ячейки', { index: 3 }),
    транзакция: belongsTo('i-i-s-postamat-novyjj-транзакция', 'Транзакция', {
      дата: attr('Дата транзакции', { index: 7 }),
      время: attr('Время', { index: 8, hidden: true }),
      оплата: attr('Статус оплаты', { index: 9 }),
      сумма: attr('Сумма', { index: 10 })
    }, { index: 6, displayMemberPath: 'время' }),
    код: belongsTo('i-i-s-postamat-novyjj-код', 'Сгенерировать код', {
      сгенКод: attr('Сгенерировать код', { index: 11, hidden: true })
    }, { index: 12, hidden: true })
  });
};
