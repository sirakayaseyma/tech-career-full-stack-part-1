function getUserList(){
    const table = document.getElementById('userTable');
    fetch("https://northwind.vercel.app/api/categories")
    .then(response=>response.json())
    .then(data=>{
        //console.log(data);
        for(user in data.data){
            console.log(user);
            table.innerHTML+=`
            <tr>
                <td>
                  <input type="text" class="form-control" id="" value="${user.id}" />
                </td>
                <td>
                  <input type="text" class="form-control" id="" value="${user.description}" />
                </td>
                <td>
                  <input type="text" class="form-control" id="" value="${user.name}" />
                </td>
                <td>
                  <a href="" class="btn btn-warning">Güncelle</a>
                  <a href="" class="btn btn-danger">Sil</a>
                </td>
              </tr>
            
            `
        }
    })
}


getUserList();