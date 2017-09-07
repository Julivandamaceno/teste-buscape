//evento de botão
$(".add-to-cart").click(function(event){
     event.preventDefault();
     var name = $(this).attr("data-name");
     var price = Number($(this).attr("data-price"));

     addItemToCart(name,price, 1);
     displayCart();
});


var shoppingCart = (function(){

       /*function displayCart(){
              var cartArray = listCart();
              var output = "";
              for(var i in cartArray){
                output += "<li>"+cartArray[i].name+" "+cartArray[i].count+"</li>";
            }
            $("#show-cart").html(output);
        }
        displayCart();*/



        var cart =[];

        var Item = function(name,price,count){
            this.name = name
            this.price = price
            this.count = count
        }


        //salva os itens do carrinho
        function saveCart(){
            localStorage.setItem("shoppingCart", JSON.stringify(cart));
        }

        //carrega o carrinho
        function loadCart(){
            cart = JSON.parse(localStorage.getItem("shoppingCart"));
        }

        loadCart();

        var obj = {};

        //adiciona itens oa carrinho
        obj.addItemToCart = function(name,price,count){
              for(var i in cart){
                if(cart[i].name === name){
                  cart[i].count += count;
                  saveCart();
                  return
                }
            }

            console.log("addItemToCart:", name, price, count);

            var item = new Item(name,price,count);
            cart.push(item);
            saveCart();
        };

        obj.setCountForItem = function(name, count){
                   for(var i in cart){
                        if(cart[i].name === name){
                          cart[i].count = count;
                          break;
                     }
                }
                saveCart();

        obj.removeItemFromCart = function(name){
                    for(var i in cart){
                          if(cart[i].name === name){
                             cart[i].count --;

                                   if(cart[i].count === 0){
                                       cart.splice(i, 1);
                                   }
                                   break;
                          }
                }
                saveCart();

        };

        //remove os itens do carrinho
        obj.removeItemFromCartAll = function(name){
                for(var i in cart){
                  if(cart[i].name === name){
                    cart.splice(i, 1);
                    break;
                }
            }
            saveCart();
        };

        //limpa o carrinho
        obj.clearCart = function(){
            cart = [];
            saveCart();
        };

        //faz a contagem dos itens do carrinho
        obj.countCart = function(){
              var totalCount = 0;
              for(var i in cart){
                totalCount += cart[i].count;
              }
              return totalCount;
        };

        //exibe o total do carrinho
        obj.totalCart = function(){
              var totalCost = 0;
              for(var i in cart){
                totalCost += cart[i].price * cart[i].count;
              }
              return totalCost.toFixed(2);
        };

        //lista os produtos
        obj.listCart = function(){
              var cartCopy = [];
              for(var i in cart){
                    var item = cart[i];
                    var itemCopy = {};
                    for(var p in item){
                       itemCopy[p] = item[p];
                    }
                    itemCopy.total = (item.price * item.count).toFixed(2);
                    cartCopy.push(itemCopy);
            }
            return cartCopy;
        };
        return obj;
})();
