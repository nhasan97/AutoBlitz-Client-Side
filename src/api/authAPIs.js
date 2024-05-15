import axiosSecure from "./axiosSecure";

export const saveUserData = async (user) => {
  console.log(user);
  const currentUser = {
    name: user.displayName,
    email: user.email,
    role: "customer",
    image: user.photoURL,
  };

  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);

  return data;
};
