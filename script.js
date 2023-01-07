function create() {
    var text = document.getElementsByTagName("input")[0].value
    console.log(text)
    if(text.length != 0)
    {
        var div = document.createElement("div")
        document.body.appendChild(div)
        var li = document.createElement("li")
        li.innerHTML = text
        div.appendChild(li)
        console.log(li.innerText.length)
        var del_btn = document.createElement("button")
        del_btn.innerText ="Delete Item"
        li.appendChild(del_btn)
        del_btn.onclick=function(){
            div.innerHTML=""
        }
        del_btn.style.marginLeft="15px"
        div.style.marginTop="10px"
    }
}