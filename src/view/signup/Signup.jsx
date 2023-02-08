import { useForm } from "react-hook-form"
import './Signup.css'

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <section className="form-wrapper">
                <form onSubmit={handleSubmit(onSubmit)} className="form-container">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="enter your name" {...register('name', { required: true, maxLength: 10 })} />
                    {errors.name && errors.name.type === "required" && <span>This is required</span>}
                    {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>}

                    <input type="email" placeholder="enter your email" {...register('email', { required: true, maxLength: 12 })} />
                    {errors.email && errors.email.type === "maxLength" && <span>Ples Enter 12 Letter</span>}

                    <input type="password" placeholder="enter your password" {...register("password", { required: true, maxLength: 12 })} />
                    {errors.password && errors.password.type === "maxLength" && <p>Please Enter 10 </p>}
                    <button type="submit" className="bttn">Submit</button>
                </form>
            </section>
        </>
    )
}

export default Signup