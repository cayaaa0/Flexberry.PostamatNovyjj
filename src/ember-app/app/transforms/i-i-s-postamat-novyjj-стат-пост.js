import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтатПостEnum from '../enums/i-i-s-postamat-novyjj-стат-пост';

export default FlexberryEnum.extend({
  enum: СтатПостEnum,
  sourceType: 'IIS.PostamatNovyjj.СтатПост'
});
