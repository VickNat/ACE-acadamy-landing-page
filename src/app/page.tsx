'use client'
import ContactUs from './components/ContactUs'
import HomeSection from './components/HomeSection'
import ServicesSection from './components/ServicesSection'
import WhoWeAreSection from './components/WhoWeAreSection'

export default function Home() {
  return (
    <main className="">
      <section className="" id="home">
        <HomeSection />
      </section>
      <section className="" id="whoweare">
        <WhoWeAreSection />
      </section>
      <section className="" id="services">
        <ServicesSection />
      </section>
      <section className="" id="contactus">
        <ContactUs />
      </section>
    </main>
  )
}
