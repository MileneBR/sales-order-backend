"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (srv) => {
    srv.on('READ', 'SalesOrdersHeaders', async () => {
        return [];
    });
};
