

export const SignUpPage = () => {

    return (
        <div className=" SignUpPage-main">

            {/* the sign up block */}
            <div className=" flex flex-col justify-center items-center">


                <div className="w-[100%]">
                    {/* signup block heading */}
                    <div>
                        <h1 className=" text-5xl font-poppins mb-10">Sign Up</h1>
                    </div>


                    <div className=" font-poppins flex">

                        <div className=" flex flex-col w-[50%]">
                            {/* name */}
                            <div className=" mb-6 ml-4">

                                <p className=" text-xl">Name</p>
                                <input className="SignUpPage-input" type="text" />
                            </div>
                            {/* date of birth */}
                            <div className=" mb-6 ml-4">
                                <p className=" text-xl">Date of birth</p>
                                <input placeholder="" className=" SignUpPage-input w-[20.4rem]" type="date" />
                            </div>

                            {/* email */}
                            <div className=" mb-6 ml-4">
                                <p className=" text-xl">Email</p>
                                <input className=" SignUpPage-input" type="email" />
                            </div>
                        </div>



                        <div className=" flex flex-col w-[50%]">
                            {/* Username */}
                            <div className=" mb-6 flex flex-col  ml-4">

                                <p className=" text-xl">Username</p>
                                <input className="SignUpPage-input" type="text" />
                            </div>
                            {/* Password */}
                            <div className=" mb-6 ml-4">
                                <p className=" text-xl">Password</p>
                                <input placeholder="Password" className=" SignUpPage-input w-[20.4rem]" type="password" />
                            </div>

                            {/* Confirm Password */}
                            <div className=" mb-6 ml-4">
                                <p className=" text-xl">Confirm Password</p>
                                <input placeholder="Confirm Password" className=" SignUpPage-input" type="password" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {/* the doit logo */}

        </div>
    )
}
