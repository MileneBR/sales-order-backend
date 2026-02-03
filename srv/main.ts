import { Service } from '@sap/cds';
import { Customers } from '@cds-models/sales';


export default (service: any) => {
  service.after('READ', 'Customers', (results: Customers) => {
    //console.log(results);

    //coloca @gmail quando o campo email nao tiver @:
    results.forEach(customer => {
        if(!customer.email?.includes('@')){
            customer.email = `${customer.email}@gmail.com`
        }

    })
  });
};






/*import { Customer, Customers } from '@cds-models/sales';

const customer: Customer ={
    email:'milenebribeiro@hotmail.com',
    firstName: 'Milene',
    lastName: 'Ribeiro',
    id: '1234'
}

const customers: Customers = [customer]

const funcao = (variavel: string) => console.log(variavel);

funcao('123');*/