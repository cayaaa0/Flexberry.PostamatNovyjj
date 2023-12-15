import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-postamat-novyjj-транзакция', 'Unit | Model | i-i-s-postamat-novyjj-транзакция', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
