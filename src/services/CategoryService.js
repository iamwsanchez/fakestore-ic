import httpCommon from "./http-common";
class CategoryService {
    getAll() {
        return httpCommon.get("/products/categories");
    }
}
 export default new CategoryService();