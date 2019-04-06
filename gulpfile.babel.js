import {task} from 'gulp';
import _ from 'lodash';

import html from './gulp/tasks/html.js';

_.forEach({html}, (val, key) => task(key, val));