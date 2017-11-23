import { Hash } from './table';
import { Component , trigger , state , style , transition , animate } from '@angular/core';


@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent{
    table = [
       
        new Hash(13, '27ac8006c683714109fb606e30f3ee3c3b0cf64b9ef989874a85cbafbad9ed91' , '36738' , 'geNir' ),
        new Hash(13, '436af8c47eaebc1ec0947d60380b46a813fd2a4e930354b7ede71d57e13b6608' , '646165C' , 'naskjcnk' ),
        new Hash(15, '4b9d687ac625690fd026ed4b236dad1cac90ef69e7ad256cc42766a065b50026' , '5646544' , 'JBXLKxnlkxA' ),
        new Hash(9 , '7b1550711f46b3b66402d6846eb410c32dbccbcfd4bc1051a64bb5f4b985ee99z', '465465', '5466514654')
      ];

      ;  
        
    }


