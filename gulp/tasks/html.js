import gulp from 'gulp';
import path from '../config.js';

const htmlTask = () => {
    const {src, dest} = path.html;
    return gulp.src(src).pipe(gulp.dest(dest));
};

export default htmlTask;