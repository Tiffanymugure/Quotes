export class Quotes {
  PublicShowDescription:boolean
  constructor (public id:number,
               public name:string,
               public author:string,
               public user:string,
               public upvotes:number,
             ){
               this.ShowDescription=false
             }
}
