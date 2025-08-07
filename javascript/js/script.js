function handleDebugging(){
    // variable
    const myWebsite = "Elite Shop";
    const maxVisitors = 1000;
   
    console.log(myWebsite);
    console.log(maxVisitors);

    let currentPage = "Home";
    console.log(currentPage);
    currentPage = "About";
    console.log(currentPage);

    var oldJs = "Old way of variable";
    console.log(oldJs);

    // array
    const fruits = ["Apple","Orange","Banana", "Grapes"];
    console.log(fruits[1]);
    fruits.push('Mango');

    // loop
    // for (let i = 0; i < fruits.length; i++){
    //     console.log(fruits[i]);
    // }
    fruits.forEach(function(item){
        console.log(item);
    })

    // dom
   
}

 const heading = document.getElementById('my-heading');
 const myBtn = document.getElementById('my-btn');
 myBtn.onclick = function(){
    heading.innerText = "New heading text";
    console.log(heading.innerText)
 }

 myBtn.addEventListener('mouseover',function(){
    const x = Math.floor(Math.random() * (window.innerWidth - myBtn.offsetWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - myBtn.offsetHeight));
    myBtn.style.position = 'absolute';
    myBtn.style.transition = 'all 0.3s ease';
    myBtn.style.left = `${x}px`;
    myBtn.style.top = `${y}px`;
    console.log(x,y);
 });
