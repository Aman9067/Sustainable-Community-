import React from 'react'
import { Link } from 'react-router-dom';

const Home_page = () => {

    return (
        <div className=' md:overflow-hidden' >


            <div id="First" className="h-[700px] w-[450px] md:w-[100%] md:h-[850px] relative -mt-12 md:-mt-0 md:bg-cover bg-center bg-no-repeat "
                style={{ backgroundImage: "url('/Assets/BG-home.jpg')" }}>

                <marquee className="md:mt-32 mt-44 md:text-2xl md:h-[80px] md:w-[1000px] ml-10 md:ml-60  text-white" style={{textShadow: "3px 3px 5px blue"}}><i><b>
                    BE A PART OF SOLLUTION NOT POLLUTION... </b> </i>
                </marquee>


            <Link to="/Membership">
             <div className='  ml-72  h-12 w-32  text-center md:ml-[1150px] md:mt-[420px] mt-60 bg-gradient-to-l from-orange-400 via-red-500 to-purple-600 hover:scale-105 focus:bg-zinc-500 '>
             <button className='md:text-3xl mt-2 text-white'>Join us </button>
             </div>
             </Link>

            </div>


            <div className='h-[650px] w-[450px] md:w-[100%] md:h-[60vh] bg-gray-100  border-4  md:-mt-12  -mt-40'>

                <div className='md:flex justify-center mt-16 md:mt-32  ml-2 md:space-x-8   text-center   '>

                    <div className=" h-64 w-[420px] md:h-[96] md:w-[450px] hover:  bg-gray-200 border-2 ">
                        <p className='text-xl md:text-2xl mt-12 md:mt-0 font-bold hover:text-blue-900 '>
                            We are a movement of people concerned about living through climate breakdown
                        </p>
                        <h1 className='text-lg md:text-xl mt-6 '>
                            We are coming together to build self-sufficient communities amidst urgent global challenges

                        </h1>
                    </div>

                    <div className=' h-64 w-[420px] md:h-[96] md:w-[450px] justify-center  bg-gray-200 border-2 '>
                        <h1 className='text-lg md:text-xl text-center  '>Amid our changing climate, absolute safety cannot be guaranteed. Nevertheless, ClimateSafe Villages is equipping individuals and families with real resilience tools, fostering a sustainable living environment that can be scaled up to communities throughout the world. As we navigate the trials of the climate change crisis, this initiative is our collective effort towards a safer, fairer, cohesive and more sustainable future.

                        </h1>
                    </div>
                </div>

            </div>



            <div className='h-[600px] w-[450px] md:h-[80vh]  md:w-[100%] border-2 '>

                <div className='  md:flex md:ml-40 mt-10 md:mt-24 space-x-8 '>
                    <div className='  '>
                        <img className=' md:h-96 md:w-[600px] h-60 w-96 ml-8 ' src="https://sushantuniversity.edu.in/blog/wp-content/uploads/2022/07/challenges001-1024x572.jpg"></img>

                    </div>

                    <div className=' h-72 w-96 md:h-96  bg-gray-100 md:w-96 border-2 '>
                        <p className='text-lg text-center mt-8  md:text-2xl font-bold'>Some of these challenges include: climate change, energy consumption, waste production, threats to public health, poverty, social exclusion, management of natural resources, loss of biodiversity, and land use. In this context, sustainable development approaches are now essential obligations.</p>

                    </div>

                </div>
            </div>



            <div className='h-[700px] md:h-[700px] w-[450px] md:flex md:w-[100%] '>

                <div > <img className='h-48 mt-8 ml-14 md:w-[450px] md:ml-10 md:mt-32 md:h-96 w-80 hover:scale-105 shadow-lg shadow-gray-500 ' src="https://arka360.com/ros/content/images/2023/05/pasted-image-0--11---1--compressed.jpg"></img></div>
                <div > <img className='h-48 mt-8 ml-14 md:w-[450px] md:ml-10 md:mt-32 md:h-96 w-80 hover:scale-105 shadow-lg shadow-gray-500 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPCko5fLXXSczVAJJja37dX2Y-QUNVNdcbBA&s"></img></div>
                <div > <img className='h-48 mt-8 ml-14 md:w-[450px] md:ml-10 md:mt-32 md:h-96 w-80 hover:scale-105 shadow-lg shadow-gray-500 border-2' src="https://www.fastercapital.com/i/Community-building--Sustainable-Living--Sustainable-Living--The-Eco-Friendly-Approach-to-Community-Building--Cultivating-Green-Thumbs-and-Relationships.webp"></img></div>

            </div>



            <div className=' md:h-[700px] md:w-[100%] h-[100vh] w-[450px] bg-center'
                style={{ backgroundImage: "url('https://www.plasticcollective.co/wp-content/uploads/light-bulb-6798760_1280.jpg')" }}>

            </div>



            <div className='h-96 w-[450px]  bg-gray-300  md:h-[650px] md:w-[100%]  '>

                <p className=' ml-10 md:ml-96  text-xl md:text-4xl '>𝘾𝙝𝙖𝙡𝙡𝙚𝙣𝙜𝙚𝙨 𝙤𝙛 𝙎𝙪𝙨𝙩𝙖𝙞𝙣𝙖𝙗𝙡𝙚 𝘾𝙤𝙢𝙢𝙪𝙣𝙞𝙩𝙮 </p>

                <div className='md:flex  mt-8 md:ml-8 md:mt-28  '>
                    <div className='h-72 ml-20 w-72 md:ml-40 hover:scale-105 md:h-[450px] md:w-[800px] '>
                        <img className='md:h-[450px] border-4  md:w-[700px]' src="https://images.squarespace-cdn.com/content/v1/65b174615ca6b200ca450bc4/bc856c04-ec6b-4543-93b7-06ba816c4261/horizon.png?format=1500w"></img>
                    </div>
                    <div className='h-[96] text-center  bg-gray-100 w-[96] md:h-[450px] md:w-[400px] border-4 '>
                        <p className='md:mt-14 md:text-xl '>Some Challenges are :<br />Climate change, energy consumption, waste production, threats to public health, poverty, social exclusion, management of natural resources, loss of biodiversity, and land use. In this context, sustainable development approaches are now essential obligations.</p>
                    </div>
                </div>

            </div>




            <div className='h-[660px] w-[450px]  md:h-[1200px] md:w-[100%] border-4 mt-28 bg-orange-100 '>

                <p className='mt-20 ml-20 text-3xl md:text-8xl font-extrabold md:ml-80 '>#OUR MISSION: *SUPPORT,<br /> *EDUCATION,<br /> *EMPOWERMENT</p>
                <h1 className='text-xl text-center md:text-2xl  hover:text-red-600 mt-10 '>/Support - Offering help and encouragement to those in need.</h1>
                <h2 className='text-xl text-center md:text-2xl  hover:text-red-600 '>/Education - Providing knowledge and skills to foster growth and understanding.</h2>
                <h3 className='text-xl text-center md:text-2xl  hover:text-red-600 '>/Empowerment - Enabling individuals to take control of their lives and reach their full potential.</h3>

                <img className='h-62 w-96 mt-6 ml-8 md:h-80 md:w-[900px] md:ml-80 hover:bg-gray-800 md:mt-32' src="https://images.squarespace-cdn.com/content/v1/65b174615ca6b200ca450bc4/0e8d0a04-95fa-4602-9fcd-cc06de3cbf50/missionicons.png?format=1500w"></img>
            </div>




            <div className='h-[350px] w-[450px] border-2 bg-black text-white md:h-[500px] md:w-[100%]  '>

                <div className=' w-[430px] flex mt-20 ml-2 md:h-[500px] md:w-[100%] md:ml-44 space-x-2'>
                    <div className='md:h-96 md:w-96 h-40 w-56  '>
                        <p className='md:text-2xl font-bold md:mt-20 md:ml-4 mt-4  hover:text-blue-700'>Sustainable Community</p>
                        <div className='flex md:mt-10 md:ml-8 mt-4'>
                            <img className='md:h-10 h-8 md:ml-6 rounded-full w-10' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROj2I_3A0Kt6DBAJJkxedAa4pyx6Sv33yjyQ&s'></img>
                            <img className='md:h-10 h-8 md:ml-6 rounded-full w-10' src='data:image/png;base64,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'></img>
                            <img className='md:h-10 h-8 md:ml-6 rounded-full w-10' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEU7V53///8yUZojR5bi5u+GlL45VZxCXqHd4e01U5tvgLMnSZbO1ORZb6rr7vU3VJwtTZi5wdmSn8SvudT19vrx8/instB/j7weRJR1hraMmsJidq2+xtzX3OrK0OKgrMxbcatPZ6Zleq8ANY9428BgAAAD/ElEQVR4nO3d23KbMBSFYSGwMAgEBp/jHJy+/zsW7LrtRYbIEGlvadZ/05uU8A02iiXAIvlT1ZW5iKW87KoHTNz/6XMtlaLesR9LKanz/j+hqXU8ukdK1+YhzBpJvTtOkk12F5qmod4XRzWNuQnrgnpPnFXUo7DX1PvhMN0Pwjy+k8y/VJ6IKuZDOBzESnRxnkcfyU6UMb9Ih5dpKaJ+G45vROo9QAghhBBCCCGEEEKIvEK2Ok3139JbWrdDUhYq6PVOJbUWL6v9pVqb3fbWbmeybP1avV02/Xu3Or1c8/GHgky1ab66ZMm3bc1rgLOhw9H72Fvo/hTcfLZq225tzQtQ2Ir+GV5wwlbun/SFJVTpYfc0MCShFG/P+0IS6s/tHGA4Qt3N8gUjVMdnT6GBCZW+zAUGIkw3s4FhCPXzo2BYwna1ABiCcLzyLGqhak3kQj17nAhEWLwsA/IXHp/6MBigUB4WArkLVWs/XRGmcPkh5C5Ml74LuQuLj8VA5kK94C/uIIRKzvtYH46wOC0H8hb+xIuUuXDG5GFQwub6A0DWQnl+irI16+qLOK89tfZvw93mcC30l1ErptK2f9CsTzrI+1tVYTkantNAb1tSVzvgZ0u9p3OTpRWwDBZoeSrdpNT7Ob/Wah445BuUrQaLDevR4Ju0zYJoGfI92Lr6HrgN+UVqNYOxDvlFKlKLabZL9MJ9uIOhsBOGfZu5jfAcvXAFIesghJB/EELIPwgh5B+EEPIPQgj5ByGE/ItDqCY6WgmntsDhTud8IptLS8+TWxij9RV2q7xLymin/T0I36IX9rQLGx6ExAsbHoSn6IU17SKxByGpz4fQEK+guhdSr/O7FxIPhx6E1Ov87oXUq+DuhdSXTLkXXok/PrkXtrELDfUlU86Fr9ELL9QXhTkXvkcvJJ+Kcy58ob6C2LmQ/K4u18It9XDoXJiR34vhWkj/RVWuhRvqwcK5kP4aadfCE/Vg4VxYU59KnQupfc6FO/Lh0LWQeirRvZB6KnFIfWbriSxudDYT/z17Jx8shoP49S30935ZrHIfjhMbYACcLo5rMaaCEEL+QQgh/yCEkH8QQsg/CCHkH4QQ8g9CCPkHIYT8gxBC/kEIIf8ghJB/EELIPwgh5B+EEPIPQgj5ByGE/IMQQv5BCCH/IISQfxBCyD8IIeQfhBDyD0II+QchhPzzKCR66pkvocpFGbmwFEQPlPIllJ0geuyZL6GuBNHjBz0JVZ6IpCc5iJ6Euh+ESU3x4DM/wqJORqFpCL5EwYuwacxNmGSF//OpD6Esxl8yChNTa9+nG/dCpWuTPIRJ0udaekW6FSoldd7ftyIem6u60ucXRLkV5mVXPbbyG8lbTVu7+lVZAAAAAElFTkSuQmCC'></img>
                        </div>
                    </div>
                    <div className='md:h-96 md:w-96 h-40 w-56 '>
                        <input className='h-7 w-24 mt-10 ml-4 shadow-inner hover:bg-pink-100 md:h-8 md:w-40 md:mt-36 md:ml-20 md:text-sm text-black  shadow-blue-600' type="text" placeholder='Search.....' ></input>

                    </div>
                    <div className='md:h-96 md:w-96 h-40 w-56 text-sm    '>
                        <div className='flex mt-5 md:ml-4 md:mt-24'>
                            <h1 className=' hover:text-yellow-300 '>Contact us</h1>
                            <h2 className=' hover:text-yellow-300 ml-2 md:ml-12'>Terms of uses</h2>
                        </div>
                        <div className='flex mt-5  md:ml-4 md:mt-10'>
                            <h3 className=' hover:text-yellow-300 ' >Community Duties</h3>
                            <h4 className=' hover:text-yellow-300 ml-2 md:ml-6' >Privacy Policy</h4>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};


export default Home_page