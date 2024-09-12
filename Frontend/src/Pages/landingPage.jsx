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
                <div>
                    <h1></h1>
                </div>


            </div>
        </div>








        {/* SIGN UP AND SIGN IN */}
        <div>

            {/* sign up and sign in */}
            <div>

                {/* sign up  */}
                <div>

                </div>

                {/* sign in */}
                <div>

                </div>
            </div>
        </div>



    </div>
  )
}
