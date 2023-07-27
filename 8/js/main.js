import './full-sizeImage.js';
import './form.js';
import {similarPhotos} from './data.js';

const pictures = similarPhotos(25);

import {renderMiniPic} from './creatingMiniatures.js';

renderMiniPic(pictures);

