import { getPortfolioData } from '@/lib/data'
import Nav from '@/components/portfolio/Nav'
import MobileNav from '@/components/portfolio/MobileNav'
import BgOrbs from '@/components/portfolio/BgOrbs'
import HeroSection from '@/components/portfolio/HeroSection'
import ApproachSection from '@/components/portfolio/ApproachSection'
import SkillsSection from '@/components/portfolio/SkillsSection'
import ExperienceSection from '@/components/portfolio/ExperienceSection'
import ProjectsSection from '@/components/portfolio/ProjectsSection'
import ContactSection from '@/components/portfolio/ContactSection'

export default function Home() {
  const data = getPortfolioData()

  return (
    <>
      <BgOrbs />
      <Nav available={data.personal.available} />
      <MobileNav />
      <main>
        <HeroSection data={data} />
        <ApproachSection approach={data.approach} />
        <ProjectsSection projects={data.projects} />
        <SkillsSection skills={data.skills} />
        <ExperienceSection experience={data.experience} education={data.education} />
        <ContactSection data={data} />
      </main>
    </>
  )
}
