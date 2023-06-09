import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading/Loading';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    // const imageHostKey = process.env.REACT_APP_imgbb_key
    const navigate = useNavigate()
    const {data: specialties, isLoading} = useQuery({
        queryKey: ['specialty'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = await res.json()
            return data;
        }
    })

    const handleAddDoctor = data => {
        // const image = data.image[0];
        // const formData = new FormData();
        // formData.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        const doctor = {
            name: data.name, 
            email: data.email,
            specialty: data.specialty,
            description: data.description,
            // image: imgData.data.url
        }
        // .then(res => res.json())
        // .then(imgData => {
        //     if(imgData.success){
        //         console.log(imgData.data.url);
               
                

                fetch('http://localhost:5000/doctorss', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`Dr. ${data.name} is added successfully`)
                    navigate('/dashboard/adddoctor')
                })

            // }
        // })

    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7'>
            <h2 className='text-2xl'>Add doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Specialty</span></label>
                    <select
                        {...register('specialty')}
                    className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Please select a specialty</option>
                        {
                            specialties.map(specialty => <option
                            key = {specialty._id }
                            value={specialty.name}
                            >{specialty.name}</option>)
                        }
                        
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Degrees</span></label>
                    <input type="text" {...register("description", {
                        required: "description is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
                </div>


                {/* <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div> */}

                <input className='btn btn-accent w-full mt-4' value="Add doctor" type="submit" />
                {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
            </form>
        </div>
    );
};

export default AddDoctor;