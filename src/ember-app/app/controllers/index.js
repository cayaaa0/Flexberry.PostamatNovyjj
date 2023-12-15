import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.postamat-novyjj.caption'),
          title: i18n.t('forms.application.sitemap.postamat-novyjj.title'),
          children: [{
            link: 'i-i-s-postamat-novyjj-логистика-l',
            caption: i18n.t('forms.application.sitemap.postamat-novyjj.i-i-s-postamat-novyjj-логистика-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat-novyjj.i-i-s-postamat-novyjj-логистика-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-postamat-novyjj-постамат-l',
            caption: i18n.t('forms.application.sitemap.postamat-novyjj.i-i-s-postamat-novyjj-постамат-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat-novyjj.i-i-s-postamat-novyjj-постамат-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-postamat-novyjj-код-l',
            caption: i18n.t('forms.application.sitemap.postamat-novyjj.i-i-s-postamat-novyjj-код-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat-novyjj.i-i-s-postamat-novyjj-код-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-postamat-novyjj-адрес-l',
            caption: i18n.t('forms.application.sitemap.postamat-novyjj.i-i-s-postamat-novyjj-адрес-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat-novyjj.i-i-s-postamat-novyjj-адрес-l.title'),
            children: null
          }, {
            link: 'i-i-s-postamat-novyjj-хранение-l',
            caption: i18n.t('forms.application.sitemap.postamat-novyjj.i-i-s-postamat-novyjj-хранение-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat-novyjj.i-i-s-postamat-novyjj-хранение-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-postamat-novyjj-получатель-l',
            caption: i18n.t('forms.application.sitemap.postamat-novyjj.i-i-s-postamat-novyjj-получатель-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat-novyjj.i-i-s-postamat-novyjj-получатель-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-postamat-novyjj-транзакция-l',
            caption: i18n.t('forms.application.sitemap.postamat-novyjj.i-i-s-postamat-novyjj-транзакция-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat-novyjj.i-i-s-postamat-novyjj-транзакция-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-postamat-novyjj-служба-доставки-l',
            caption: i18n.t('forms.application.sitemap.postamat-novyjj.i-i-s-postamat-novyjj-служба-доставки-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat-novyjj.i-i-s-postamat-novyjj-служба-доставки-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }
      ]
    };
  }),
})