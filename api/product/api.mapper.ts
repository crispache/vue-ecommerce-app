import type { ProductApi } from "./api.model";
import * as vm from "./api.vm";



export const mapProductListToVM = (data: ProductApi): vm.Product => ({
    id: data.id,
    title: data.title,
    description: data.description,
    photoUrl: data.thumbnail,
    price:  new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(data.price),
    rating: data.rating,
    brand: data.brand,
})


export const mapProductCollectionFromApiToVm = (productCollection: ProductApi[]): vm.Product[] =>
  productCollection.map((product) => mapProductListToVM(product));