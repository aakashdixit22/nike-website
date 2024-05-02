import { CustomerReviews,Footer,Hero,Services,SpecialOffer,Subscribe,PopularProducts,SuperQuality } from "./sections";
import Nav from "./components/Nav";
const App = () => (
  <main className="relative">
    <Nav/>
  <section className="xl:padding-l
    wide:padding-r padding-b">
    <Hero/>
    </section>
    <section className="padding">
    <PopularProducts/>
    </section>
    <section className="padding">
    <SuperQuality/>
    </section>
    <section className="padding-x py-10">
    <Services/>
    </section>
    <section className="padding">
    <SpecialOffer/>
    </section>
    <section className=" bg-blue-200 padding">
    <CustomerReviews/>
    </section>
    <section className="padding sm:py-32 py-16 w-full">
    <Subscribe/>
    </section><section className="bg-black padding-x padding-t pb-8">
    <Footer/>
    </section>
  </main>
);
export default App;