import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
      <div><img className='md:h-[30rem] md:w-full' src='https://images.squarespace-cdn.com/content/v1/65b174615ca6b200ca450bc4/9e001bc9-1125-489b-9837-7fc12ac50d9b/image-asset.jpg?format=2500w'></img>
      <p className='font-semibold font-sans md:text-6xl text-3xl text-white md:-mt-40 -mt-24 md:ml-32 ml-5'
      style={{ textShadow:"2px 2px 3px blue"}}>About A.R Sustainable Community</p>
    <section className="p-8 mt-20 bg-white">
      
      <div className="flex flex-col lg:flex-row items-center mb-16">
        <div className="lg:w-1/2 md:ml-40 ml-5">
          <h2 className="md:text-4xl text-2xl font-bold mb-4">Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-4 md:w-96 w-80 font-sans">
            The Mission of A.R Sustainable Community is to form climate change resilient and sustainable communities
            worldwide, founded in our commitment to respond and adapt to the urgent challenges of the climate crisis
            and its economic impact.{' '}
            <a href="#" className="text-blue-500 underline">
              Read more about our mission here.
            </a>
          </p>
          <p className="text-gray-900 mb-6md: md:w-96 w-80 font-sans">
           <strong className="font-bold"> Nowhere on Earth will be 100% safe from all climate change consequences.</strong> But we can create climate-safer
            locations and communities using the practices of climate change preparation, adaptation, and resilience
            building. ClimateSafe Villages will help you make wherever you live as climate-safe as possible using these
            practices.
          </p>
          <button  className="px-16 py-4 text-xl mt-5 md:ml-0 ml-9 bg-gray-900 text-white rounded-md hover:bg-gray-400">Learn More</button>
        </div>
        <div className="lg:w-1/2">
          <div className="aspect-w-2 aspect-h-2 overflow-hidden rounded-full mt-5 md:mt-0">
            <img
              src="https://images.squarespace-cdn.com/content/v1/65b174615ca6b200ca450bc4/860817ee-b0cd-4a80-a6d3-819ba7e7c8f9/comingtogether2.png?format=2500w" 
              alt="Mission Illustration"
              className="object-cover w-full h-full "
            />
          </div>
        </div>
      </div>

      
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-center mb-8">Why Join?</h2>
        <p className='text-center mb-8'>A.R Sustainable Community membership offers the following benefits for people concerned about climate change resilience:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="text-center">
            <img src="https://images.squarespace-cdn.com/content/v1/65b174615ca6b200ca450bc4/b68b324d-011a-4990-b033-4d4a9dd745b7/resourcesicontext.jpg?format=500w" alt="Icon 1" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Access to advice and resources</h3>
            <p className="text-gray-700 leading-relaxed">
              The A.R Sustainable community is putting together practical, actionable guides to building your personal climate
              resilience.
            </p>
          </div>
          <div className="text-center">
            <img src="https://images.squarespace-cdn.com/content/v1/65b174615ca6b200ca450bc4/315e8e42-08c5-4263-a77e-64aa88e66419/virtualnetworkicon.png?format=300w" alt="Icon 2" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">A large, active community</h3>
            <p className="text-gray-700 leading-relaxed">
              Navigate similar concerns, build resilience, and create local groups to find others near your location.
            </p>
          </div>
          <div className="text-center">
            <img src="https://images.squarespace-cdn.com/content/v1/65b174615ca6b200ca450bc4/126a8550-01bb-4532-b5de-df49679f6194/communityvillageicon.png?format=500w" alt="Icon 3" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Opportunities to join communities</h3>
            <p className="text-gray-700 leading-relaxed">
              Be part of the first A.R Sustainable communities and join initial planning groups.
            </p>
          </div>
          <div className="text-center">
            <img src="https://images.squarespace-cdn.com/content/v1/65b174615ca6b200ca450bc4/e1fd6ae3-672a-48c0-8418-0cba09d69f56/volunteericon.png?format=500w" alt="Icon 4" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Volunteer to make a difference</h3>
            <p className="text-gray-700 leading-relaxed">
              Join initiatives to reduce environmental impact, foster inclusive societies, and make an impact.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="px-20 py-4 text-xl bg-gray-900 text-white rounded-md hover:bg-gray-400">Join</button>
        </div>
      </div>

      
      <div className='md:flex justify-center md:gap-8 '>
      <div className=''>
        <h2 className="md:text-4xl text-2xl font-bold mb-8 md:w-[30rem] font-serif">Our Organizational Programs</h2>
        <p className='md:w-[28rem]'>ClimateSafe Villages is dedicated to fostering resilience and sustainability at both the individual and community levels through a comprehensive suite of programs:</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-1  md:ml-20">
          <div>
            <ul className="md:space-y-4 space-y-2">
              <li>
                <details className="group">
                  <summary className="font-semibold text-lg cursor-pointer">
                    Virtual Network Support
                  </summary>
                  <p className="text-gray-700 mt-2 w-96">
                  At the heart of A.R Sustainable is our Virtual Network, which connects villages globally and individuals committed to the climate resilience movement. We facilitate the exchange of resources, ideas, and strategies, ensuring that regardless of location, all members of our network can actively participate in and contribute to our collective mission.
                  </p>
                </details>
              </li>
              <li>
                <details className="group">
                  <summary className="font-semibold text-lg cursor-pointer">
                    Advisory Committee and Resource Development
                  </summary>
                  <p className="text-gray-700 mt-2 w-96">Our Advisory Committee comprises committed volunteers, experts, and thought leaders who are integral to the creation of guidance, best practices, and educational materials. They offer strategic advice and craft templates to guide the development of resilient communities. This support is crucial in equipping both existing and emerging villages with the knowledge to navigate the intricacies of sustainability and climate adaptation.</p>
                </details>
              </li>
              <li>
                <details className="group">
                  <summary className="font-semibold text-lg cursor-pointer">
                    Educational Outreach
                  </summary>
                  <p className="text-gray-700 mt-2 w-96">
                  Education is a cornerstone of our work. We deliver an array of educational content, including instructional videos, comprehensive online articles, downloadable PDF guides, and interactive virtual events and panels. Additionally, we value the personal touch and offer in-person visits for deeper engagement and learning. These resources are designed to empower communities with the knowledge to implement sustainable practices effectively.
                  </p>
                </details>
              </li>
              <li>
                <details className="group">
                  <summary className="font-semibold text-lg cursor-pointer">
                    Support for Low-Income Community Building
                  </summary>
                  <p className="text-gray-700 mt-2 w-96">Recognizing the importance of inclusivity in the fight against climate change, CSV is committed to providing targeted support to low-income individuals and families. Our aim is to ensure that economic barriers do not hinder the ability to join or create resilient communities. We aim to offer assistance that ranges from educational content tailored to resource-strapped contexts to support mechanisms for starting new, sustainable living initiatives.</p>
                </details>
              </li>
            </ul>
          </div>
            </div>
       
            </div>
          <div className='justify-center items-center flex p-7'>
            <img
              src="https://images.squarespace-cdn.com/content/v1/65b174615ca6b200ca450bc4/12999ac1-d927-4d30-9707-2a04b07fb4fc/IMG_1596.jpeg?format=1500w" 
              alt="Programs Illustration"
              className="rounded-lg shadow-lg h-72 w-72"
            />
      </div>
      <div className='md:flex justify-center md:p-10'>
        <div className='md:w-[35rem] leading-7 md:ml-28'>
          <h1 className='md:font-semibold font-bold text-xl md:ml-4'>Our first village community - A.R Haryana</h1>
          <p className='md:p-4'>A.R Haryana, in addition to climate -change resilience, prioritizes livability through three foundational pillars. First, it nurtures a positive community culture that encourages collaboration and mutual support, helping to reduce social isolation. Secondly, it integrates sustainable living practices, aiming to create a net-positive impact on the environment and improve overall quality of life. Lastly, the model incorporates workshare and educational programs, which are key to advancing our goals of inclusivity and community service, thereby giving the village a broader societal role.</p>

          <p className='md:p-4'>A.R Haryana, like other future A.R  Sustainable Community, is independent of A.R . However, A.R Sustainable community does highlight Villages and group projects that are aligned with our overall mission and criteria, through a vetting process by the Advisors Committee. CSV Washington, as our Flagship Location, is featured here to give people a sense of what CSV locations are like. </p>

          <p className='md:p-4'> A.R Haryana comes together, we will provide opportunities for people to visit and learn from what we are putting together.</p>

          <button  className="px-16 py-4 text-xl bg-gray-900 md:ml-4 ml-8 md:mt-0 mt-5 text-white rounded-md hover:bg-gray-400">Learn More</button>
        </div>
        <div >
          <img className='md:w-[50rem] md:h-[45rem] w-96 h-80 md:ml-10 md:mt-0 mt-5' src='https://images.squarespace-cdn.com/content/v1/65b174615ca6b200ca450bc4/702b7962-92f2-45cb-81ae-2c525f7eadf6/Screenshot+2024-10-25+104732.png?format=1500w'/>
        </div>
      </div>

       
      <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row  justify-between w-full max-w-6xl">
        {/* Left Section */}
        <div className="mb-8 md:mb-0 md:pr-8">
          <h1 className="md:text-5xl text-3xl md:mt-0 mt-4 font-bold leading-tight text-black">
            Project Timeline <br /> and Plan for <br /> Network Villages
          </h1>
        </div>

        {/* Right Section */}
        <div className="max-w-lg md:text-base text-sm p-5">
          <p className="text-gray-700 mb-4">
            Our AR Sustainable Community Network Villages take a phased approach.{" "}
            <a
              href="#"
              className="text-blue-600 underline"
            >
              A.R Haryana
            </a>{" "}
            is currently in the process of finalizing our initial founding
            members, and purchasing a piece of land. Move-in for Phase 1 is
            currently planned for 2024. If you are interested in learning more
            and signing up,{" "}
            <Link to=""
              
              className="text-blue-600 underline"
            >
              join our community here

            </Link>
            
          </p>
          <p className="text-gray-700 font-medium mb-4">
            Locations that are recruiting members currently:
          </p>
          <ul className="grid md:grid-cols-3 grid-cols-2 gap-4 text-gray-700">
            <li>Haryana </li>
            <li>Uttar Pradesh </li>
            <li> Uttrakhand </li>
            <li> Punjab </li>
            <li> Chattisgrah </li>
            <li> Bihar </li>
            <li> West Bengal</li>
            <li> Andhrapradesh </li>
            <li> Maharashtra </li>
            <li> Gjarat</li>
          </ul>
          
      <button className="px-20 py-4 mt-10 md:ml-0 ml-6  text-xl bg-gray-900 text-white rounded-md hover:bg-gray-400">
            Join
          </button>
        </div>
      </div>
    </div>

    <div className='md:flex justify-center gap-8 space-y-7 md:space-y-0 mt-20'>
      <img className='md:h-32 w-80 md:w-32 h-80 rounded-xl'  src='https://images.squarespace-cdn.com/content/v1/65b174615ca6b200ca450bc4/9e9a36d6-f996-4983-b016-d104b081aa39/925d358d-2f6c-4b7f-ac52-63bbcd3bbfb6.png?format=1500w'></img>
      <img className='md:h-32 w-80 md:w-32 h-80 rounded-xl'  src='https://images.squarespace-cdn.com/content/v1/65b174615ca6b200ca450bc4/3d389fcb-6ff8-4a5c-b38d-aa37161f6a59/Peter-Carter.jpg?format=1500w'></img>
      <img className='md:h-32 w-80 md:w-32 h-80 rounded-xl'  src='https://images.squarespace-cdn.com/content/v1/65b174615ca6b200ca450bc4/80c39b05-1817-45b2-a4c9-c33b69562659/unnamed+%283%29.jpg?format=1500w'></img>
      <img className='md:h-32 w-80 md:w-32 h-80 rounded-xl'  src='https://images.squarespace-cdn.com/content/v1/65b174615ca6b200ca450bc4/64b77cc4-c270-4b29-9881-de43f1d2298b/IMG_2437.jpg?format=1500w'></img>
      <img className='md:h-32 w-80 md:w-32 h-80 rounded-xl'  src='https://images.squarespace-cdn.com/content/v1/65b174615ca6b200ca450bc4/131e870b-f826-4e3f-b5ad-cfc87ad29e4f/Screenshot+2024-03-15+122024.png?format=1500w'></img>
      <img className='md:h-32 w-80 md:w-32 h-80 rounded-xl'  src='https://images.squarespace-cdn.com/content/v1/65b174615ca6b200ca450bc4/131e870b-f826-4e3f-b5ad-cfc87ad29e4f/Screenshot+2024-03-15+122024.png?format=1500w'></img>
      <img  className='md:h-32 w-80 md:w-32 h-80 rounded-xl' src='https://images.squarespace-cdn.com/content/v1/65b174615ca6b200ca450bc4/db579152-d869-413f-96bc-5be8d3176a2c/1563123115205.jpg?format=1500w'></img>
    </div>

    <div className='md:flex justify-center md:gap-32 mt-10'>
      <div className=''>
        <h2 className="text-4xl font-bold mb-8 md:w-[30rem] font-serif">Who we are</h2>
        <p className='md:w-[28rem]'>A.R Sustainable Community is a registered 501(c)(3) nonprofit organization. Contributions made to ClimateSafe Villages are tax-deductible to the extent permitted by law. Our tax identification number is 93-2910387. The information provided on this website is for general informational and educational purposes only.</p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-1  md:ml-20">
          <div className='md:mt-0 mt-5'>
            <ul className="space-y-4">
              <li>
                <details className="group">
                  <summary className="font-semibold text-lg cursor-pointer">
                  Advisors Committee
                  </summary>
                  <p className="text-gray-700 mt-2 md:w-96">
                  A.R  is a volunteer-driven organization. Our Advisors' committee forms the core of how we plan our projects and make decisions. The Advisors committee is made up of both experts in the field of climate resilience, climate science, engineering, agriculture, and other areas. We also have dedicated and committed volunteers who make CSV a supportive, inclusive, and successful movement. To learn more and potentially join the Advisors Committee, first join our community here.
                  </p>
                </details>
              </li>
              <li>
                <details className="group">
                  <summary className="font-semibold text-lg cursor-pointer">
                  Leonora Camner - Executive Director
                  </summary>
                  <p className="text-gray-700 mt-2 md:w-96">A mother of two, Leonora is an experienced nonprofit leader with over five years of experience running multiple nonprofits, including in housing advocacy and democracy reform. She is currently serving on the Board of Directors of the Shift Our Ways Collective, an urban farming and local food initiative. Previously, she was Executive Director of Abundant Housing LA. Living in Santa Monica with her family, she brings a compassionate and community-driven approach to our organization.</p>
                </details>
              </li>
              <li>
                <details className="group">
                  <summary className="font-semibold text-lg cursor-pointer">
                  Board of Directors - Dr. Peter Carter
                  </summary>
                  <p className="text-gray-700 mt-2 md:w-96">
                    <p>
                  Peter was an expert reviewer for the United Nation's Intergovernmental Panel on Climate Change's (IPCC) fifth climate change assessment (AR5, 2014) and the IPCC’s 2018 Special Report on 1.5ºC. In 2018, he published Unprecedented Crime: Climate Science Denial and Game Changers for Survival, which he co-authored with Elizabeth Woodworth. He is published on climate change, biodiversity, and environmental health. </p><br/>
                  <p>Peter has been synthesizing global warming and climate change research since 1988. His approach to assessing climate change is based on environmental health and human rights protection. Peter’s mission now is to spread the full truth about the extreme risks and magnitude of the global climate and ocean disruption emergency and the emergency response required. </p><br/>
                  <p>Peter was a founding director of CAPE (Canadian Association of Physicians for the Environment) and, more recently, founder of the Climate Emergency Institute. Peter Carter, M.D. currently is a retired family and emergency medicine physician, with a background in environmental health protection policy. .</p>
                 </p>
                </details>
              </li>
              <li>
                <details className="group">
                  <summary className="font-semibold text-lg cursor-pointer">
                  Board of Directors - Jeff Rice
                  </summary>
                  <p className="text-gray-700 mt-2 md:w-96">Jeff Rice lives in Seattle and has served with many Seattle organizations focusing on the Asian American community for many years. He served on the Board of Directors for the Filipino Community of Seattle and helped establish the youth program FilSTAR as well as contributed to the early planning of the Filipino Community Village, a mixed development providing affordable housing to seniors. He then was Treasurer on the Board of Directors for API Chaya Seattle which serves survivors of sexual violence, human trafficking, and domestic violence within the Pacific Islander, Native Hawaiian, Asian, and South Asian communities. He has pivoted his time and efforts towards understanding how climate change may impact global supply chains and connecting with groups to implement resilience within local communities. As part of Climate Safe Villages, he is actively involved with planning towards launching a site in Bellingham, WA. His hobbies include backyard farming, guerrilla-gardening, learning appliance repair, reading, learning DIY skills, and taking his kids to various sports activities. 
                  He currently works at Amazon as a Sr Manager and previously worked at Starbucks.</p>
                </details>
              </li>
              <li>
                <details className="group">
                  <summary className="font-semibold text-lg cursor-pointer">
                  Board of Directors - Benjamin Ofodum
                  </summary>
                  <p className="text-gray-700 mt-2 md:w-96">Benjamin is a lifelong learner with background in Chemical Engineering and Electrical Engineering focused on emerging technologies including renewables, decarbonization, energy efficiency and storage. With experience from working for a utility company, solar PV construction and as an independent contractor to a non-profit organization helping oil and gas workers looking to transition into renewables space, he is committed to initiatives that promote sustainability, drive innovation, and advocate for the collective well-being of our planet and humanity. By reimagining the integration of clean energy solutions within our built environment, he envisions a future defined by energy efficiency, sufficiency, and environmental harmony.</p>
                </details>
              </li>

              <li>
                <details className="group">
                  <summary className="font-semibold text-lg cursor-pointer">
                  Board of Directors - Tim Ely
                  </summary>
                  <p className="text-gray-700 mt-2 md:w-96">Tim Ely is a volunteer Community Lead with Climate Safe Villages. He is also co-leader of the St. Louis area chapter of Citizens’ Climate Lobby, a nonpartisan group which champions legislation to fight climate change. Tim received his Bachelor’s of Science degree in Computer Science from Purdue University, and an MBA from Washington University in St. Louis. When he’s not taking part in climate activism, Tim works as a cybersecurity engineer at a medical device company.</p>
                </details>
              </li>

              <li>
                <details className="group">
                  <summary className="font-semibold text-lg cursor-pointer">
                  Board of Directors - Dr. Isaac Jamieson
                  </summary>
                  <p className="text-gray-700 mt-2 md:w-96">Dr Isaac Jamieson, is a UK scientist, architect, environmental consultant and co-founder of BioSustainable Designs. He also lectures at Thammasat University in Thailand on subjects that cover issues related to innovation, urban design, building design, product design, biophilic design, urban agriculture, resilience, and sustainability. Much of his work focuses on how to create more biologically-friendly environments that help increase health, wellbeing and productivity.</p>
                </details>
              </li>
            </ul>
          </div>
            </div>
            </div>      
            <button  className="px-16 py-4 text-xl bg-gray-900 md:ml-56 ml-8 mt-5 text-white rounded-md hover:bg-gray-400">Learn More</button>
     
    </section>
    </div>
  );
};

export default About;
