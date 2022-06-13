"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactPage = exports.DisplayServicesPage = exports.DisplayProjectsPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: '' });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About Us', page: 'about', displayName: '' });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayProjectsPage(req, res, next) {
    res.render('index', { title: 'Our Projects', page: 'projects', displayName: '' });
}
exports.DisplayProjectsPage = DisplayProjectsPage;
function DisplayServicesPage(req, res, next) {
    res.render('index', { title: 'Our Services', page: 'services', displayName: '' });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayContactPage(req, res, next) {
    res.render('index', { title: 'Contact Us', page: 'contact', displayName: '' });
}
exports.DisplayContactPage = DisplayContactPage;
//# sourceMappingURL=index.js.map