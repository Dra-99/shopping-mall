import api from "./request"

export const getCategoryList = () => api.get("/product/getBaseCategoryList").then(res => res.data)
export const getBanners = () => api.get('/mock/banner').then(res => {
    if (res.code === 200) {
        return res.data
    }
})
export const getFloorData = () => api.get('/mock/floor').then(res => {
    if (res.code === 200) {
        return res.data
    }
})
// 获取商品数据
export const queryProductList = (params = {}) => api.post('/list', params).then(res => {
    if (res.code === 200) {
        return res.data
    }
})