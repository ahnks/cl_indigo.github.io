$(function(){
    $(".slider li").hide();
    $(".slider li").eq(0).show();

    var n=0 //현재 보여지는 이미지
    setInterval(function(){

        $(".slider li").eq(n).fadeOut();

        if(n == 2){
            n=0;
        }else{
            n++; //n=n+1
        }
        console.log(n)

        $(".slider li").eq(n).fadeIn();
    }, 3000) //1000 =1초
        
})