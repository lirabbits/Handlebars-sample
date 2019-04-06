import { task, watch, parallel} from 'gulp';
import _ from 'lodash';

import html from './gulp/tasks/html.js';
import path from "./gulp/config";

/** タスク一覧
 *  タスク名: タスク内容
 */
const tasks = {html};

_.forEach(tasks, (val, key) => task(key, val));

/**
 *  ファイル監視
 */
task('watch', () => {
    const task = _.map(tasks, (val, key) => key);
    return watch(path[task].src, parallel([task]));
});

task('default', parallel(_.map(tasks, (val, key) => key), 'watch'));
