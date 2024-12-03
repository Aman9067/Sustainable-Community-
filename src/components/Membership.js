import {React,useState} from 'react'


const Membership = () => {
    const [selectedAmount, setSelectedAmount] = useState("5000");
    const [customAmount, setCustomAmount] = useState("");
  
    const handleAmountChange = (amount) => {
      setSelectedAmount(amount);
      setCustomAmount(""); // Reset custom input when another option is selected
    };
  
    const handleCustomAmount = (e) => {
      setSelectedAmount(e.target.value);
      setCustomAmount(e.target.value);
    };
    return (
        <div className="min-h-[1600px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/624b503dcf00e94df2b0f15b/1649102923758-J4BNC8UY26T3BM2B32KS/20140302_Trade%2B151_0503.jpg?format=2500w')" }}>
          <div className=" bg-opacity-40 bg-gray-950 min-h-[1600px] flex flex-col lg:flex-row text-white px-4 lg:px-16 py-8">
           
            <div className="lg:w-1/2 w-full flex flex-col justify-center space-y-6 md:-mt-96 md:ml-48">
              <h2 className="text-3xl lg:text-5xl font-bold md:w-[26rem]">Sign up to receive updates</h2>
              <p className='md:w-96'>
                Are you interested in receiving updates about Sustainable ? Sign up below to hear about:
              </p>
              <ul className="list-disc md:list-inside space-y-1 md:ml-0 ml-5">
                <li>Organizational updates and progress</li>
                <li>Opportunities to join new Sustainable communities</li>
                <li>Volunteer opportunities</li>
                <li>Events, classes, and materials</li>
              </ul>
    
              <form className="space-y-4">
                <div className="md:flex md:space-x-4 md:ml-0 ml-5">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="md:w-[12rem] w-72 p-2 bg-white"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="md:w-[12rem] w-72 p-2 md:mt-0 mt-5 bg-white"
                    required
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email (required)"
                  className="md:w-[25rem] w-72 p-2 bg-white md:ml-0 ml-5"
                  required
                />
                <div className="flex items-center space-x-2 md:ml-0 ml-5">
                  <input type="checkbox" id="newsletter" />
                  <label htmlFor="newsletter">Sign up for news and updates</label>
                </div>
                <select className="md:w-[25rem] w-72 p-2 bg-white text-black md:ml-0 ml-5">
                  <option> Select an option</option>
                  <option value="web search">Web search</option>
                  <option value="twitter/X">Twitter/X</option>
                  <option value="reddit">Reddit</option>
                  <option value="youtube">Youtube</option>
                  <option value="tiktok">TikTok</option>
                  <option value="facebook">Facebook</option>
                  <option value="friend">Friend</option>
                  <option value="other">Other</option>
                  <option value="other"></option>
                </select>
                <div className="flex items-center space-x-2 md:ml-0 ml-5">
                  <input type="checkbox" id="volunteering" />
                  <label htmlFor="volunteering">I am interested in volunteering</label>
                </div>
                <button
                  type="submit"
                  className="w-32 md:ml-0 ml-5 bg-white text-black hover:bg-blue-700 focus:bg-green-500 p-4  font-semibold"
                >
                  Submit
                </button>
              </form>
            </div>
    
            {/* Right Section */}
            <div className='md:mt-64 mt-5 md:-ml-36'>
            <h2 className="text-3xl lg:text-5xl font-bold md:w-[35rem]">Become a member</h2>
              <p className='md:w-96 mt-7'>
              Are you ready to become a A.R Sustainable Community Member?<br/>
              <p className='leading-6 mt-8'>Use the payment form below to sign up as a member. To see the benefits of membership tiers,
                <a className='underline' href='#' >read more here.</a>
              </p>
              <p className='md:w-[330px] mt-7'>Do you need to request a needs-based waiver of membership fees? 
                <a className='underline' href='#'>Click here</a>
              </p>
              </p>
            
      <div className="w-80 h-[60%] bg-white shadow-lg rounded-lg overflow-hidden mt-10">
        <div className="bg-blue-600 text-white text-center py-4">
          <h2 className="font-semibold text-xl">Membership</h2>
          <p className="mt-1 text-sm">Annually</p>
        </div>
        <div className="p-6">
          <p className="text-center text-gray-600 text-sm mb-4">
            You can log in to edit your recurring payment <br /> any time
          </p>
          <select
            className="w-full border rounded-lg p-1 mb-6 text-gray-600 focus:outline-none"
            defaultValue="INR"
          >
            <option value="INR">Indian Rupee (INR)</option>
            <option value="USD" disabled>US Dollar (USD)</option>
            <option value="EUR" disabled>Euro (EUR)</option>
          </select>
          <div className="space-y-2">
            {[
              { amount: "762", label: "Pay-What-You-Think-Is-Fair Forum Access (recommended amount)" },
              { amount: "4229", label: "Annual Basic Membership" },
              { amount: "8457", label: "Annual Full Membership" },
              { amount: "211404", label: "Lifetime Membership" },
            ].map((option) => (
              <label
                key={option.amount}
                className={`block border rounded-lg p-2 cursor-pointer ${
                  selectedAmount === option.amount ? "border-blue-600 bg-blue-50" : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="membership"
                  value={option.amount}
                  className="hidden"
                  onChange={() => handleAmountChange(option.amount)}
                  checked={selectedAmount === option.amount}
                />
                <span className="block text-lg font-semibold text-black">₹{option.amount}</span>
                <span className="text-gray-600 text-sm">{option.label}</span>
              </label>
            ))}
            <label
              className={`block border rounded-lg p-2 cursor-pointer ${
                customAmount && selectedAmount === customAmount ? "border-blue-600 bg-blue-50" : "border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="membership"
                value={customAmount}
                className="hidden"
                onChange={() => handleAmountChange(customAmount)}
                checked={selectedAmount === customAmount}
              />
              <div className="flex items-center space-x-2">
                <span className="block text-lg font-semibold">₹</span>
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={handleCustomAmount}
                  className="w-full border-0 focus:ring-0 focus:outline-none text-lg text-black"
                />
              </div>
            </label>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 mt-6 rounded-lg font-semibold hover:bg-blue-700">
            Next
          </button>
        </div>
        <div className="text-center text-sm text-gray-400 py-4">
          Powered by A.R Sustainable Community
        </div>
      </div>
    </div>
        </div>
        </div>
      );
    };

export default Membership