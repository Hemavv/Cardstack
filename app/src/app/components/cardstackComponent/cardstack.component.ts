/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, ViewChild, ViewChildren, QueryList,OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
import { NDataModelService } from 'neutrinos-seed-services';
import { stackserviceService } from '../../services/stackservice/stackservice.service';
import { StackConfig,Direction,SwingStackComponent,SwingCardComponent} from 'angular2-swing';

/**
* Model import Example :
* import { HERO } from '../models/hero.model';
*/

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-cardstack',
    templateUrl: './cardstack.template.html',
    styles: [`
   .headerrow{
       background: linear-gradient(262deg, #ff7854, #fd267d);
     z-index:3;
   }
   .cardrow{
       position:relative;
       border-radius: 5%;
   }
    .img {
        height:275px;
        width:280px;
    border-radius: 5px;
    
    }
    .imgxs{
        height:276px;
        width:255px;
    }
    .card1{
        width:300px;
        height:300px;  
        background: #C7433E;
        border: 5px solid #ED5D52; 
        position: relative;
        border-radius:2%; 
        padding:10px; 
       
    }
    .cardxs{
        width: 275px;
        margin-top: 10%;
    }
    .column{
         z-index:1;
        position:absolute;
        width:300px;
        height:300px; 
        top:2%;
        background-color:white;
        line-height: 100px;  
        text-align: center;  
        border-radius: 5px;   
             
    }
    .matTooltip {
  font-size: 50px;
  background-color:white;
}
    .header{
        position:absolute;
        margin:5px 5px 5px 15px;
        right:55%;
        top:0px;
        color:white;
        font-size:25px;
        font-family: Arial, Helvetica, sans-serif;
         text-shadow: 1px 1px 1px #000, 
               3px 3px 5px white;
               text-overflow: ellipsis; 
          overflow: hidden; 
          width:30%;
    }
    .fab1{
        font-weight: bold;
        position:absolute;
        background-color:white;
    }
   .fab2{
       z-index:1;
   }
   .fab3{
       z-index:0;
   }
.footer{
    width:100%;
    position:fixed;
    bottom:0;
    background:linear-gradient(262deg, #fd267d, #ff7854);
    z-index:3;
}
   
    `]
})

export class cardstackComponent implements OnInit  {
    dm: ModelMethods;
    stack:any;
    stackConfig: StackConfig={
        allowedDirections: [Direction.UP, Direction.DOWN, Direction.LEFT, Direction.RIGHT]  
    };
    @ViewChild(SwingStackComponent) swingStack: SwingStackComponent;
    @ViewChildren(SwingCardComponent) swingCards: QueryList<SwingCardComponent>;

    constructor(private bdms: NDataModelService, public stackservice: stackserviceService) {
        this.dm = new ModelMethods(bdms);
               this.stack= this.stackservice.getcards();
    }
    //  fabflag=false;
    ngOnInit(){
        //   this.swingStack.dragstart.subscribe((event: DragEvent) =>{ 
        //  this.fabflag=true;
        //   });
    }
    // fab(){
    // return this.fabflag;
    // }
//   removecard(event){
//       this.fabflag=false;
//       this. stackservice.removecard(event);
//   }

    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.dm.get(dataModelName, this, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here

            },
            error => {
                // Handle errors here
            });
    }

    getById(dataModelName, dataModelId) {
        this.dm.getById(dataModelName, dataModelId,
            result => {
                // On Success code here

            },
            error => {
                // Handle errors here
            })
    }

    put(dataModelName, dataModelObject) {
        this.dm.put(dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    validatePut(formObj, dataModelName, dataModelObject) {
        this.dm.validatePut(formObj, dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    update(dataModelName, update, filter, options) {
        const updateObject = {
            update: update,
            filter: filter,
            options: options
        };
        this.dm.update(dataModelName, updateObject,
            result => {
                //  On Success code here
            }, error => {
                // Handle errors here
            })
    }

    delete(dataModelName, filter) {
        this.dm.delete(dataModelName, filter,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    deleteById(dataModelName, dataModelId) {
        this.dm.deleteById(dataModelName, dataModelId,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    updateById(dataModelName, dataModelId, dataModelObj) {
        this.dm.updateById(dataModelName, dataModelId, dataModelObj,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }


}
