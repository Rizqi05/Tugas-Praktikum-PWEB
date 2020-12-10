function login(){
    var ussername = document.getElementById("ussername").value;
    var password = document.getElementById("password").value;

    if (ussername == "pweb_C"){
        if (password == "123123"){
            alert ("Selamat Anda Berhasil LOGIN");
            document.getElementById("form").style.backgroundColor = "lightgreen";
            
            
        }
        else if(password == ""){
            alert ("invalid password!");
            document.getElementById("form").style.backgroundColor = "rgb(245, 78, 78)";
        }
        else{
            alert("invalid password!");
            document.getElementById("form").style.backgroundColor = "rgb(245, 78, 78)";
        }

    }
    else if(ussername == ""){
        alert("invalid ussername!");
        document.getElementById("form").style.backgroundColor = "rgb(245, 78, 78)";
    }
    else{
        alert("invalid ussername or password!");
        document.getElementById("form").style.backgroundColor = "rgb(245, 78, 78)";
    }
}