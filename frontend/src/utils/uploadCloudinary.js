const upload_preset = import.meta.env.VITE_UPLOAD_PRESET ?? "";
const cloud_name = import.meta.env.VITE_CLOUD_NAME ?? "";

if (!upload_preset || !cloud_name) {
  console.error("Missing Cloudinary configuration. Check your environment variables.");
}

const uploadCloudinary = async (file) => {
  const uploadData = new FormData();
  uploadData.append("file", file);
  uploadData.append("upload_preset", upload_preset);

  if (cloud_name) {
    uploadData.append("cloud_name", cloud_name);
  }

  try {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
      method: "POST",
      body: uploadData,
    });

    if (!res.ok) {
      throw new Error(`Cloudinary upload failed with status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw error;
  }
};

export default uploadCloudinary;
