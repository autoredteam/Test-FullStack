/*
primero
*/
SELECT c.id,c.correo from informes as i,clientes as c where i.pago = 'transbank' GROUP by i.id HAVING count(*) > 1;
 
/*
segundo
*/

SELECT i.* FROM Clientes as c , informes as i where c.correo = 'juan_daniel@gmail.com' and c.id = i.clienteID 
