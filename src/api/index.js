import api from "./request"

export const getCategoryList = () => api.get("/product/getBaseCategoryList").then(res => res.data)