import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify wrap items-center max-xl:flex-col-reverse gap-10 max-container">
    <div className="flex-1">
      <img src={offer} width={775} height={687}
      className="object-contain w-full"/>
    </div>
    <div className="flex flex-1 flex-col">
      
      <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
       Special
       <span className="text-coral-red"> Offer</span>
        
      </h2>
      <p className="mt-4 lg:max-w-lg info-text">
        Embark on a shopping journey that redefines your 
        experience with unbeatable deals.From premier selections to 
        incredible savings.
      </p>
      <p className="info-text mt-6 lg:max-w-lg">
        Navigate a realm of possiblities designed to fulfill
        your unique desires surpassing the loftiest expectations.Your 
        journey with us  is nothing short of exceptional
      </p>
      <div className="mt-11 flex flex-wrap-4 gap-4">
      <Button label="Shop Now" iconURL={arrowRight}/>
      <Button label="Learn More"
      backgroundColor="bg-white"
      borderColor="border-slate-gray"
      textColor="text-black"
      />
      </div>
      </div>
    

    </section>
  )
}

export default SpecialOffer