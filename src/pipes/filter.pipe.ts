import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
    name:'filter'
})

export class FilterPipe implements PipeTransform{
    transform(value:string[], ...args):any {
       var filter =  value.filter(e=>
         {
             return e == args.find(x=>x==e);
         })


return filter;
    };

}