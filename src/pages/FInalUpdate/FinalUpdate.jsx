import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const FinalUpdate = () => {
    const { user, updatedUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const [name, setName] = useState(user?.displayName);
    const [photoURL, setPhotoURL] = useState(user?.photoURL);

    const handleUpdate = (e) => {
        e.preventDefault();


        updatedUserProfile({ displayName: name, photoURL})
            .then(() => {
                toast.success('Profile updated successfully!');
                navigate('/my-profile');
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className="w-10/12 mx-auto min-h-screen flex flex-col justify-center items-center">
            <h3 className="text-2xl font-semibold mb-6">Update Your Information</h3>
            <form onSubmit={handleUpdate} className="flex flex-col items-center space-y-4">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input input-bordered w-full"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        type="url"
                        name='photo'
                        value={photoURL}
                        onChange={(e) => setPhotoURL(e.target.value)}
                        className="input input-bordered w-full"
                        placeholder="Enter photo URL"
                        required />
                </div>
                <button
                    type="submit"
                    className="btn bg-emerald-900 text-white text-xl mt-4"   >
                    Update Information
                </button>
            </form>
        </div>
    );
};

export default FinalUpdate;
