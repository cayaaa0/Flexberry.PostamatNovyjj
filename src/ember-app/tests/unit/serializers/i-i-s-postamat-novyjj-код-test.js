import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-postamat-novyjj-код', 'Unit | Serializer | i-i-s-postamat-novyjj-код', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-postamat-novyjj-код',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-postamat-novyjj-оплата',
    'transform:i-i-s-postamat-novyjj-состояние',
    'transform:i-i-s-postamat-novyjj-стат-пост',
    'transform:i-i-s-postamat-novyjj-стат-ячейк',
    'transform:i-i-s-postamat-novyjj-статусы',

    'model:i-i-s-postamat-novyjj-адрес',
    'model:i-i-s-postamat-novyjj-код',
    'model:i-i-s-postamat-novyjj-логистика',
    'model:i-i-s-postamat-novyjj-получатель',
    'model:i-i-s-postamat-novyjj-постамат',
    'model:i-i-s-postamat-novyjj-посылка',
    'model:i-i-s-postamat-novyjj-служба-доставки',
    'model:i-i-s-postamat-novyjj-транзакция',
    'model:i-i-s-postamat-novyjj-хранение',
    'model:i-i-s-postamat-novyjj-ячейка',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
