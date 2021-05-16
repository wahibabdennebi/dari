import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FornitureService } from '../forniture/forniture.service';
import { order } from '../order-module/order-module.module';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
declare var $: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
test:order
price:number
modalRef: BsModalRef;

  constructor(private service :FornitureService,private modalService: BsModalService) { }

  ngOnInit(): void {
  this.test= this.service.returnData();
  this.price=this.test.furniture.price;
  

  $(function(){
  
    var cards = [{
      nome: "mastercard",
      colore: "#0061A8",
      src: "https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
    }, {
      nome: "visa",
      colore: "#E2CB38",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2000px-Visa_Inc._logo.svg.png"
    }, {
      nome: "dinersclub",
      colore: "#888",
      src: "http://www.worldsultimatetravels.com/wp-content/uploads/2016/07/Diners-Club-Logo-1920x512.png"
    }, {
      nome: "americanExpress",
      colore: "#108168",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/American_Express_logo.svg/600px-American_Express_logo.svg.png"
    }, {
      nome: "discover",
      colore: "#86B8CF",
      src: "https://lendedu.com/wp-content/uploads/2016/03/discover-it-for-students-credit-card.jpg"
    }, {
      nome: "dankort",
      colore: "#0061A8",
      src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Dankort_logo.png"
    }];
    
    var month = 0;
    var html = document.getElementsByTagName('html')[0];
    var number = "";
    
    var selected_card = -1;
    
    $(document).click(function(e){
      if(!$(e.target).is(".ccv") || !$(e.target).closest(".ccv").length){
        $(".card").css("transform", "rotatey(0deg)");
        $(".seccode").css("color", "var(--text-color)");
      }
      if(!$(e.target).is(".expire") || !$(e.target).closest(".expire").length){
        $(".date_value").css("color", "var(--text-color)");
      }
      if(!$(e.target).is(".number") || !$(e.target).closest(".number").length){
        $(".card_number").css("color", "var(--text-color)");
      }
      if(!$(e.target).is(".inputname") || !$(e.target).closest(".inputname").length){
        $(".fullname").css("color", "var(--text-color)");
      }
    });
    
    
    //Card number input
    $(".number").keyup(function(event){
      $(".card_number").text($(this).val());
      number = $(this).val();
      
      if(parseInt(number.substring(0, 2)) > 50 && parseInt(number.substring(0, 2)) < 56){
        selected_card = 0;
      }else if(parseInt(number.substring(0, 1)) == 4){
        selected_card = 1;  
      }else if(parseInt(number.substring(0, 2)) == 36 || parseInt(number.substring(0, 2)) == 38 || parseInt(number.substring(0, 2)) == 39){
        selected_card = 2;     
      }else if(parseInt(number.substring(0, 2)) == 34 || parseInt(number.substring(0, 2)) == 37){
        selected_card = 3; 
      }else if(parseInt(number.substring(0, 2)) == 65){
        selected_card = 4; 
      }else if(parseInt(number.substring(0, 4)) == 5019){
        selected_card = 5; 
      }else{
        selected_card = -1; 
      }
      
      if(selected_card != -1){
        html.setAttribute("style", "--card-color: " + cards[selected_card].colore);  
        $(".bankid").attr("src", cards[selected_card].src).show();
      }else{
        html.setAttribute("style", "--card-color: #cecece");
        $(".bankid").attr("src", "").hide();
      }
      
      if($(".card_number").text().length === 0){
        $(".card_number").html("&#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF;");
      }
  
    }).focus(function(){
      $(".card_number").css("color", "white");
    }).on("keydown input", function(){
      
      $(".card_number").text($(this).val());
      
      if(Event.length >= 0 && Event.length <= 9){
        if($(this).val().length === 4 || $(this).val().length === 9 || $(this).val().length === 14){
          $(this).val($(this).val() +  " ");
        }
      }
    })
    
    //Name Input
    $(".inputname").keyup(function(){  
      $(".fullname").text($(this).val());  
      if($(".inputname").val().length === 0){
          $(".fullname").text("FULL NAME");
      }
     // return Event.charCode;
    }).focus(function(){
      $(".fullname").css("color", "white");
    });
    
    //Security code Input
    $(".ccv").focus(function(){
      $(".card").css("transform", "rotatey(180deg)");
      $(".seccode").css("color", "white");
    }).keyup(function(){
      $(".seccode").text($(this).val());
      if($(this).val().length === 0){
        $(".seccode").html("&#x25CF;&#x25CF;&#x25CF;");
      }
    }).focusout(function() {
        $(".card").css("transform", "rotatey(0deg)");
        $(".seccode").css("color", "var(--text-color)");
    });
      
    
    //Date expire input
    $(".expire").keypress(function(event){
      //allow enter key,numbers.
      if(event.charCode >= 48 && event.charCode <= 57){
        //check to make sure the field has more than 1
        if($(this).val().length === 1){
            $(this).val($(this).val() + event.key + " / ");
        }else if($(this).val().length === 0){
          if(event.key == 1 || event.key == 0){
            month = event.key;
            return event.charCode;
          }else{
            $(this).val(0 + event.key + " / ");
          }
        }else if($(this).val().length > 2 && $(this).val().length < 9){
          return event.charCode;
        }
      }
      return false;
      //The key is released
    }).keyup(function(event){
      $(".date_value").html($(this).val());
      if( $(".expire").val().length == 4){
        $(this).val(month);
      }
      
      if($(this).val().length === 0){
        $(".date_value").text("MM / YYYY");
      }
      //The key is on its way down
    }).keydown(function(){
      $(".date_value").html($(this).val());
      //used to give focus to an element 
    }).focus(function(){
      $(".date_value").css("color", "white");
    });
  });
  
  
  }
  
public addCarteStripe(addcarte:NgForm):void{
  console.log(addcarte.value)
 // this.service.addCarteToStripe(addcarte.value).subscribe(
   // (resoonse:any)=>{
     // console.log(resoonse)
   
    //console.log("okay");
    //}
  //);
 
}

      public confirmOrder()
      {
        console.log(this.test)
        this.service.confirmerToStripe(this.test).subscribe
        (
        )
      }
      updateModal(templateupdate: TemplateRef<any>){
        this.modalRef = this.modalService.show(templateupdate);
        this.modalRef.hide()
        
      }
}
