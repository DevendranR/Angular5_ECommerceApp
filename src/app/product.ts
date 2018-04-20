export class Product {

  constructor(
    public sno: number,
    public pid: string,
    public pname: string,
    public pdescription: string,
    public ptype: string,
	public price: number,
	public pdiameter: string,
	public img: any,
	public quantity:number,
	public isClicked:boolean
  ) {  }

}