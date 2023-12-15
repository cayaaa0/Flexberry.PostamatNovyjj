import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-postamat-novyjj-адрес-l');
  this.route('i-i-s-postamat-novyjj-адрес-e',
  { path: 'i-i-s-postamat-novyjj-адрес-e/:id' });
  this.route('i-i-s-postamat-novyjj-адрес-e.new',
  { path: 'i-i-s-postamat-novyjj-адрес-e/new' });
  this.route('i-i-s-postamat-novyjj-код-l');
  this.route('i-i-s-postamat-novyjj-код-e',
  { path: 'i-i-s-postamat-novyjj-код-e/:id' });
  this.route('i-i-s-postamat-novyjj-код-e.new',
  { path: 'i-i-s-postamat-novyjj-код-e/new' });
  this.route('i-i-s-postamat-novyjj-логистика-l');
  this.route('i-i-s-postamat-novyjj-логистика-e',
  { path: 'i-i-s-postamat-novyjj-логистика-e/:id' });
  this.route('i-i-s-postamat-novyjj-логистика-e.new',
  { path: 'i-i-s-postamat-novyjj-логистика-e/new' });
  this.route('i-i-s-postamat-novyjj-получатель-l');
  this.route('i-i-s-postamat-novyjj-получатель-e',
  { path: 'i-i-s-postamat-novyjj-получатель-e/:id' });
  this.route('i-i-s-postamat-novyjj-получатель-e.new',
  { path: 'i-i-s-postamat-novyjj-получатель-e/new' });
  this.route('i-i-s-postamat-novyjj-постамат-l');
  this.route('i-i-s-postamat-novyjj-постамат-e',
  { path: 'i-i-s-postamat-novyjj-постамат-e/:id' });
  this.route('i-i-s-postamat-novyjj-постамат-e.new',
  { path: 'i-i-s-postamat-novyjj-постамат-e/new' });
  this.route('i-i-s-postamat-novyjj-служба-доставки-l');
  this.route('i-i-s-postamat-novyjj-служба-доставки-e',
  { path: 'i-i-s-postamat-novyjj-служба-доставки-e/:id' });
  this.route('i-i-s-postamat-novyjj-служба-доставки-e.new',
  { path: 'i-i-s-postamat-novyjj-служба-доставки-e/new' });
  this.route('i-i-s-postamat-novyjj-транзакция-l');
  this.route('i-i-s-postamat-novyjj-транзакция-e',
  { path: 'i-i-s-postamat-novyjj-транзакция-e/:id' });
  this.route('i-i-s-postamat-novyjj-транзакция-e.new',
  { path: 'i-i-s-postamat-novyjj-транзакция-e/new' });
  this.route('i-i-s-postamat-novyjj-хранение-l');
  this.route('i-i-s-postamat-novyjj-хранение-e',
  { path: 'i-i-s-postamat-novyjj-хранение-e/:id' });
  this.route('i-i-s-postamat-novyjj-хранение-e.new',
  { path: 'i-i-s-postamat-novyjj-хранение-e/new' });
});

export default Router;
