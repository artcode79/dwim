import axios from "axios";

const url = "http://localhost:5000/api/barang/";

class PostService {
  //get data
  static async getPost() {
    const res = await axios.get(url);
    try {
      const data = res.data;

      return data.map((post) => ({
        ...post,
        createdAt: new Date(post.createdAt),
      }));
    } catch (err) {
      return err;
    }
  }

  //show data
  

  //add data
  static insertPost() {
    return axios.post(url, {
      barang,
      harga,
      stock,
      foto,
    });
  }

  //update data
  static updatePost(id) {
    return axios.put(`${url}${id}`, {
      barang,
      harga,
      stock,
      foto,
    });
  }

  //hapus data
  static deletePost(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default PostService;
