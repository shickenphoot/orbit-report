import { stringify } from 'querystring';

export class Satellite {
    name: string;
orbitType: string;
type: string;
operational: boolean;
launchDate: string;
shouldShowWarning: boolean;

constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
this.name=name;
this.type=type;
this.launchDate=launchDate;
this.operational=operational;
this.orbitType=orbitType;
if(type=="Space Debris"){
    this.shouldShowWarning=true;
}else{
    this.shouldShowWarning=false
}

}
}
