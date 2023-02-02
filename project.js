$(document).ready(function(){
    let duplicate_avoid=0;
    let parameter_option=0;
    let back_button=0;
    let multiple_door_option=0
    let change_both_door=0;
    let h1,w1,w,hf,wf,p;

    var a=$(".door-duplicate").html();
    var b=$(".custom-duplicate").html();

    $("#d1").hide();
    $(".custom-option").hide();

    $("#wood").click(function(){
        $(".g1").css({borderImage: "url('https://img.freepik.com/free-photo/wooden-texture_1149-1315.jpg?w=996&t=st=1674290940~exp=1674291540~hmac=1aec63e9f2bbc81f6297f3ad587a4c116be53f8bc53b9730da44f76a1ce44722')300 stretch"},0);
        $(".door").css({backgroundImage: "url('https://img.freepik.com/free-photo/wooden-texture_1149-1315.jpg?w=996&t=st=1674290940~exp=1674291540~hmac=1aec63e9f2bbc81f6297f3ad587a4c116be53f8bc53b9730da44f76a1ce44722')"});
    });
    $("#steel").click(function(){
        $(".g1").css({borderImage: "url('https://img.freepik.com/free-vector/white-abstract-background_23-2148817572.jpg?w=1060&t=st=1674551903~exp=1674552503~hmac=c3cd79c320f83845d2ab802e29526d5f6f806b7e21ae26d8f88cc7be7576fce8')300 stretch"},0);
        $(".door").css({backgroundImage: "url('https://img.freepik.com/free-vector/shiny-metal-background_1048-6645.jpg?w=740&t=st=1674290300~exp=1674290900~hmac=f9c093aff05e11a40bf9d1f0c02564289e55e52e1401994c9fb60ecd4fa672cc')"});
    });
    $("#pvc").click(function(){
        $(".g1").css({borderImage: "url('https://img.freepik.com/free-photo/light-brown-texture_1253-248.jpg?w=1060&t=st=1674290891~exp=1674291491~hmac=a968f15082a61d65650e2a06ea0f2c66bb6d698dae19b7ef435bd95fb48c8d43')300 stretch"},0);
        $(".door").css({backgroundImage: "url('https://img.freepik.com/free-photo/light-brown-texture_1253-248.jpg?w=1060&t=st=1674290891~exp=1674291491~hmac=a968f15082a61d65650e2a06ea0f2c66bb6d698dae19b7ef435bd95fb48c8d43')"});
    });

    $("#1").click(function(){
        back_button=1;
        multiple_door_option=1;

        $("#dup1").remove();
        let i=$(".opt-input").val();
        for(i;i>0;i--){
            $("#dup1").remove();
        }

        $(".parameter_door2").hide();
        $(".body-content").hide(0,function(){
            $(".pop-up").show(0,function(){
                $(".parameter").show();
                $(".parameter_enter").hide();
            });
        });
        $("#add-button").empty();
        $("#d1").show();
        $(".custom-option").show();
        $(".h1").attr({placeholder: "Height"});
        $(".w1").attr({placeholder: "Width"});
        $("#height").val('');
        $("#width").val('');
    });
    $("#2").click(function(){
        back_button=1;
        multiple_door_option=2;
        $(".parameter_enter").hide();
        $(".body-content").hide(0,function(){
            $(".pop-up").show(0,function(){
                $(".parameter").show();
                $(".parameter_door2").hide();
            });
        });
        $(".custom-option").show();
        let i=$(".opt-input").val();
        for(i;i>0;i--){
            $("#dup1").remove();
        }
        if(duplicate_avoid==0){
            $("#d1").after(a);
            $("#d1").show();
            $("#add-button").append(b);
            $(".h1").attr({placeholder: "Door 1:Height"});
            $(".w1").attr({placeholder: "Door 1:Width"});
            $(".h2").attr({placeholder: "Door 2:Height"});
            $(".w2").attr({placeholder: "Door 2:Width"});
            duplicate_avoid=1;
        }
    });

    $(".back-button").click(function(){
        if(back_button==1){
            back_button=0;
            $('.pop-up').hide();
            $('.body-content').show();
            $("#d1").hide();
            $("#dup1").remove();
            $('.custom-option').hide();
        }else if(back_button==2){
            back_button=1;
            $('.parameter_enter').hide();
            $('.parameter').show();
        }
    });

    $(".cancel").click(function(){
        $(".body-content").show();
        $(".pop-up-estimate").hide();
        $(".pop-up").hide();
        $("#d1").hide();
        $("#dup1").remove();
        $('.custom-option').hide();
    });

    $(".estimate-cancel").click(function(){
        $(".body-content").show();
        $(".pop-up-estimate").hide();
        $(".heading").show();
    });

    $(".pm_1").click(function(){
        parameter_option=1
        back_button=2;
        if(multiple_door_option==1){
            $(".body-content").hide(0,function(){
                $(".pop-up").show(0,function(){
                    $(".pop-caption").text("Enter Height & Width");
                    $(".parameter_enter").show();
                    $(".parameter").hide();
                    $(".window-design").css({content: "url('https://images.contentstack.io/v3/assets/bltf589e66bcaecd79c/blt3d118fa8c795da9e/5eb82ce61fca102e28a1c24a/reserve-cont-casement-cob-large.png?width=778&height=675&format=webp&quality=90')"});
                    $("#height").addClass("pop-h");
                    $("#width").addClass("pop-w");
                    $("#height").removeClass("pop-h1");
                    $("#width").removeClass("pop-w1");
                });
            });
        }else{
            $(".body-content").hide(0,function(){
                $(".pop-up").show(0,function(){
                    $(".parameter_door2").show();
                    $(".parameter").hide();
                    $(".parameter_enter").hide();
                });
            });
        }
    });
    $(".pm_2").click(function(){
        parameter_option=2;
        back_button=2;
        if(multiple_door_option==1){
            $(".body-content").hide(0,function(){
                $(".pop-up").show(0,function(){
                    $(".pop-caption").text("Enter Height & Width");
                    $(".parameter_enter").show();
                    $(".parameter").hide();
                    $("#height").addClass("pop-h");
                    $("#width").addClass("pop-w");
                    $("#height").removeClass("pop-h1");
                    $("#width").removeClass("pop-w1");
                });
            });
        }else{
            $(".body-content").hide(0,function(){
                $(".pop-up").show(0,function(){
                    $(".parameter_door2").show();
                    $(".parameter").hide();
                    $(".parameter_enter").hide();
                });
            });
        }
    });
    $(".pmd_1").click(function(){
        $(".pop-caption").text("Enter Both Door Height & Width");
        $(".parameter_enter").show();
        $(".parameter_door2").hide();
        $(".window-design").css({content: "URL('https://cdn.shopify.com/s/files/1/0604/3261/3620/products/H2922c49a8fda48e7b74ae531b37f7948t.jpg?v=1634956263')"});
        $("#height").addClass("pop-h1");
        $("#width").addClass("pop-w1");
        $("#height").removeClass("pop-h");
        $("#width").removeClass("pop-w");
    });
    $(".pmd_2").click(function(){
            change_both_door=1;
            $(".pop-caption").text("Enter Door 1 Height & Width");
            $(".parameter_enter").show();
            $(".parameter_door2").hide();
            $(".parameter").hide();
            $(".window-design").css({content: "url('https://images.contentstack.io/v3/assets/bltf589e66bcaecd79c/blt3d118fa8c795da9e/5eb82ce61fca102e28a1c24a/reserve-cont-casement-cob-large.png?width=778&height=675&format=webp&quality=90')"});
            $("#height").addClass("pop-h");
            $("#width").addClass("pop-w");
            $("#height").removeClass("pop-h1");
            $("#width").removeClass("pop-w1");
            $(".button-opt").hide();
            $(".back-div").hide();
            $(".nxt-div").show();
            $(".sq_ft_price").hide();
            $(".cancel").hide();
    });

    $(".next-button").click(function(){
        if($("#height").val()!=0 && $("#width").val()!=0){
            $(".sq_ft_price").show();
            $(".cancel").show();
            h=$("#height").val();
            w=$("#width").val();
            if(change_both_door==1){
                hf=h*12;
                wf=w*12;
                if(hf<=100||wf<=100){
                    if(hf>100||wf>100){
                        hf/=10;
                        wf/=10;
                    }
                    $("#d1").css({height: (hf)+"%",width: (wf)+"%"});
                    $(".h1").attr({placeholder: "Height : "+h+" ft"});
                    $(".w1").attr({placeholder: "Width : "+w+" ft"});
                    $("#description").text("1 SQ.Feet = Rs."+p+".00");

                    $(".door_items").text("Door");
                    $(".door_size").text(w+"*"+h+" ft = "+(w*h)+" Sq.ft");
                    $(".door_quantity").text("1");
                    $(".door_price").text(p);
                    $(".door_total").text("Rs."+w*h*p+".00");

                    $(".handle_items").text("Handle");
                    $(".handle_size").text("-");
                    $(".handle_quantity").text("1");
                    $(".handle_total").text("Rs."+1*130+".00");
                    $(".Total").text((w*h*p)+130);
                }else{
                    alert("Enter vaild input");
                    $("#height").val('');
                    $("#width").val('');
                    $('.body-content').hide();
                    $('.pop-up').show();
                }  
            }else if(parameter_option==2){
                if(hf>1000||wf>1000){
                    if(h>100||w>100){
                        h/=100;
                        w/=100;
                    }
                        $("#d1").css({height: (h)+"%",width: (w)+"%"});

                        $(".h1").attr({placeholder: "Height : "+h+" inc"});
                        $(".w1").attr({placeholder: "Width : "+w+" inc"});
                        $("#description").text("1 SQ.Feet = Rs."+p+".00");

                        $(".door_items").text("Door");
                        $(".door_size").text(w+"*"+h+" ft = "+(w*h)+" Sq.ft");
                        $(".door_quantity").text("1");
                        $(".door_price").text(p);
                        $(".door_total").text("Rs."+w*h*p+".00");

                        $(".handle_items").text("Handle");
                        $(".handle_size").text("-");
                        $(".handle_quantity").text("1");
                        $(".handle_total").text("Rs."+1*130+".00");
                        $(".Total").text((w*h*p)+130);
                }else{
                    alert("Enter vaild input");
                    $("#height").val('');
                    $("#width").val('');
                    $('.body-content').hide();
                    $('.pop-up').show();
                }
            }
            change_both_door=2;
            $("#height").val('');
            $("#width").val('');
            $(".pop-caption").text("Enter Door 2 Height & Width");
            $(".button-opt").show();
            $(".back-div").show();
            $(".nxt-div").hide();
        }else{
            change_both_door=1;
            alert("Enter the height & width");
            $("#height").val('');
            $("#width").val('');
            $(".pop-caption").text("Enter Door 1 Height & Width");
            $(".parameter_enter").show();
            $(".parameter_door2").hide();
            $(".parameter").hide();
            $(".window-design").css({content: "url('https://images.contentstack.io/v3/assets/bltf589e66bcaecd79c/blt3d118fa8c795da9e/5eb82ce61fca102e28a1c24a/reserve-cont-casement-cob-large.png?width=778&height=675&format=webp&quality=90')"});
            $("#height").addClass("pop-h");
            $("#width").addClass("pop-w");
            $("#height").removeClass("pop-h1");
            $("#width").removeClass("pop-w1");
            $(".button-opt").hide();
            $(".back-div").hide();
            $(".nxt-div").show();
        }
    }); 
    function pop(){
        p=$(".sq_ft_price").val();
        if(change_both_door==0){
            if($("#height").val()!=0 && $("#width").val()!=0){
                $(".body-content").show(0,function(){
                    $(".pop-up").hide(0);
                });
                    h=$("#height").val();
                    w=$("#width").val();

                if(parameter_option==1){
                    hf=h*12;
                    wf=w*12;
                    if(hf<1000||wf<1000){
                        if(hf>100||wf>100){
                            hf/=10;
                            wf/=10;
                            n=0;
                            while(hf<50){
                                n++;
                                hf*=n;
                                wf*=n;
                            }
                            while(hf>100){
                                hf/=n;
                                wf/=n;
                            }
                        }
                        $(".door").css({height: (hf)+"%",width: (wf)+"%"});
                        $(".h1").attr({placeholder: "Height : "+h+" ft"});
                        $(".w1").attr({placeholder: "Width : "+w+" ft"});

                        function display(){
                            $("#description").text("1 SQ.Feet = Rs."+p+".00");
                            $(".door_items").text("Door");
                            $(".door_size").text(w+"*"+h+" ft = "+(w*h)+" Sq.ft");
                            $(".door_quantity").text("1");
                            $(".door_price").text(p);
                            $(".door_total").text("Rs."+w*h*p+".00");
    
                            $(".handle_items").text("Handle");
                            $(".handle_size").text("-");
                            $(".handle_quantity").text("1");
                            $(".handle_total").text("Rs."+1*130+".00");
                            $(".Total").text((w*h*p)+130);
                        }
                        display();
                    }else{
                        alert("Enter vaild input");
                        $("#height").val('');
                        $("#width").val('');
                        $('.body-content').hide();
                        $('.pop-up').show();
                    }
                        
                }else if(parameter_option==2){
                    if(h<1000||w<1000){
                        if(h>100||w>100){
                            h/=100;
                            w/=100;
                        }
                        $(".door").css({height: (h)+"%",width: (w)+"%"});
                        $(".h1").attr({placeholder: "Height : "+h+" inc"});
                        $(".w1").attr({placeholder: "Width : "+w+" inc"});
                        $("#description").text("1 SQ.Feet = Rs."+p+".00");

                    }else{
                        alert("Enter vaild input");
                        $("#height").val('');
                        $("#width").val('');
                        $('.body-content').hide();
                        $('.pop-up').show();
                    }
                }
            }else{
                alert("Enter height & Width");
                $("#height").val('');
                $("#width").val('');
            }
            $("#height").val('');
            $("#width").val('');
        }
        else{
            if(change_both_door==2){

                if($("#height").val()!=0 && $("#width").val()!=0){
                    $(".body-content").show(0,function(){
                        $(".pop-up").hide(0);
                    });
                        h=$("#height").val();
                        w=$("#width").val();
                    if(parameter_option==1){

                        let hf=h*12;
                        let wf=w*12;
                        if(hf<1000||wf<1000){
                            if(hf>100||wf>100){
                                hf/=10;
                                wf/=10;
                            }
                        $("#dup1").css({height: (hf)+"%",width: (wf)+"%"});

                        $(".h2").attr({placeholder: "Height : "+h+" inc"});
                        $(".w2").attr({placeholder: "Width : "+w+" inc"});
                        $("#description").text("1 SQ.Feet = Rs."+p+".00");

                        $(".door_items").text("Door");
                        $(".door_size").text(w+"*"+h+" ft = "+(w*h)+" Sq.ft");
                        $(".door_quantity").text("1");
                        $(".door_price").text(p);
                        $(".door_total").text("Rs."+w*h*p+".00");

                        $(".handle_items").text("Handle");
                        $(".handle_size").text("-");
                        $(".handle_quantity").text("1");
                        $(".handle_total").text("Rs."+1*130+".00");
                        $(".Total").text((w*h*p)+130);
                    }else{
                        alert("Enter vaild input");
                        $("#height").val('');
                        $("#width").val('');
                        $('.body-content').hide();
                        $('.pop-up').show();
                    }
                    }else if(parameter_option==2){
                        if(hf<1000||wf<1000){
                            if(h>100||w>100){
                                h/=100;
                                w/=100;
                            }
                                $("#dup1").css({height: (h)+"%",width: (w)+"%"});
                        }else{
                            alert("Enter vaild input");
                            $("#height").val('');
                            $("#width").val('');
                            $('.body-content').hide();
                            $('.pop-up').show();
                        }
                    }
                }else{
                    alert("Enter height & Width");
                    $("#height").val('');
                    $("#width").val('');
                }
                $("#height").val('');
                $("#width").val('');
            }
        }
    }
    
    $("#pop-submit").click(pop);

    $("#pop-reset").click(function(){
        $("#height").val('');
        $("#width").val('');
    });

    $("#custom-submit").click(function(){
        p=$(".sq_ft_price").val();
        if($("#height1").val()!=0 && $("#width1").val()!=0){
            h1=$("#height1").val();
            w1=$("#width1").val();
            if(parameter_option==1){
                if((h1*12)<=200){
                    $(".door").css({height: (h1*12)+"%",width: (w1*12)+"%"});
                    $(".handle").css({paddingTop: ((h1/2)*12)+"%"});

                    $(".h1").attr({placeholder: "Height : "+h+" ft"});
                    $(".w1").attr({placeholder: "Width : "+w+" ft"});
                    $("#description").text("1 SQ.Feet = Rs."+p+".00");
                    $(".door_items").text("Door");
                    $(".door_size").text(w1+"*"+h1+" ft = "+(w1*h1)+" Sq.ft");
                    $(".door_quantity").text("1");
                    $(".door_price").text(p);
                    $(".door_total").text("Rs."+w1*h1*p+".00");

                    $(".handle_items").text("Handle");
                    $(".handle_size").text("-");
                    $(".handle_quantity").text("1");
                    $(".handle_total").text("Rs."+1*130+".00");
                    $(".Total").text((w1*h1*p)+130);
                }
                else{
                    alert("Enter vaild input");
                    $("#height1").val('');
                    $("#width1").val('');
                }
            }else if(parameter_option==2){
                if(h1<=200){
                    $(".door").css({height: (h1)+"%",width: (w1)+"%"});
                    $(".handle").css({paddingTop: (h1/2)+"%"});

                    $(".h1").attr({placeholder: h+" inc"});
                    $(".w1").attr({placeholder: w+" inc"});
                    $("#description").text("1 SQ.Feet = Rs."+p+".00");
                    $(".door_items").text("Door");
                    $(".door_size").text(w1+"*"+h1+"ft = "+(w1*h1)+" Sq.ft");
                    $(".door_quantity").text("1");
                    $(".door_price").text(p);
                    $(".door_total").text("Rs."+w1*h1*p+".00");

                    $(".handle_items").text("Handle");
                    $(".handle_size").text("-");
                    $(".handle_quantity").text("1");
                    $(".handle_total").text("Rs."+1*130+".00");
                    $(".Total").text((w1*h1*p)+130);
                }
                else{
                    alert("Enter vaild input");
                    $("#height1").val('');
                    $("#width1").val('');
                }
            }
        }else{
            alert("Enter height & Width");
            $("#height").val('');
            $("#width").val('');
        }
    });
    $(".custom-option").keypress(function(e){
        p=$(".sq_ft_price").val();
        if(e.which==13){
            if($("#height1").val()!=0 && $("#width1").val()!=0){
                h1=$("#height1").val();
                w1=$("#width1").val();
                if(parameter_option==1){
                    if((h1*12)<=200){
                        $(".door").css({height: (h1*12)+"%",width: (w1*12)+"%"});
                        $(".handle").css({paddingTop: ((h1/2)*12)+"%"});
                        
                        $(".h1").attr({placeholder: h+" ft"});
                        $(".w1").attr({placeholder: w+" ft"});
                        $("#description").text("1 SQ.Feet = Rs."+p+".00");
                        $(".door_items").text("Door");
                        $(".door_size").text(w1+"*"+h1+"ft = "+(w1*h1)+" Sq.ft");
                        $(".door_quantity").text("1");
                        $(".door_price").text(p);
                        $(".door_total").text("Rs."+w1*h1*p+".00");

                        $(".handle_items").text("Handle");
                        $(".handle_size").text("-");
                        $(".handle_quantity").text("1");
                        $(".handle_total").text("Rs."+1*130+".00");
                        $(".Total").text((w1*h1*p)+130);
                    }
                    else{
                        alert("Enter vaild input");
                        $("#height1").val('');
                        $("#width1").val('');
                    }
                }else if(parameter_option==2){
                    if(h1<=200){
                        $(".door").css({height: (h1)+"%",width: (w1)+"%"});
                        $(".handle").css({paddingTop: (h1/2)+"%"});

                        $(".h1").attr({placeholder: h+" inc"});
                        $(".w1").attr({placeholder: w+" inc"});
                        $("#description").text("1 SQ.Feet = Rs."+p+".00");
                        $(".door_items").text("Door");
                        $(".door_size").text(w1+"*"+h1+"ft = "+(w1*h1)+" Sq.ft");
                        $(".door_quantity").text("1");
                        $(".door_price").text(p);
                        $(".door_total").text("Rs : "+w1*h1*p);

                        $(".handle_items").text("Handle");
                        $(".handle_size").text("-");
                        $(".handle_quantity").text("1");
                        $(".handle_total").text("Rs."+1*130+".00");
                        $(".Total").text((w1*h1*p)+130);
                    }
                    else{
                        alert("Enter vaild input");
                        $("#height1").val('');
                        $("#width1").val('');
                    }
                }
            }else{
                alert("Enter height & Width");
                $("#height").val('');
                $("#width").val('');
            }
        }
    });
    $("#custom-reset").click(function(){
        p=$(".sq_ft_price").val();

        $(".h1").attr({placeholder: "Height"});
        $(".w1").attr({placeholder: "Width"});
        $("#description").text("1 SQ.Feet = Rs."+p+".00");

        $(".door").css({height: "100%",width: "100%"});
        $(".door_items").text("Door");
        $(".door_size").text("8.3*8.3 ft = 68.89 Sq.ft");
        $(".door_quantity").text("1");
        $(".door_price").text(p);
        $(".door_total").text("Rs."+(68.89*p)+".00");

        $(".handle_items").text("Handle");
        $(".handle_size").text("-");
        $(".handle_quantity").text("1");
        $(".handle_total").text("Rs."+1*130+".00");
        $(".Total").text((68.89*p)+130);
        $("#width1").val('');
        $("#height1").val('');
    });

    $("#estimate").click(function(){
        if($(".custom_sq_ft_price").val()==0){
            p=$(".sq_ft_price").val();
        }else{
            p=$(".custom_sq_ft_price").val();
        }
        if(parameter_option==1){
            $("#description").text("1 SQ.Feet = Rs."+p+".00");
            $(".door_items").text("Door");
            $(".door_size").text(w+"*"+h+" ft = "+(w*h)+" Sq.ft");
            $(".door_quantity").text("1");
            $(".door_price").text(p);
            $(".door_total").text("Rs."+w*h*p+".00");
    
            $(".handle_items").text("Handle");
            $(".handle_size").text("-");
            $(".handle_quantity").text("1");
            $(".handle_total").text("Rs."+1*130+".00");
            $(".Total").text((w*h*p)+130);
        }else{
            $(".door_items").text("Door");
            $(".door_size").text((w/12).toFixed(2)+"*"+(h/12).toFixed(2)+" ft = "+((w/12)*(h/12)).toFixed(2)+" Sq.ft");
            $(".door_quantity").text("1");
            $(".door_price").text(p);
            $(".door_total").text("Rs."+((w/12)*(h/12)*p).toFixed(2)+".00");

            $(".handle_items").text("Handle");
            $(".handle_size").text("-");
            $(".handle_quantity").text("1");
            $(".handle_total").text("Rs."+1*130+".00");
            $(".Total").text((((w/12)*(h/12)*p)+130).toFixed(2));
        }
        $(".body-content").hide();
        $(".pop-up-estimate").show(); 
        $(".heading").hide();
    });

    $("#count-sumbit").click(function(){
        $(".custom-option").show();
        i=$(".opt-input").val();
        if(i<=10){
            if(duplicate_avoid==1
                
                ){
                for(let j=10;j>0;j--){
                    $("#dup1").remove();
                }
            }
            let w1=100/i;
            for(i;i>0;i--){
                $("#d1").after(a);
                $(".door").css({width: w1+"%",height: "100%"});
            }
            $("#d1").hide();
            $(".opt-input").val('');
            duplicate_avoid=0;
        }else{
            alert("Windows Size is Small");
        }
    });
    $(".opt-input").keypress(function(e){
        if(e.which==13){
            $(".custom-option").show();
            i=$(".opt-input").val();
            if(i<=10){
                if(duplicate_avoid==1){
                    for(let j=2;j>0;j--){
                        $("#dup1").remove();
                    }
                }
                let w1=100/i;
                for(i;i>0;i--){
                    $("#d1").after(a);
                    $(".door").css({width: w1+"%",height: "100%"});
                }
                $("#d1").hide();
                duplicate_avoid=0;
            }else{
                alert("Windows Size is Small");
            }
        }
    });
    $("#count-reset").click(function(){
        duplicate_avoid=0;
        let i=$(".opt-input").val();
        i+=i;
        $("#d1").hide();
        $("#dup1").remove();
        for(i;i>0;i--){
            $("#dup1").remove();
        }
        $(".opt-input").val('');
        $("#d1").css({width : "100%",height: "100%"});
        $("#add-button").empty();
        $(".h1").attr({placeholder: "Enter Height in (%)"});
        $(".w1").attr({placeholder: "Enter Width in (%)"});
        $("#height1").val('');
        $("#width1").val('');
        $(".custom-option").hide();
    });
});