import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостояниеEnum from '../enums/i-i-s-postamat-novyjj-состояние';

export default FlexberryEnum.extend({
  enum: СостояниеEnum,
  sourceType: 'IIS.PostamatNovyjj.Состояние'
});
