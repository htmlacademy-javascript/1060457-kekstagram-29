import './full-sizeImage.js';
import {similarPhotos} from './data.js';

const pictures = similarPhotos(6);

import {renderMiniPic} from './creatingMiniatures.js';

renderMiniPic(pictures);
