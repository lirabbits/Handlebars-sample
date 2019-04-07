import { task, watch, parallel, series} from 'gulp';
import _ from 'lodash';

import html from './gulp/tasks/html.js';
import path from "./gulp/config";
import bs from "browser-sync";

/** タスク一覧
 *  タスク名: タスク内容
 */
const tasks = {html};

_.forEach(tasks, (val, key) => task(key, val));

/**
 * broserSync
 */
task('bs', () => bs({server: './dest'}));
task('reload', done => {
    bs.reload();
    done();
});

/**
 *  ファイル監視
 */
task('watch', () => {
    const task = _.map(tasks, (val, key) => key);
    return watch(path[task].src, series(parallel([task]), 'reload'));
});

task('default', parallel(_.map(tasks, (val, key) => key), 'watch', 'bs'));
