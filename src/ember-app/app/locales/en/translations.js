import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPostamatNovyjjАдресLForm from './forms/i-i-s-postamat-novyjj-адрес-l';
import IISPostamatNovyjjКодLForm from './forms/i-i-s-postamat-novyjj-код-l';
import IISPostamatNovyjjЛогистикаLForm from './forms/i-i-s-postamat-novyjj-логистика-l';
import IISPostamatNovyjjПолучательLForm from './forms/i-i-s-postamat-novyjj-получатель-l';
import IISPostamatNovyjjПостаматLForm from './forms/i-i-s-postamat-novyjj-постамат-l';
import IISPostamatNovyjjСлужбаДоставкиLForm from './forms/i-i-s-postamat-novyjj-служба-доставки-l';
import IISPostamatNovyjjТранзакцияLForm from './forms/i-i-s-postamat-novyjj-транзакция-l';
import IISPostamatNovyjjХранениеLForm from './forms/i-i-s-postamat-novyjj-хранение-l';
import IISPostamatNovyjjАдресEForm from './forms/i-i-s-postamat-novyjj-адрес-e';
import IISPostamatNovyjjКодEForm from './forms/i-i-s-postamat-novyjj-код-e';
import IISPostamatNovyjjЛогистикаEForm from './forms/i-i-s-postamat-novyjj-логистика-e';
import IISPostamatNovyjjПолучательEForm from './forms/i-i-s-postamat-novyjj-получатель-e';
import IISPostamatNovyjjПостаматEForm from './forms/i-i-s-postamat-novyjj-постамат-e';
import IISPostamatNovyjjСлужбаДоставкиEForm from './forms/i-i-s-postamat-novyjj-служба-доставки-e';
import IISPostamatNovyjjТранзакцияEForm from './forms/i-i-s-postamat-novyjj-транзакция-e';
import IISPostamatNovyjjХранениеEForm from './forms/i-i-s-postamat-novyjj-хранение-e';
import IISPostamatNovyjjАдресModel from './models/i-i-s-postamat-novyjj-адрес';
import IISPostamatNovyjjКодModel from './models/i-i-s-postamat-novyjj-код';
import IISPostamatNovyjjЛогистикаModel from './models/i-i-s-postamat-novyjj-логистика';
import IISPostamatNovyjjПолучательModel from './models/i-i-s-postamat-novyjj-получатель';
import IISPostamatNovyjjПостаматModel from './models/i-i-s-postamat-novyjj-постамат';
import IISPostamatNovyjjПосылкаModel from './models/i-i-s-postamat-novyjj-посылка';
import IISPostamatNovyjjСлужбаДоставкиModel from './models/i-i-s-postamat-novyjj-служба-доставки';
import IISPostamatNovyjjТранзакцияModel from './models/i-i-s-postamat-novyjj-транзакция';
import IISPostamatNovyjjХранениеModel from './models/i-i-s-postamat-novyjj-хранение';
import IISPostamatNovyjjЯчейкаModel from './models/i-i-s-postamat-novyjj-ячейка';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-postamat-novyjj-адрес': IISPostamatNovyjjАдресModel,
    'i-i-s-postamat-novyjj-код': IISPostamatNovyjjКодModel,
    'i-i-s-postamat-novyjj-логистика': IISPostamatNovyjjЛогистикаModel,
    'i-i-s-postamat-novyjj-получатель': IISPostamatNovyjjПолучательModel,
    'i-i-s-postamat-novyjj-постамат': IISPostamatNovyjjПостаматModel,
    'i-i-s-postamat-novyjj-посылка': IISPostamatNovyjjПосылкаModel,
    'i-i-s-postamat-novyjj-служба-доставки': IISPostamatNovyjjСлужбаДоставкиModel,
    'i-i-s-postamat-novyjj-транзакция': IISPostamatNovyjjТранзакцияModel,
    'i-i-s-postamat-novyjj-хранение': IISPostamatNovyjjХранениеModel,
    'i-i-s-postamat-novyjj-ячейка': IISPostamatNovyjjЯчейкаModel
  },

  'application-name': 'Postamat novyjj',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Postamat novyjj',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Postamat novyjj',
          title: 'Postamat novyjj'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'postamat-novyjj': {
          caption: 'PostamatNovyjj',
          title: 'PostamatNovyjj',
          'i-i-s-postamat-novyjj-логистика-l': {
            caption: 'Логистика',
            title: ''
          },
          'i-i-s-postamat-novyjj-постамат-l': {
            caption: 'Постамат',
            title: ''
          },
          'i-i-s-postamat-novyjj-код-l': {
            caption: 'Код',
            title: ''
          },
          'i-i-s-postamat-novyjj-адрес-l': {
            caption: 'Адрес',
            title: ''
          },
          'i-i-s-postamat-novyjj-хранение-l': {
            caption: 'Хранение',
            title: ''
          },
          'i-i-s-postamat-novyjj-получатель-l': {
            caption: 'Получатель',
            title: ''
          },
          'i-i-s-postamat-novyjj-транзакция-l': {
            caption: 'Транзакция',
            title: ''
          },
          'i-i-s-postamat-novyjj-служба-доставки-l': {
            caption: 'Служба доставки',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-postamat-novyjj-адрес-l': IISPostamatNovyjjАдресLForm,
    'i-i-s-postamat-novyjj-код-l': IISPostamatNovyjjКодLForm,
    'i-i-s-postamat-novyjj-логистика-l': IISPostamatNovyjjЛогистикаLForm,
    'i-i-s-postamat-novyjj-получатель-l': IISPostamatNovyjjПолучательLForm,
    'i-i-s-postamat-novyjj-постамат-l': IISPostamatNovyjjПостаматLForm,
    'i-i-s-postamat-novyjj-служба-доставки-l': IISPostamatNovyjjСлужбаДоставкиLForm,
    'i-i-s-postamat-novyjj-транзакция-l': IISPostamatNovyjjТранзакцияLForm,
    'i-i-s-postamat-novyjj-хранение-l': IISPostamatNovyjjХранениеLForm,
    'i-i-s-postamat-novyjj-адрес-e': IISPostamatNovyjjАдресEForm,
    'i-i-s-postamat-novyjj-код-e': IISPostamatNovyjjКодEForm,
    'i-i-s-postamat-novyjj-логистика-e': IISPostamatNovyjjЛогистикаEForm,
    'i-i-s-postamat-novyjj-получатель-e': IISPostamatNovyjjПолучательEForm,
    'i-i-s-postamat-novyjj-постамат-e': IISPostamatNovyjjПостаматEForm,
    'i-i-s-postamat-novyjj-служба-доставки-e': IISPostamatNovyjjСлужбаДоставкиEForm,
    'i-i-s-postamat-novyjj-транзакция-e': IISPostamatNovyjjТранзакцияEForm,
    'i-i-s-postamat-novyjj-хранение-e': IISPostamatNovyjjХранениеEForm
  },

});

export default translations;
