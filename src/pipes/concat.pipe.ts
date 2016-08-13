import {PipeTransform, Pipe} from "@angular/core";


@Pipe({
    name:'concat'
})

export class ConcatPipe implements PipeTransform{

    transform(value: any, joined:any): any {
        if(undefined === joined) return value;

        if(Array.isArray(value)){
            return typeof joined === 'object'
            ?value.concat(Array.from(joined))
                :value.concat(joined);
        }

        if(value.length>0){
            let array=value.split(' ');
            return typeof joined === 'object'
            ?array.concat(joined.split(' '))
                :array.concat(joined);
        }
    }
}
