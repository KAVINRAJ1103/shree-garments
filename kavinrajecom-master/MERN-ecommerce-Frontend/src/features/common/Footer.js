function Footer() {
  return (
    <>
      <div className=" bg-gray-900">
        <div className="max-w-2xl mx-auto text-white py-10">
          <div className="text-center">
            <h3 className="text-3xl font-bold tracking-tight text-white-900"> SHREE GARMENTS</h3>
           <br></br> <p> Buy what you want. </p>
            <div className="flex justify-center my-10">
              <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                <img
                  src="https://res.cloudinary.com/dkhdepewu/image/upload/v1709267521/smtymljmqlkagmgfppsq.png
                  "
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Dial On </p>
                  <p className="text-sm md:text-base"> +919994442178 </p>
                </div>
              </div>
              <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
                <img
                  src="https://res.cloudinary.com/dkhdepewu/image/upload/v1709267282/p7cvgw3cgjwwm6pf7lux.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Whatsapp </p>
                  <p className="text-sm md:text-base"> +919994442178 </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0">
              {' '}
              © ShreeGarments, 2024.{' '}
            </p>
            <div className="order-1 md:order-2">
            <a href="/about" className="px-2">About us</a>
            <a href="/contact" className="px-2">Contact us</a>
              <span className="px-2 border-l">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
