import {PipeTransform,Pipe} from '@angular/core'
import {IMember} from './member'

@Pipe(
    {
        name:'memberFilter'
    })

export class MemberFilterPipe implements PipeTransform{
    transform(value:IMember [], filterBy:string ):IMember[]{
        filterBy=filterBy?filterBy.toLocaleLowerCase():null;
        return filterBy?value.filter(
                (member:IMember)=>member.firstName.toLocaleLowerCase().lastIndexOf(filterBy)!=-1):value;
    }
}