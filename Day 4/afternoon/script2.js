// const res = document.querySelectorAll("div");
// console.log(res);
// const parent = document.querySelector(".parent");
// const first = document.querySelector(".first");
// const second = document.querySelector(".second");

// parent.removeChild(first);
// console.log("first div was removed");
// parent.removeChild(second);
// console.log("second div was removed");

// function getInfo (e) {
//     let txt = document.querySelector(".text");
//     console.log("Btn was clicked");
//     txt.innerHTML = "The button was clicked";
//     e.target.style.color = 'red';
// }

// const firstnamechange = () => {
//     console.log("firstname");
// }

function submitForm(e)
{

    e.preventDefault();
    const t = e.target
    const res ={hobbies:[]};

    for(let i=0;i<t.length;i++)
    {
        const vl=t[i].value;
        const ty=t[i].type;
        const nm =t[i].name;
        res[nm]=vl;
        console.log(ty,vl);
        if(ty=='checkbox' && t[i].checked)
        {
            res.hobbies.push(vl);
        }
        if(ty!='checkbox')
        {
            res[nm]=vl;
        }
    }

}
