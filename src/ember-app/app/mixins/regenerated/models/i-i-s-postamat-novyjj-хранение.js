import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗавершения: DS.attr('date'),
  датаНачала: DS.attr('date'),
  номер: DS.attr('number'),
  посылка: DS.hasMany('i-i-s-postamat-novyjj-посылка', { inverse: 'хранение', async: false })
});

export let ValidationRules = {
  датаЗавершения: {
    descriptionKey: 'models.i-i-s-postamat-novyjj-хранение.validations.датаЗавершения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаНачала: {
    descriptionKey: 'models.i-i-s-postamat-novyjj-хранение.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-postamat-novyjj-хранение.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  посылка: {
    descriptionKey: 'models.i-i-s-postamat-novyjj-хранение.validations.посылка.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьПолучE', 'i-i-s-postamat-novyjj-хранение', {
    
  });

  modelClass.defineProjection('ХранениеE', 'i-i-s-postamat-novyjj-хранение', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаЗавершения: attr('Дата завершения', { index: 2 }),
    посылка: hasMany('i-i-s-postamat-novyjj-посылка', 'Посылка', {
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
    })
  });

  modelClass.defineProjection('ХранениеL', 'i-i-s-postamat-novyjj-хранение', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаЗавершения: attr('Дата завершения', { index: 2 })
  });
};
