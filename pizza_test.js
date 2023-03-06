

if(responseData.entities =='pizza'){
    pool.query(`select * from pizza `, (error , result)=>{
      if(error) {
          return console.log(error) ; 
      }
      let pizzas = result ; 
      let tableHtml = `<table style="border: 1px solid black;"><thead><tr><th style="border: 1px solid black;">ID</th><th>Name</th></tr></thead><tbody>`;
      pizzas.forEach(pizza => {
        tableHtml += `<tr><td style="border: 1px solid black;" >${pizza.id}</td><td style="border: 1px solid black;">${pizza.taille}</td></tr>`;
      });

      tableHtml += `</tbody></table>`;
      const codeHtml = `<button onClick={handleClick} class="btn btn-success my-3 btn-sm ">click</button>` ; 
      const responses = { 
        entities : responseData.entities,
        response : responseData.response ,
        html : codeHtml
    }
      res.setHeader('Content-Type', 'text/html');
      res.send(responses)
     console.log(pizzas)
    })
    
  }else{
    res.send(responses);
  }