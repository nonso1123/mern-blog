import axios from "axios";
const URL = import.meta.env.VITE_BASE_URL;

export async function getPosts() {
	const response = await axios.get(`${URL}/posts`);
	if (response.status === 200) {
		return response.data;
	} else {
		return;
	}
}
export const getPost = async (id) => {
	const response = await axios.get(`${URL}/posts/${id}`);
	const post = response.data;
	const data = await getImage(post.imageId);
	post.image = data;
	return post;
};
export const createPost = async (post) => {
	const data = await createImage(post.file);
	const imageId = post.file.name;
	post.imageId = imageId;
	const response = await axios.post(`${URL}/posts`, post);
	return response;
};
export async function updatePost(id, post) {
	const response = await axios.post(`${URL}/posts/${id}`, post);
	return response;
}
export async function deletePost(id) {
	const response = await axios.delete(`${URL}/posts/${id}`);
	return response;
}

export const getUser = async (id) => {
	const response = await axios.get(`${URL}/users/${id}`);
	if (response.status === 200) {
		return response.data;
	} else {
		return;
	}
};
export const createUser = async (user) => {
	const response = await axios.post(`${URL}/users`, user);
	return response;
};
export async function updateUser(id, user) {
	const response = await axios.post(`${URL}/users/${id}`, user);
	return response;
}
export const verifyUser = async (user) => {
	const response = await axios.post(`${URL}/users/login`, user);
	if (response.data.success === true) {
		return response.data.token;
	} else {
		return;
	}
};

export const createImage = async (file) => {
	const formData = new FormData();
	formData.append("image", file);
	const response = await axios.post(`${URL}/images`, formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
	return response;
};

export const getImage = async (id) => {
	const response = await axios.get(`${URL}/images/${id}`);
	return response;
};
