import gulp from 'gulp';
import changed from 'gulp-changed';

import path from '../config.js';

const htmlTask = () => {
    const {src, dest} = path.html;
    return (
        gulp.src(src)
        .pipe(changed(dest))
        .pipe(gulp.dest(dest))
    );
};

export default htmlTask;