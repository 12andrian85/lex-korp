
const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

// Compile sass into css
function style() {
    // Location of sass files
    return src('./sass/style.scss')
        // pass files throw sass compiler
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('./css'))
        // Stream changes to all browser
        .pipe(browserSync.stream())
}

// Watch sass files when change 
function watcher() {
    browserSync.init({
        // Tell browserSync to use this directory and serve it as a mini-server
        server: {
            baseDir: "./"
        }
        // If you are already serving your website locally using something like apache
        // You can use the proxy setting to proxy that instead
        // proxy: "yourlocal.dev"
    });
    watch('./sass/**/*.scss', {delay: 500}, style);
    watch('./*.html').on('change', browserSync.reload);
    watch('./js/*.js').on('change', browserSync.reload);
}

module.exports = {
    compile: style,
    watch: watcher
};