
const BASE_API = 'https://www.abibliadigital.com.br/api'   //    /auth/login
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IldlZCBKdWwgMjEgMjAyMSAxNDo0MTo1MyBHTVQrMDAwMC5qY2NpbnRyQGdtYWlsLmNvbSIsImlhdCI6MTYyNjg3ODUxM30.ELJKIu64k4a3759LO_wHmVHe3ZD_Uct1alS_4Y-Njsg';

export default {
       
    getBooks: async ()=> {
        const response = await fetch(`${BASE_API}/books`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${TOKEN}`
            },
            
        });
        const json = await response.json();  
        return json;

    },
    getBook: async (abrev)=> {
        const response = await fetch(`${BASE_API}/books/${abrev}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${TOKEN}`
            },
            
        });
        const json = await response.json();  
        return json;

    },
    getCapitulo: async (livro,capitulo)=> {
        const response = await fetch(`${BASE_API}/verses/acf/${livro}/${capitulo}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${TOKEN}`
            },
            
        });
        const json = await response.json();  
        return json;

    },

   
  
   
};