    let id = document.getElementById('id')
        names = document.getElementById('name')
        pwd = document.getElementById('password')
        flag = 0
    function login(){
        //读取数据，判断是否存在
        const myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")
        let requestOptions = { // 里面不能有body
          method: "GET",  
          headers: myHeaders,
          redirect: "follow",
        }
        fetch(`https://db.api.orght.cn/users`, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log('id.value=',id.value)
            if(id.value=='' || names.value=='' || pwd.value==''){
                console.log('111')
                alert('请输入正确信息！')
            }else{
                for(let i = 0;i<data.length;i++){
                if (data[i].id === id.value && data[i].name === names.value && ((data[i].password == pwd.value)||(data[i].password == md5(pwd.value)))) { 
                    // console.log('存在该用户，无需注册，请登录')
                    flag = 1
                  } else {
                    //throw new Error("用户名不存在")
                    console.log('该用户不存在，请注册或id、用户名、密码输入存在错误，请重新输入！') 
                  }
                }
                if(flag == 1){
                    //跳转到主页
                    // document.location.href='./index.html?user_name='+names.value
                    document.location.href='./index_1.html'
                    localStorage.setItem("username",names.value)
                }else{
                    alert('id、用户名、密码输入存在错误，请重新输入！若不存在账号，请注册！') 
                }
            }
         })
        .catch(err => console.log(err))  

    }