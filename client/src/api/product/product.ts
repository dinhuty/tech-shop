import { IParams, IProduct, IProductsListResponse } from "@/types/product.types";
import { $axios } from "@plugins/axios/axios";

export const fetchProduct = (params: IParams) => {
    return $axios.get<unknown, IProductsListResponse>('/product/get-all', {
        params
    })
}

export const fetchProductDetails = (slug: string) => {
    return $axios.get<unknown, IProduct>(`/product/${slug}`)
}

export const fetchProductOfCategory = (categoryName: string, params?: IParams) => {
    return $axios.get<unknown, IProductsListResponse>(
        `/product/get-all/${categoryName}`,
        {
            params,
        }
    );
};