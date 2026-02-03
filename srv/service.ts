import cds from '@sap/cds';

export default (srv: any) => {
  srv.on('READ', 'SalesOrdersHeaders', async () => {
    return [];
  });
};
