import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтатусыEnum from '../enums/i-i-s-postamat-novyjj-статусы';

export default FlexberryEnum.extend({
  enum: СтатусыEnum,
  sourceType: 'IIS.PostamatNovyjj.Статусы'
});
