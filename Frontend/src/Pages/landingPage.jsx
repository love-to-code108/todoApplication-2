import React from 'react'
import doItLogo from "../assets/Logo/doitLogo.svg"


export const LandingPage = () => {
    return (
        <div className='LandingPageMainWrapper'>




            {/* DOIT LOGO SMALL NAV */}
            <div className=' w-[100%]'>

                {/* do it logo */}
                <div>
                    <img className=' h-[3rem]' src={doItLogo} alt="" />
                </div>
            </div>










            {/* DOIT BIG LOGO */}
            <div className='w-[100%] LandingPage-DoitBigLogo'>

                <div className=' w-[45rem] flex flex-col'>

                    {/* doit big logo */}
                    <div >
                        <img className=' h-[15rem]' src={doItLogo} alt="" />
                    </div>



                    {/* one step at a time tag line*/}
                    <div className=' font-league text-5xl w-[100%] flex justify-end mt-5'>
                        <h1>ONE STEP AT A TIME</h1>
                    </div>


                </div>
            </div>








            {/* SIGN UP AND SIGN IN */}
            <div className=' w-[100%] flex justify-center items-center LandingPage-signUp-signIn-button'>

                {/* sign up and sign in */}
                <div className=' flex font-poppins text-3xl'>

                    {/* sign up  */}
                    <div className='signUp-button'>
                        <h1>Sign Up</h1>
                    </div>

                    {/* sign in */}
                    <div className='signIn-button'>
                        <h1>Sign In</h1>
                    </div>
                </div>
            </div>



        </div>
    )
}
