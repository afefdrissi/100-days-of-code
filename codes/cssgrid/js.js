$("aside>ul>li").click(function(){
    $(this).toggleClass("active");
});
for (var i=0;i<20;i++){
    $(".list>ul").append('<li><input type="checkbox" name="" id=""><span> Product</span><span>Qty</span><span>Unit</span><span>Price</span><span>total</span><span>*</span></li>');
}