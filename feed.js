 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {
  
  $(".loader").hide();
   var myFacebookToken='EAACEdEose0cBAGDwPyZAPA3OQN8Hks9ZBpHroXT7jdGHQjuZCXxVnyRQFSChVRE5ZAq63vJyWzZBLGVcAyIRrsUq5dAfLfN3VtwHZCxJ2rbTBkNdZBSTak2AZCHy70NrR8sZAucZAyND1VTlb75CbvHtdYJLfTL6x9m6QYysZAy4cs8eLv26ZBTEwUOZBLemRhrdhu1kZD' 
    
    function getFacebookInfo(){
              event.preventDefault();
              
               var a =$("#posts").val();
               
               if ($("#posts").val().length == 0)
                  alert("Please enter some value");
               else   
               {
                  var b=parseInt(a)+1;
            
               if(b<=1  || b>11)
                alert("please enter max limit  of posts between 1 and 10");
               else
               {
             
        $.ajax('https://graph.facebook.com/me?fields=posts.limit('+b+')&access_token='+myFacebookToken,{
                
                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    
                    var j=0;
                   // alert("bijay");

                    for(i in response.posts.data)
                    {  j=j+1;
                    
                    if(response.posts.data[i].story!=null)
                      {  
                        $('#lastPost').append('<h4>'+j+')'+response.posts.data[i].story+'</h4>');
                  
                          if(response.posts.data[i].link !=null)
                          {
                             $('#lastPost').append('<span class=h5>LINK : </span><a href='+response.posts.data[i].link+'>'+response.posts.data[i].link+'</a>');
                  
                            $('#lastPost').append("<br>");
                  
                           }
                           else  
                            $('#lastPost').append("   ");                                 
                       } 
                       else
                       {
                          $('#lastPost').append('<h4>'+j+')'+response.posts.data[i].status_type+'</h4>');
                  
                          if(response.posts.data[i].link !=null)
                          {
                             $('#lastPost').append('<span class=h5>LINK : </span><a href='+response.posts.data[i].link+'>'+response.posts.data[i].link+'</a>');
                   
                          }
                          else
                             {
                              $('#lastPost').append("   ");
                             }

                       }
                  }
                   

                },
                error : function(xhr,status,error){ 
                    console.log(xhr.responseText); 
                    console.log(xhr.status);
                },

                timeout :3000,
                beforeSend : function(){

                    $('.loader').show();

                },

                complete : function(){

                   $('.loader').hide();

                }
            }//end argument list 



        );// end ajax call 

     }
   }
    }// end get facebook info

    $("#facebookBtn1").on('click',getFacebookInfo)



  });