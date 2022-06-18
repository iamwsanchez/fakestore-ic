import httpCommon from "./http-common";
class ProductService {
    getAll() {
        return httpCommon.get("/products");
    }
    get(id) {
        return httpCommon.get(`/products/${id}`);
    }
    getByCategory(category) {
        return httpCommon.get(`/products/category/${category}`);
    }
}
 export default new ProductService();