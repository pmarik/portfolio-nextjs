import HeroSection from '@/components/organisms/HeroSection/HeroSection.component'
import ProjectsSection from '@/components/organisms/ProjectsSection/ProjectsSection.component'
import ServicesSection from '@/components/organisms/ServicesSection/ServicesSection.component'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
    </main>
  )
}
