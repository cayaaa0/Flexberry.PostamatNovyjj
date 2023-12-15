import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтатЯчейкEnum from '../enums/i-i-s-postamat-novyjj-стат-ячейк';

export default FlexberryEnum.extend({
  enum: СтатЯчейкEnum,
  sourceType: 'IIS.PostamatNovyjj.СтатЯчейк'
});
