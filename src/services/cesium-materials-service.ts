export class CesiumMaterialsService {
  private baseUrl = `https://60f4e0fd2208920017f39e43.mockapi.io/api/v1/cesium-materials`;

  async getMaterials() {
    try {
      const data = await fetch(this.baseUrl);
      const materialData = await data.json();
      return {
        isValid: true,
        data: materialData[0].materials,
      };
    } catch (error) {
      return {
        isValid: false,
        data: null,
      };
    }
  }
}
