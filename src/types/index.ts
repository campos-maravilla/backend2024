import { boolean, number, object, string,Output, array } from "valibot";
//Output =>toma un esquema y lo convierte a un type
export const DraftProductSchema=object({
    name:string(),
    price:number()
})

export const ProductSchema=object({
    id:number(),
    name:string(),
    price:number(),
    availability:boolean()
})

export const ProductsSchema=array(ProductSchema)
export type Product=Output<typeof ProductSchema>