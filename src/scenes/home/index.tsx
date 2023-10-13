import { SelectedPage } from "@/shared/types"
import ActionButton from "@/shared/ActionButton"
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}

const Home = ({setSelectedPage}: Props) => {
  const isAboveMediumScreen =useMediaQuery("(min-width:1060px)")
  return  <section
  id="home"
  className="gap-16 py-10 bg-gray-20 md:h-full md:pb-0"
  >
    {/* Image and Main header */}
    <motion.div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
    onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
    >
      {/* Main header */}
      <div className="z-10 mt-32 md:basis-3/5">
        {/* Heading */}
        <motion.div className="md:-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true , amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden:{ opacity: 0 , x:-50 },
          visible:{ opacity: 1 , x: 0 },
        }}
        >
          <div className="relative">
            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
              <img src={HomePageText} alt="home-page-text" />
            </div>
          </div>
          <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
        </motion.div>
        {/* Actions */}
        <motion.div className="mt-8 flex items-center md:justify-start gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true , amount: 0.5 }}
        transition={{delay:0.2,duration: 0.5 }}
        variants={{
          hidden:{ opacity: 0 , x:-50 },
          visible:{ opacity: 1 , x: 0 },
        }}
        >
          <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
          <AnchorLink 
          className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
          onClick={()=>setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
          >
            <p>Learn more</p>
          </AnchorLink>
        </motion.div>
      </div>
      {/* Image */}
      <div>
        <img src={HomePageGraphic} alt="home-page-graphic" />
      </div>
    </motion.div>
    {isAboveMediumScreen && (
      <div className="h-[150px] w-full bg-primary-100 py-10">
        <div className="mx-auto w-5/6">
          <div className="flex w-3/5 justify-between items-center gap-8">
            <img src={SponsorRedBull} alt="redbull-sponser" />
            <img src={SponsorForbes} alt="forbes-sponser" />
            <img src={SponsorFortune} alt="fortune-sponser" />
          </div>
        </div>
      </div>
    )}
  </section>
}

export default Home
