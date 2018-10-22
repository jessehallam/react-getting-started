const express = require('express');
const path = require('path');

const wwwroot = path.resolve(__dirname, '../../wwwroot');
const indexFile = path.join(wwwroot, 'dist', 'index.html');

module.exports = function (app) {
    app.get('/', (_, res) => res.sendFile(indexFile));
    app.use(express.static(wwwroot));
}